#!/usr/bin/env node
// SPDX-License-Identifier: MIT

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";

const repoRoot = process.cwd();
const catalogPath = path.join(repoRoot, "catalog.json");
const failures = [];
const warnings = [];
const catalog = readJson(catalogPath);

if (!Array.isArray(catalog.datasets)) {
  failures.push("catalog.json must include datasets[].");
} else {
  for (const dataset of catalog.datasets) {
    validateDataset(dataset);
  }
}

if (warnings.length > 0) {
  console.warn("Warnings:");
  for (const warning of warnings) console.warn(`  - ${warning}`);
}

if (failures.length > 0) {
  console.error("Failures:");
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(`Validated ${catalog.datasets.length} dataset manifests.`);

function validateDataset(dataset) {
  const label = dataset.id ?? dataset.path ?? "<unknown>";
  if (!isString(dataset.id)) failures.push(`${label}: missing id.`);
  if (!isString(dataset.path)) failures.push(`${label}: missing path.`);
  if (!isString(dataset.manifest)) failures.push(`${label}: missing manifest.`);
  if (!isString(dataset.anchorPath)) failures.push(`${label}: missing anchorPath.`);

  const datasetDir = path.join(repoRoot, dataset.path ?? "");
  const manifestPath = path.join(repoRoot, dataset.manifest ?? "");
  if (!existsSync(datasetDir)) {
    failures.push(`${label}: dataset directory does not exist: ${dataset.path}`);
    return;
  }
  if (!existsSync(manifestPath)) {
    failures.push(`${label}: manifest does not exist: ${dataset.manifest}`);
    return;
  }

  const manifest = readJson(manifestPath);
  if (manifest.dataset !== dataset.id) failures.push(`${label}: catalog id and manifest dataset differ.`);
  if (manifest.anchorPath !== dataset.anchorPath) failures.push(`${label}: catalog anchorPath and manifest anchorPath differ.`);
  if (!isSafeAnchorPath(manifest.anchorPath)) failures.push(`${label}: unsafe anchorPath: ${manifest.anchorPath}`);
  if (!Array.isArray(manifest.files)) failures.push(`${label}: manifest files must be an array.`);
  if (!isString(manifest.title)) warnings.push(`${label}: add manifest title.`);
  if (!isString(manifest.description)) warnings.push(`${label}: add manifest description.`);

  const files = Array.isArray(manifest.files) ? manifest.files : [];
  const seen = new Set();
  let manifestBytes = 0;
  let missingLicenseCount = 0;
  let missingContentTypeCount = 0;

  for (const entry of files) {
    if (!isString(entry.path)) {
      failures.push(`${label}: every file entry needs a string path.`);
      continue;
    }
    if (!isSafeRelativePath(entry.path)) {
      failures.push(`${label}: unsafe file path: ${entry.path}`);
      continue;
    }
    if (seen.has(entry.path)) failures.push(`${label}: duplicate file path: ${entry.path}`);
    seen.add(entry.path);

    const filePath = path.join(datasetDir, entry.path);
    if (!existsSync(filePath)) {
      failures.push(`${label}: file missing from disk: ${entry.path}`);
      continue;
    }
    manifestBytes += statSync(filePath).size;

    const contentType = entry.contentType ?? manifest.defaults?.contentType;
    if (!isString(contentType)) missingContentTypeCount += 1;
    const license = entry.license ?? manifest.defaults?.license;
    if (!isString(license)) missingLicenseCount += 1;
    if (entry.tags !== undefined && !isStringArray(entry.tags)) failures.push(`${label}/${entry.path}: tags must be an array of strings.`);
    if (entry.aboutCard !== undefined) validateSidecar(label, datasetDir, entry.path, entry.aboutCard, "aboutCard");
  }

  const actualFiles = listFiles(datasetDir).filter(file => file !== "manifest.json" && file !== "README.md" && file !== "ADDRESSES.md");
  if (dataset.fileCount !== files.length) warnings.push(`${label}: catalog fileCount ${dataset.fileCount} differs from manifest count ${files.length}.`);
  if (actualFiles.length < files.length) warnings.push(`${label}: fewer payload files on disk than manifest entries.`);
  if (typeof dataset.bytes === "number" && dataset.bytes !== manifestBytes) {
    warnings.push(`${label}: catalog bytes ${dataset.bytes} differs from manifest payload bytes ${manifestBytes}.`);
  }
  if (missingContentTypeCount > 0) warnings.push(`${label}: ${missingContentTypeCount} file(s) missing contentType/defaults.contentType.`);
  if (missingLicenseCount > 0) warnings.push(`${label}: ${missingLicenseCount} file(s) missing machine-readable license.`);
}

function validateSidecar(label, datasetDir, entryPath, sidecar, field) {
  if (!isString(sidecar) || !isSafeRelativePath(sidecar)) {
    failures.push(`${label}/${entryPath}: unsafe ${field}: ${sidecar}`);
    return;
  }
  if (!existsSync(path.join(datasetDir, sidecar))) {
    failures.push(`${label}/${entryPath}: missing ${field}: ${sidecar}`);
  }
}

function readJson(filePath) {
  try {
    return JSON.parse(readFileSync(filePath, "utf8"));
  } catch (error) {
    failures.push(`${path.relative(repoRoot, filePath)}: ${error.message}`);
    return {};
  }
}

function listFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const fullPath = path.join(dir, name);
    const rel = path.relative(dir, fullPath);
    if (statSync(fullPath).isDirectory()) {
      for (const nested of listFiles(fullPath)) out.push(path.join(rel, nested));
    } else {
      out.push(rel);
    }
  }
  return out;
}

