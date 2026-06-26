# Web Games - EFS Arcade dataset

A flat collection of **real, existing single-file HTML5 games**: each one is a webpage you drop into an `<iframe>` and play. This is the `/games` dataset for the Sepolia demo, alongside [`../crypto-whitepapers/`](../crypto-whitepapers/) and [`../cypherpunk-canon/`](../cypherpunk-canon/).

**The hard constraint that shaped this list:** putting a game on EFS means **re-hosting its bytes**, so every game here needs a license that permits redistribution. This cut favors CC0 and MIT games with committed playable bundles. Plenty of fun games exist, but if they need a backend, CDN, build step, sidecar asset folder, or unclear/non-commercial license, they do not belong in the Monday seed.

**Why games are a great EFS demo:** each game here is a single self-contained `.html` file: no external scripts, no backend, no install flow. That means one DATA at a stable anchor, tagged by genre, rendered by the client in a sandboxed iframe. It makes EFS feel less like "stored files" and more like a tiny playable arcade.

## Manifest - staged & verified for `/games`

| Game | File | Author | License | Source | Tags |
|---|---|---|---|---|---|
| Snake | `snake.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/ff00b4b49669ad3dec890306d348adc4) | arcade, classic |
| Tetris | `tetris.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/3c98304f8a6a9174efd8292800891ea1) | puzzle, classic |
| Breakout | `breakout.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/98a2aed6a7686d26c04810f08bfaf66b) | arcade, classic |
| Block Dude | `block-dude.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/df855f22e57576c80d6126aa5609654e) | puzzle, platformer, classic |
| Helicopter | `helicopter.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/0d25ae9d235f6a62f8287fd36a097043) | arcade, endless, classic |
| Puzzle Bobble | `puzzle-bobble.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/afc5bedc7f4b4bc65ba8b05c435f6d32) | puzzle, arcade, classic |
| Doodle Jump | `doodle-jump.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/b96a4a68bd6d79cf75a833d98a2b654f) | arcade, platformer, classic |
| Sokoban | `sokoban.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/2fddb507d4bb6bec54ea2fdb022d020c) | puzzle, classic |
| Missile Command | `missile-command.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/afc4e2a30b6df772a5f9f6ef01751d41) | arcade, classic |
| Frogger | `frogger.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/82a4368849cbd441b05bd6a044f2b2d3) | arcade, classic |
| Bomberman | `bomberman.html` | straker | CC0-1.0 | [gist](https://gist.github.com/straker/769fb461e066147ea16ac2cb9463beae) | arcade, maze, classic |
| Pong | `pong.html` | Drake Axelrod | MIT | [repo](https://github.com/drakeaxelrod/single-html-file-apps) | arcade, classic |
| Tiny Yurts | `tiny-yurts.html` | burntcustard | MIT | [repo](https://github.com/burntcustard/tiny-yurts) (js13k 2023) | cozy, sim, js13k |
| Infernal Throne | `infernal-throne.html` | Ariel Wexler | MIT | [repo](https://github.com/arikwex/infernal-sigil) (js13k 2022) | action, platformer, js13k |
| Dante | `dante.html` | Salvatore Previti (music: Ryan Malm) | MIT | [repo](https://github.com/SalvatorePreviti/js13k-2022) (js13k 2022 winner) | webgl, exploration, js13k |

All fifteen games were verified in a local headless Chrome smoke test: every file rendered, and the run reported zero console errors, exceptions, network failures, or external requests. Most files are kept **verbatim** from upstream; a small number have presentation-only CSS/layout adjustments so they fit cleanly inside the EFS iframe without document scrollbars. Those adjusted files are marked in `manifest.json`. The eight added straker games carry the same upstream CC0 notice used by the existing straker entries.

**Caveat — Pong:** single-player works fully offline; it also has an *optional* online-multiplayer mode that needs a WebSocket server you run yourself. Ignore that and it's a clean self-contained game.

**Note on attribution:** CC0 is public-domain (no attribution required, but we credit anyway); MIT requires the copyright notice be preserved — each MIT game keeps its in-file notice, and a seeded copy should carry it too (e.g. as a PROPERTY or a sibling about-card).

## Menu — more freely-licensed games worth adding (DIY or ask us)
Great targets if you'd rather curate than write. **Check (1) the license permits redistribution and (2) it's self-contained** before adding any.

| Game | License | Note |
|---|---|---|
| 2048 (Gabriele Cirulli) | MIT | Iconic. Small folder bundle (`index.html` + `js/` + `style/`), no CDN — seed as a folder, not a single file. |
| Astray | Unlicense (public domain) | 3D WebGL tilt-maze; vendored Three.js + Box2D, folder bundle. |
| HexGL | MIT | WipEout-style WebGL racer; large asset folder. |
| js13kGames entries | varies — check each | A goldmine: every entry ≤13 kB. Many MIT/Unlicense, but **some have no LICENSE → don't redistribute those.** |

## Rejected (looked good, can't cleanly redistribute/embed)
Honesty section — why curation takes judgment:
- **Untrusted** (edit-the-JS adventure — perfect for a hacker crowd): license is **CC-BY-NC** (non-commercial) + needs a build + CDN deps. Link to it, don't re-host.
- **Hextris** (GPLv3): redistributable but pulls Google Fonts/Analytics from CDNs — breaks offline/sandbox unless you strip those tags.
- **drakeaxelrod `snake.html`/`slots.html`**: MIT but load Phaser/React/Tailwind from CDNs (their `pong.html` is clean — that's the one we used).
- **Path to Glory**: excellent js13k game, but upstream asks people not to distribute or use it commercially without contacting the author first.
- **Dying Dreams**: strong js13k candidate, but custom terms restrict redistribution to non-commercial/open-source projects.
- **Edge Not Found**: polished, but published under a Charity License with a commercial-exploitation restriction.
- **Clumsy Bird, Underrun, many js13k entries**: need a build step (no committed playable bundle).
- **Many js13k finalists/winners**: source is public, but the committed artifact is multi-file or missing. Revisit these after the Monday seed, not in the first on-chain cut.
- **Any game with no LICENSE file**: treat as all-rights-reserved — do not re-host.

## Rendering & safety (note for the client / markdown-pane agent)
HTML content is **untrusted code**. The client must render games in a **sandboxed iframe** — `sandbox="allow-scripts"` *without* `allow-same-origin` (so the game runs JS but can't touch EFS's origin, cookies, or storage), plus `allow-pointer-lock` for action games. This is the interactive sibling of the markdown-pane XSS-sanitization requirement: markdown gets sanitized, HTML gets sandboxed.

Retrieval/seeding addresses (IPFS CID / Arweave) get recorded in an `ADDRESSES.md` here once we pin, matching the other datasets.
