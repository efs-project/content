# Crypto Whitepapers — EFS reference dataset

A flat collection of major-cryptocurrency whitepapers, assembled as a reference dataset for the EFS (Ethereum File System) OnionDAO hackathon.

**Modeled the EFS way: flat files + tags, not folders.** Every whitepaper is one item (a stable identity); its category is a **tag**, not a location. A paper can carry many tags (and, in EFS, different curators/lenses can tag it differently) — so "is XRP a *payment* coin or *interoperability*?" is answered by tags, not by which single folder it's trapped in. On EFS this becomes: each PDF/markdown = a DATA placed at a stable anchor, with TAG edges for categories.

Retrieval addresses (IPFS CID / Arweave) for seeding onto EFS: see [`ADDRESSES.md`](./ADDRESSES.md).

## Manifest

Each coin has a markdown page (summary, authors, year, source, license) and — where a real whitepaper exists and is redistributable — the PDF.

| Coin | Markdown | PDF | Tags | Notes |
|---|---|---|---|---|
| Bitcoin | `bitcoin.md` | `bitcoin.pdf` | store-of-value, payment | canonical; public IPFS CID exists |
| Ethereum | `ethereum.md` | `ethereum-whitepaper-2014.pdf` | smart-contract-platform | |
| Solana | `solana.md` | `solana.pdf` | smart-contract-platform | |
| XRP / Ripple | `xrp-ripple.md` | `ripple-consensus-whitepaper.pdf` | payment | |
| Cardano | `cardano.md` | `ouroboros.pdf` | smart-contract-platform, proof-of-stake | Ouroboros paper |
| Polkadot | `polkadot.md` | `polkadot.pdf` | interoperability | |
| Avalanche | `avalanche.md` | `avalanche-consensus.pdf`, `avalanche-platform.pdf` | interoperability | |
| Cosmos | `cosmos.md`, `cosmos-whitepaper.md` | — | interoperability | |
| Algorand | `algorand.md` | `algorand.pdf` | smart-contract-platform | |
| Tezos | `tezos.md` | `tezos-whitepaper.pdf`, `tezos-position-paper.pdf` | smart-contract-platform | |
| Polygon | `polygon.md`, `matic-whitepaper.md` | `matic-litepaper.pdf` | smart-contract-platform, scaling | |
| Chainlink | `chainlink.md` | `chainlink-whitepaper-v1.pdf` | oracle | |
| Uniswap | `uniswap.md` | `uniswap-v2-core.pdf`, `uniswap-v3-core.pdf` | defi | |
| Filecoin | `filecoin.md` | `filecoin.pdf` | storage | |
| Monero | `monero.md` | `cryptonote.pdf` | privacy | CryptoNote paper |
| Zcash | `zcash.md` | `zerocash.pdf` | privacy | Zerocash preprint |
| Litecoin | `litecoin.md` | — | store-of-value, payment | no real whitepaper (Bitcoin fork) |
| Dogecoin | `dogecoin.md` | — | store-of-value, payment | no real whitepaper |
| Tron | `tron.md` | — | smart-contract-platform | link-only — plagiarism flag, review before use |
| BNB / Binance | `binance-bnb.md` | — | exchange-chain | link-only — no open license |

## License note
Most papers are freely redistributable (Bitcoin freely distributable; Ethereum CC-BY; academic preprints from arXiv/IACR). PDFs intentionally omitted where the license is restrictive/unclear (Tron, BNB) — markdown + source link only. See each markdown page for per-item license status.
