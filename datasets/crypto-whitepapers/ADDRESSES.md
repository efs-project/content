# Existing IPFS / Arweave addresses

Companion to `README.md`. For each paper in this dataset, this records whether a published, publicly pinned
IPFS CID or Arweave address already exists, so EFS can point a mirror at existing content instead of
pinning it again.

## Method

- A CID is recorded only if it was found published somewhere **and** the gateway copy was checked to be
  byte-identical (size and sha256) to the local file.
- CIDs were not computed locally and assumed to match a published one, since chunking and CID-version
  differences make that unreliable.
- Anything without a verified published address is marked **needs self-pin**.

Research date: 2026-06-10 (gateways `ipfs.io`, `dweb.link`, `w3s.link`). The Bitcoin CID was re-checked on
2026-10-27 via `gateway.pinata.cloud`, `4everland.io` and `ipfs.filebase.io`; `ipfs.io`, `dweb.link` and
`w3s.link` no longer serve files directly.

## Results

| Project | Local file(s) | Existing address | Notes |
|---|---|---|---|
| Bitcoin | `bitcoin.pdf` | `ipfs://QmRA3NWM82ZGynMbYzAgYTSXCVM14Wx1RZ8fKP42G6gjgj` | Byte-identical to the local file (184,292 bytes; sha256 `b1674191…f4f553`). CID referenced in bitcoin-dot-org/Bitcoin.org GitHub issue #3696. (Separately, a copy of the paper shipped as a sample PDF in macOS 10.14 to 13.3.) |
| Ethereum | `ethereum-whitepaper-2014.pdf` | needs self-pin | ethereum.org is served on IPFS as a whole site via the `ethereum.eth` ENS contenthash, but no per-PDF CID is published. |
| Cardano | `ouroboros.pdf` | needs self-pin | |
| Solana | `solana.pdf` | needs self-pin | |
| Algorand | `algorand.pdf` | needs self-pin | |
| Tezos | `tezos-whitepaper.pdf`, `tezos-position-paper.pdf` | needs self-pin | |
| Polygon | `matic-litepaper.pdf`, `matic-whitepaper.md` | needs self-pin | |
| Monero | `cryptonote.pdf` | needs self-pin | Widely mirrored over HTTP, but no authoritative CID found. |
| Zcash | `zerocash.pdf` | needs self-pin | |
| Polkadot | `polkadot.pdf` | needs self-pin | |
| Cosmos | `cosmos-whitepaper.md` | needs self-pin | |
| Avalanche | `avalanche-consensus.pdf`, `avalanche-platform.pdf` | needs self-pin | |
| Chainlink | `chainlink-whitepaper-v1.pdf` | needs self-pin | |
| Uniswap | `uniswap-v2-core.pdf`, `uniswap-v3-core.pdf` | needs self-pin | |
| Filecoin | `filecoin.pdf` | needs self-pin | No per-PDF CID published, despite the project being IPFS-native. |
| XRP Ledger | `ripple-consensus-whitepaper.pdf` | needs self-pin | |

No verified Arweave addresses were found. Litecoin, Dogecoin, TRON and BNB have cards only, so there is no
paper file to mirror. After self-pinning, record the resulting CIDs here.
