# Ethereum Standards (EIPs / ERCs) — EFS reference dataset

The landmark standards that define how Ethereum works — the token standards, the fee market, account abstraction, typed signing. A fourth reference dataset for the EFS × OnionDAO buildathon, alongside [`../crypto-whitepapers/`](../crypto-whitepapers/), [`../cypherpunk-canon/`](../cypherpunk-canon/), and [`../web-games/`](../web-games/).

**License: CC0** — EIPs and ERCs are released into the public domain ([EIP-1](https://eips.ethereum.org/EIPS/eip-1)), so they are cleanly redistributable onto EFS. Fetched verbatim from the canonical repos (`ethereum/EIPs`, `ethereum/ERCs`).

**Modeled the EFS way: flat files + tags, not folders.** Each standard is one item; its category is a **tag** (a token standard is `tokens`; ERC-721 is both `tokens` and `nft`). On EFS each `.md` = a DATA at a stable anchor with TAG edges. They render natively in the markdown pane.

## Manifest

| Standard | File | Title | Tags | Source |
|---|---|---|---|---|
| ERC-20 | `erc-20.md` | Token Standard | tokens, fungible, foundational | ethereum/ERCs |
| ERC-721 | `erc-721.md` | Non-Fungible Token Standard | tokens, nft, foundational | ethereum/ERCs |
| ERC-1155 | `erc-1155.md` | Multi Token Standard | tokens, nft, multi-token | ethereum/ERCs |
| ERC-4626 | `erc-4626.md` | Tokenized Vaults | defi, tokens, vaults | ethereum/ERCs |
| ERC-4337 | `erc-4337.md` | Account Abstraction (via entry point) | account-abstraction, infrastructure | ethereum/ERCs |
| EIP-712 | `eip-712.md` | Typed structured data hashing & signing | signing, infrastructure | ethereum/EIPs |
| ERC-1271 | `erc-1271.md` | Standard signature validation for contracts | signing, smart-wallets | ethereum/ERCs |
| EIP-1559 | `eip-1559.md` | Fee market change | core, economics, fees | ethereum/EIPs |
| EIP-155 | `eip-155.md` | Simple replay attack protection (chainId) | core, security | ethereum/EIPs |
| EIP-4844 | `eip-4844.md` | Shard Blob Transactions (proto-danksharding) | core, scaling, data | ethereum/EIPs |

Per-standard authors, status, and discussion links live in each file's YAML frontmatter (preserved verbatim).

**Why this set:** the standards a crypto-native crowd actually recognizes, and two (EIP-712 + ERC-1271) are exactly what EFS leans on for smart-wallet / delegated attestation — nice for the SDK track to reference.

**Cosmetic note:** a few files contain relative links to reference implementations (`../assets/...`) and ERC-4337 embeds 3 SVG sequence diagrams; those relative paths don't resolve standalone (the prose is self-contained and unaffected). Read them at [eips.ethereum.org](https://eips.ethereum.org) with assets intact.

Retrieval/seeding addresses (IPFS CID / Arweave) get recorded in an `ADDRESSES.md` here once we pin, matching the other datasets.