function isString(value) {
  return typeof value === "string" && value.length > 0;
}

function isStringArray(value) {
  return Array.isArray(value) && value.every(item => typeof item === "string");
}

function isSafeAnchorPath(value) {
  return (
    isString(value) &&
    value.startsWith("/") &&
    value !== "/" &&
    !value.includes("//") &&
    value
      .split("/")
      .filter(Boolean)
      .every(isSafeAnchorSegment)
  );
}

function isSafeRelativePath(value) {
  return isString(value) && !path.isAbsolute(value) && value.split(/[\\/]/).every(isSafeAnchorSegment);
}

function isSafeAnchorSegment(segment) {
  if (!segment || segment === "." || segment === "..") return false;
  const bytes = Buffer.from(segment, "utf8");
  for (let index = 0; index < bytes.length; index += 1) {
    const byte = bytes[index];
    if (byte === 0x25) {
      if (index + 2 >= bytes.length || !isUpperHex(bytes[index + 1]) || !isUpperHex(bytes[index + 2])) return false;
      const decoded = (hexNibble(bytes[index + 1]) << 4) | hexNibble(bytes[index + 2]);
      if (!isReservedByte(decoded) && decoded !== 0x25) return false;
      index += 2;
    } else if (isReservedByte(byte)) {
      return false;
    }
  }
  return true;
}

function isUpperHex(byte) {
  return (byte >= 0x30 && byte <= 0x39) || (byte >= 0x41 && byte <= 0x46);
}

function hexNibble(byte) {
  if (byte >= 0x30 && byte <= 0x39) return byte - 0x30;
  return byte - 0x41 + 10;
}

function isReservedByte(byte) {
  if (byte < 0x20 || byte === 0x7f) return true;
  return (
    byte === 0x20 ||
    byte === 0x22 ||
    byte === 0x23 ||
    byte === 0x26 ||
    byte === 0x2f ||
    byte === 0x3a ||
    byte === 0x3d ||
    byte === 0x3f ||
    byte === 0x40 ||
    byte === 0x5b ||
    byte === 0x5c ||
    byte === 0x5d ||
    byte === 0x5e ||
    byte === 0x60 ||
    byte === 0x7b ||
    byte === 0x7c ||
    byte === 0x7d
  );
}
