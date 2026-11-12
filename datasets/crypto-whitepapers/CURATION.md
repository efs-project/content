# Curation notes: Crypto Whitepapers

Notes for maintainers. This file is not part of the published dataset (it is not listed in
`manifest.json`); the visitor-facing overview is `README.md`.

## Structure

- One markdown **About** card per project, plus the paper itself where one exists and can be hosted.
- Files stay flat beside `manifest.json`. Categories are tags, not folders, so one paper can carry several
  (`proof-of-stake`, `privacy`, `defi`, `ethereum`, ...). Tags are lowercase and hyphenated.
- Every manifest entry has `path`, `name` (same as `path`), `contentType`, `title`, `description`, `tags`
  and `source`. Papers carry `author`/`authors`, `year` and an `aboutCard` pointer; cards carry
  `author: "EFS contributors"`, `workAuthor` and `originalYear` where known.
- Paper titles are the papers' own titles; card titles are "About: <Project>".
- Published files must be self-contained: only absolute `https://` links, because the EFS explorer renders
  relative links as dead text and relative images as placeholders.

## Sources

Each card's **Canonical source** and **File in this folder** lines record where the hosted copy came from
and whether it is byte-identical to that source. Where a project no longer hosts its paper (CryptoNote,
the Matic litepaper), the card names the archive copy used.

The Ethereum Yellow Paper (`yellowpaper.pdf`) was retrieved on 2026-11-12 from
https://ethereum.github.io/yellowpaper/paper.pdf. It is a valid PDF (version 1.5, 597,589 bytes,
SHA-256 `d67c009c5d5a0542c8288aee3c4d470b3e2dbe6e664f72f00011543608477fa9`). Its first page reads
"Shanghai version efc5f9a – 2025-02-04"; the `gh-pages` commit `f15fa70` records it as built from
`ethereum/yellowpaper` commit `efc5f9a1f356cba376c978eedb63cb0363c2aa85`.

## Rights

Owner decision (2026-10-27): documents (text, markdown, PDFs) need no machine-readable licence field.
Each card still ends its header with a neutral **Rights:** line stating what the paper itself says:

- Most papers are published openly by their projects or authors and state no licence.
- Polkadot's paper states a Creative Commons licence.
- The Ethereum Yellow Paper is CC BY-SA 4.0, per `LICENCE.md` in https://github.com/ethereum/yellowpaper
  (checked 2026-11-12) and the repository README.
- Zerocash: the hosted file is the authors' extended version; the IEEE S&P 2014 conference version is
  copyrighted by IEEE.
- TRON and BNB Chain whitepapers are linked, not hosted.

EFS does not own or relicense any of these works.

## Content addresses

`ADDRESSES.md` lists published IPFS addresses that serve bytes identical to a local file. A CID is
recorded only when a published address was found and the gateway copy matched the local file's size and
SHA-256; CIDs were not computed locally and assumed to match, because chunking and CID-version differences
make that unreliable.

- Initial survey: 2026-06-10, via the `ipfs.io`, `dweb.link` and `w3s.link` gateways.
- The Bitcoin CID (referenced in bitcoin-dot-org/Bitcoin.org GitHub issue #3696) was re-checked on
  2026-10-27 via `gateway.pinata.cloud`, `4everland.io` and `ipfs.filebase.io`.
- ethereum.org is served on IPFS as a whole site via the `ethereum.eth` ENS contenthash, but no per-PDF CID
  is published. No verified Arweave addresses were found.
- Every other paper needs to be pinned by EFS; record the resulting CIDs in `ADDRESSES.md`.
