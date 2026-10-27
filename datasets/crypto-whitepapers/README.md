# Crypto Whitepapers

A flat collection of major cryptocurrency whitepapers for EFS (Ethereum File System). Each project has a
short markdown card (paper title, authors, year, canonical source, which file it describes, and a summary)
and, where a whitepaper exists, a copy of the paper itself.

Files are kept flat and categorised with tags in `manifest.json` (for example `proof-of-stake`, `privacy`,
`defi`) rather than folders, so one paper can belong to several categories. On EFS each file becomes an
item at a stable anchor, with its tags attached.

Retrieval addresses (IPFS CIDs) for seeding onto EFS: see [`ADDRESSES.md`](./ADDRESSES.md).

| Project | Card | Paper file(s) | Tags |
|---|---|---|---|
| Bitcoin | `bitcoin.md` | `bitcoin.pdf` | store-of-value, payment, foundational |
| Ethereum | `ethereum.md` | `ethereum-whitepaper-2014.pdf` | smart-contract-platform, proof-of-stake, foundational |
| Solana | `solana.md` | `solana.pdf` | smart-contract-platform, proof-of-stake |
| XRP Ledger | `xrp-ripple.md` | `ripple-consensus-whitepaper.pdf` | payment |
| Cardano | `cardano.md` | `ouroboros.pdf` | smart-contract-platform, proof-of-stake |
| Polkadot | `polkadot.md` | `polkadot.pdf` | interoperability, proof-of-stake |
| Avalanche | `avalanche.md` | `avalanche-consensus.pdf`, `avalanche-platform.pdf` | smart-contract-platform, proof-of-stake |
| Cosmos | `cosmos.md` | `cosmos-whitepaper.md` | interoperability, proof-of-stake |
| Algorand | `algorand.md` | `algorand.pdf` | smart-contract-platform, proof-of-stake |
| Tezos | `tezos.md` | `tezos-whitepaper.pdf`, `tezos-position-paper.pdf` | smart-contract-platform, proof-of-stake |
| Polygon | `polygon.md` | `matic-whitepaper.md`, `matic-litepaper.pdf` | smart-contract-platform, scaling, proof-of-stake |
| Chainlink | `chainlink.md` | `chainlink-whitepaper-v1.pdf` | oracle |
| Uniswap | `uniswap.md` | `uniswap-v2-core.pdf`, `uniswap-v3-core.pdf` | defi |
| Filecoin | `filecoin.md` | `filecoin.pdf` | storage |
| Monero | `monero.md` | `cryptonote.pdf` | privacy |
| Zcash | `zcash.md` | `zerocash.pdf` | privacy |
| Litecoin | `litecoin.md` | none (no whitepaper) | payment |
| Dogecoin | `dogecoin.md` | none (no whitepaper) | payment |
| TRON | `tron.md` | none (official whitepaper linked) | smart-contract-platform, proof-of-stake |
| BNB | `binance-bnb.md` | none (official whitepaper linked) | smart-contract-platform, proof-of-stake |

Each card records where its paper came from. EFS does not own or relicense these works.
