# Curation notes: Ethereum Standards

Notes for maintainers. This file is not part of the published dataset (it is not listed in
`manifest.json`); the visitor-facing overview is `README.md`.

## Sources and pinning

All files were fetched on 2026-11-12 from the canonical repositories at pinned commits:

| Repository | Commit | Files |
|---|---|---|
| [ethereum/EIPs](https://github.com/ethereum/EIPs) | `253f6bd20d1b1b600228c0d696775a90720ba5f1` | `eip-1`, `eip-155`, `eip-712`, `eip-1559`, `eip-4844`, `eip-7594`, `eip-7702` (under `EIPS/`) |
| [ethereum/ERCs](https://github.com/ethereum/ERCs) | `c664b2a401e950e0a32ee3b0e5a818831c8adfcf` | `erc-20`, `erc-137`, `erc-721`, `erc-1155`, `erc-1271`, `erc-4337`, `erc-4626`, `erc-4804` (under `ERCS/`) |

Each manifest entry records the pinned GitHub page in `source`, the pinned raw file in `mirrors`, and the
rendered page in `canonicalUrl`. The ten files that were already in this dataset were re-fetched at these
commits; apart from link conversion their text was unchanged from the earlier copies.

## Modifications

The text, including the YAML front matter, is verbatim except for link targets:

- `./eip-N.md` (inline and reference-style, keeping any `#anchor`) becomes
  `https://eips.ethereum.org/EIPS/eip-N`.
- `../LICENSE.md` becomes `https://creativecommons.org/publicdomain/zero/1.0/`.
- `../assets/...` becomes an absolute URL in the same repository at the pinned commit: images use
  `raw.githubusercontent.com` (served as `image/png`, `image/jpeg` or `image/svg+xml`, so they render), and
  other files (reference implementations) use the `github.com/.../blob/<commit>/...` page.
- In ethereum/ERCs, the `../assets/eip-N/` paths written in the files live at `assets/erc-N/` in the
  repository, so those links point at `assets/erc-N/`.

Every converted asset URL was checked to return HTTP 200. Some EIPs link to external pages that no longer
exist; those links are upstream text and were left as published.

The conversion was done with a small script (regular-expression rewrite of link targets, followed by a
check that no relative link targets remain). To refresh a file, fetch it at a new commit, apply the same
rewrite, and update `source` and `mirrors`.

## Rights

EIPs and ERCs carry "Copyright and related rights waived via CC0", so the dataset default licence is
`CC0-1.0`. EFS-authored files (`README.md`, this file, `manifest.json`) are also CC0.

## Selection

The set covers the standards most developers recognize (tokens, signing, fees, blobs, account
abstraction), standards close to EFS's own design (EIP-712 typed signing, ERC-4804 `web3://` URLs,
ERC-137 ENS, through which the app is served at efs.eth), and EIP-1 for the process. EIP-779 (DAO fork) and EIP-3675
(The Merge) are kept in the `history` dataset, where they sit beside the events they describe.
