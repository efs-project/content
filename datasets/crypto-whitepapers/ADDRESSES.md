# Existing IPFS / Arweave Addresses — EFS Mirror Research

Companion to `README.md`. Goal: for each whitepaper in this dataset, find whether a
**canonical, publicly-pinned IPFS CID and/or Arweave address already exists**, so EFS can point
a MIRROR at existing content instead of self-hosting.

## Method & honesty rules

- A CID is only recorded here if it was **found published somewhere** AND I **verified the gateway
  actually resolves to the right document** (size / sha256 match against the local PDF where one exists).
- CIDs were **not** computed locally and assumed to match a published one — chunking/CID-version
  differences make that unreliable. No guessed CIDs.
- Where nothing verifiable was found, the row is marked **"needs self-pin"** (we pin it ourselves later).
- Confidence reflects how sure I am the address is the *same, correct* whitepaper (not a random re-upload).

Research date: 2026-06-10. Gateways checked: `ipfs.io`, `dweb.link`, `w3s.link`.

## Summary

- **Verified existing IPFS CID: 1** — Bitcoin (byte-identical, very high confidence).
- **Verified existing Arweave address: 0.**
- **Needs self-pin: all others** (~18 documents across ~16 coins with real papers).
- No widely-published, per-document canonical CID/TxID surfaced for any non-Bitcoin paper. Most are
  served only from project HTTP sites. (ethereum.org's *whole site* is mirrored to IPFS via the
  `ethereum.eth` ENS contenthash, but no canonical per-PDF CID is published — so none is recorded here.)

## Table

| Coin | PDF present | IPFS CID + gateway (verified) | Arweave TxID + URL | Source | Confidence | Notes |
|---|---|---|---|---|---|---|
| **Bitcoin** | y | `QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj` — https://ipfs.io/ipfs/QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj (also resolves on dweb.link, w3s.link) | none found | bitcoin-dot-org/Bitcoin.org GitHub issue #3696; this CID is the well-known one also embedded in macOS | **Very high** | **VERIFIED byte-identical to local `bitcoin.pdf`** (184,292 bytes; sha256 `b1674191…f4f553`) across 3 gateways. Best mirror candidate. |
| Litecoin | no (none exists) | — | — | — | n/a | No whitepaper ever existed (2011 Bitcoin/scrypt fork). Nothing to mirror. |
| Dogecoin | no (none exists) | — | — | — | n/a | No whitepaper ever existed (2013 joke coin). Nothing to mirror. |
| Ethereum | y | needs self-pin | needs self-pin | ethereum.org serves PDF over HTTP only; site is on IPFS via `ethereum.eth` ENS contenthash but no canonical per-PDF CID published | n/a | Did not record a guessed CID. Self-pin the local `ethereum-whitepaper-2014.pdf`. |
| Cardano (Ouroboros) | y | needs self-pin | needs self-pin | IACR ePrint 2016/889 (HTTP) | n/a | Academic preprint; no published CID/TxID found. |
| Solana | y | needs self-pin | needs self-pin | solana.com / allcryptowhitepapers (HTTP) | n/a | No published CID/TxID found. |
| Algorand | y | needs self-pin | needs self-pin | IACR ePrint 2017/454 (HTTP) | n/a | Academic preprint; none found. |
| Tezos (whitepaper + position paper) | y (both) | needs self-pin | needs self-pin | tezos.com (HTTP) | n/a | Two PDFs; none found. |
| Polygon (Matic litepaper) | y | needs self-pin | needs self-pin | github.com/maticnetwork/whitepaper | n/a | None found. |
| Tron | **no — flagged** | — | — | — | n/a | Link-only in dataset (plagiarism controversy, pulled from official site). Do not source/mirror. |
| Monero (CryptoNote v2) | y | needs self-pin | needs self-pin | universally mirrored (web.archive, Zenodo CC-BY copy); no single canonical CID/TxID found | n/a | Many HTTP mirrors but no authoritative pinned CID surfaced. |
| Zcash (Zerocash) | y | needs self-pin | needs self-pin | zerocash-project.org author preprint (HTTP) | n/a | None found. (Local file is the author extended version, per README.) |
| Polkadot | y | needs self-pin | needs self-pin | Web3 Foundation (HTTP) | n/a | None found. |
| Cosmos | y (markdown only) | needs self-pin | needs self-pin | github.com/cosmos/cosmos | n/a | No PDF in dataset; markdown only. Nothing to mirror unless we pin the md. |
| Avalanche (consensus + platform) | y (both) | needs self-pin | needs self-pin | arXiv 1906.08936 + Ava Labs (HTTP) | n/a | None found. |
| Chainlink | y | needs self-pin | needs self-pin | research.chain.link (HTTP) | n/a | None found. |
| Uniswap (v2-core + v3-core) | y (both) | needs self-pin | needs self-pin | uniswap.org (HTTP) | n/a | None found. |
| Filecoin | y | needs self-pin | needs self-pin | filecoin.io/filecoin.pdf (Protocol Labs, CC-BY) | n/a | Ironically IPFS-native project, but no canonical per-PDF CID published/verifiable. Strong self-pin candidate (CC-BY). |
| XRP (Ripple) | y | needs self-pin | needs self-pin | ripple.com (HTTP) | n/a | None found. |
| BNB (Binance) | **no — flagged** | — | — | — | n/a | Link-only in dataset (commercial doc, no open license). Do not source/mirror. |

## Coins with NO real whitepaper

- **Litecoin** — 2011 Bitcoin/scrypt fork; no formal paper.
- **Dogecoin** — 2013 meme coin; no whitepaper ever written.

## Link-only / flagged (do not mirror without James's review)

- **Tron** — whitepaper pulled from official site amid plagiarism controversy; dataset is link+note only.
- **BNB / Binance** — commercial exchange doc, no stated open license; dataset is link+note only.

## Recommendation

Only **Bitcoin** can be mirrored against an existing, verified public pin today. Everything else
should be **self-pinned** by EFS from the local PDFs (the high-value, clearly-licensed ones first:
Bitcoin already covered, then Ethereum CC-BY, Filecoin CC-BY). After self-pinning, the resulting
CIDs can be recorded back into this file.
