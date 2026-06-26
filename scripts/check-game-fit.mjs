#!/usr/bin/env node
// SPDX-License-Identifier: MIT

import { spawn } from "node:child_process";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import process from "node:process";

const chromePath = process.env.CHROME_PATH ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const repoRoot = process.cwd();
const gamesDir = path.join(repoRoot, "datasets/web-games");
const games = [
  "snake.html",
  "tetris.html",
  "breakout.html",
  "block-dude.html",
  "helicopter.html",
  "puzzle-bobble.html",
  "doodle-jump.html",
  "sokoban.html",
  "missile-command.html",
  "frogger.html",
  "bomberman.html",
  "pong.html",
  "tiny-yurts.html",
  "infernal-throne.html",
  "dante.html",
];
const viewports = [
  { width: 800, height: 600 },
  { width: 390, height: 600 },
  { width: 320, height: 480 },
];

const userDataDir = await mkdtemp(path.join(tmpdir(), "efs-game-fit-"));
const chrome = spawn(chromePath, [
  "--headless=new",
  "--remote-debugging-port=0",
  `--user-data-dir=${userDataDir}`,
  "--no-first-run",
  "--no-default-browser-check",
  "about:blank",
], { stdio: ["ignore", "ignore", "pipe"] });

let stderr = "";
chrome.stderr.on("data", chunk => {
  stderr += chunk.toString();
});

let cdp;
try {
  const webSocketDebuggerUrl = await waitForPageDebuggerUrl();
  cdp = await connectCdp(webSocketDebuggerUrl);
  const failures = [];

  for (const viewport of viewports) {
    await cdp.send("Emulation.setDeviceMetricsOverride", {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width < 500,
    });

    for (const game of games) {
      const fileUrl = pathToFileUrl(path.join(gamesDir, game));
      const loaded = waitForLoad(cdp);
      await cdp.send("Page.navigate", { url: fileUrl });
      await loaded;
      await delay(300);
      const result = await cdp.evaluate(`(() => {
        const doc = document.documentElement;
        const body = document.body;
        const width = Math.max(doc.scrollWidth, body?.scrollWidth || 0);
        const height = Math.max(doc.scrollHeight, body?.scrollHeight || 0);
        return {
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          scrollWidth: width,
          scrollHeight: height,
          overflowX: width > window.innerWidth + 1,
          overflowY: height > window.innerHeight + 1
        };
      })()`);
      if (result.overflowX || result.overflowY) {
        failures.push(`${game} at ${viewport.width}x${viewport.height}: scroll ${result.scrollWidth}x${result.scrollHeight}, viewport ${result.viewportWidth}x${result.viewportHeight}`);
      }
    }
  }

  if (failures.length > 0) {
    console.error("Game fit failures:");
    for (const failure of failures) console.error(`  - ${failure}`);
    process.exitCode = 1;
  } else {
    console.log(`All ${games.length} games fit ${viewports.length} viewport sizes without document scrollbars.`);
  }
} finally {
  cdp?.close();
  chrome.kill("SIGTERM");
  await waitForChromeExit();
  await rm(userDataDir, { recursive: true, force: true });
}

async function waitForPageDebuggerUrl() {
  const deadline = Date.now() + 10000;
  while (Date.now() < deadline) {
    const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/);
    if (match) {
      const port = new URL(match[1]).port;
      const response = await fetch(`http://127.0.0.1:${port}/json/list`);
      const targets = await response.json();
      const page = targets.find(target => target.type === "page" && target.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    }
    if (chrome.exitCode !== null) throw new Error(`Chrome exited early with code ${chrome.exitCode}: ${stderr}`);
    await delay(50);
  }
  throw new Error(`Timed out waiting for Chrome DevTools URL: ${stderr}`);
}

async function connectCdp(url) {
  const socket = new WebSocket(url);
  const pending = new Map();
  const listeners = new Map();
  let nextId = 1;

  socket.addEventListener("message", event => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result ?? {});
      return;
    }
    const handlers = listeners.get(message.method);
    if (handlers) {
      for (const handler of handlers) handler(message.params ?? {});
    }
  });

  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  await send("Page.enable");
  await send("Runtime.enable");

  return {
    send,
    close() {
      socket.close();
    },
    on(method, handler) {
      if (!listeners.has(method)) listeners.set(method, new Set());
      listeners.get(method).add(handler);
      return () => listeners.get(method).delete(handler);
    },
    async evaluate(expression) {
      const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails));
      return result.result.value;
    },
  };

  function send(method, params = {}) {
    const id = nextId;
    nextId += 1;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
    });
  }
}

function waitForLoad(cdp) {
  return new Promise(resolve => {
    const unsubscribe = cdp.on("Page.loadEventFired", () => {
      unsubscribe();
      resolve();
    });
  });
}

function pathToFileUrl(filePath) {
  return `file://${filePath.split(path.sep).map(encodeURIComponent).join("/")}`;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function waitForChromeExit() {
  if (chrome.exitCode !== null) return Promise.resolve();
  return new Promise(resolve => {
    chrome.once("exit", resolve);
    setTimeout(resolve, 2000);
  });
}
