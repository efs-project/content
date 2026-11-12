# Ethereum Standards

The proposals that define how Ethereum works: the token standards, typed signing, the fee market, blobs,
account abstraction, naming, and the process that produces them all. Ethereum Improvement Proposals
(EIPs) change the protocol itself; Ethereum Request for Comments (ERCs) are application-level standards
that contracts and wallets agree to follow.

Every file here is the full text of the proposal as published in the
[ethereum/EIPs](https://github.com/ethereum/EIPs) and [ethereum/ERCs](https://github.com/ethereum/ERCs)
repositories, including its header with authors, status and discussion links. The only change is that
relative links (to other EIPs, the licence and supporting assets) now point to absolute URLs, so they work
on their own. EIPs and ERCs are dedicated to the public domain under
[CC0](https://creativecommons.org/publicdomain/zero/1.0/).

| Standard | What it does | Upgrade |
|---|---|---|
| [EIP-1: EIP Purpose and Guidelines](https://app.efs.eth.limo/explorer/standards/eip-1.md) | How proposals are written, reviewed and finalized | |
| [ERC-20: Token Standard](https://app.efs.eth.limo/explorer/standards/erc-20.md) | Fungible tokens | |
| [ERC-721: Non-Fungible Token Standard](https://app.efs.eth.limo/explorer/standards/erc-721.md) | NFTs | |
| [ERC-1155: Multi Token Standard](https://app.efs.eth.limo/explorer/standards/erc-1155.md) | Many token types in one contract | |
| [ERC-4626: Tokenized Vaults](https://app.efs.eth.limo/explorer/standards/erc-4626.md) | Yield-bearing vaults | |
| [EIP-155: Simple replay attack protection](https://app.efs.eth.limo/explorer/standards/eip-155.md) | Chain ID in transaction signatures | Spurious Dragon (2016) |
| [EIP-712: Typed structured data hashing and signing](https://app.efs.eth.limo/explorer/standards/eip-712.md) | Human-readable signed messages | |
| [ERC-1271: Standard Signature Validation Method for Contracts](https://app.efs.eth.limo/explorer/standards/erc-1271.md) | Signatures from smart contract accounts | |
| [ERC-137: Ethereum Domain Name Service](https://app.efs.eth.limo/explorer/standards/erc-137.md) | The original ENS specification | |
| [ERC-4804: Web3 URL to EVM Call Message Translation](https://app.efs.eth.limo/explorer/standards/erc-4804.md) | `web3://` URLs; EFS uses them to reference on-chain content | |
| [EIP-1559: Fee market change](https://app.efs.eth.limo/explorer/standards/eip-1559.md) | Base fee burn and priority tips | London (2021) |
| [ERC-4337: Account Abstraction Using Alt Mempool](https://app.efs.eth.limo/explorer/standards/erc-4337.md) | Smart accounts without protocol changes | |
| [EIP-4844: Shard Blob Transactions](https://app.efs.eth.limo/explorer/standards/eip-4844.md) | Blobs for cheap rollup data | Dencun (2024) |
| [EIP-7702: Set Code for EOAs](https://app.efs.eth.limo/explorer/standards/eip-7702.md) | Smart-account features for ordinary accounts | Pectra (2025) |
| [EIP-7594: PeerDAS](https://app.efs.eth.limo/explorer/standards/eip-7594.md) | Data availability sampling for blobs | Fusaka (2025) |

Files are tagged rather than sorted into folders, for example
[`tokens`](https://app.efs.eth.limo/explorer/standards?tags=tokens),
[`signing`](https://app.efs.eth.limo/explorer/standards?tags=signing),
[`account-abstraction`](https://app.efs.eth.limo/explorer/standards?tags=account-abstraction) and
[`core`](https://app.efs.eth.limo/explorer/standards?tags=core).
The rendered versions live at [eips.ethereum.org](https://eips.ethereum.org/) and
[ercs.ethereum.org](https://ercs.ethereum.org/). For how these upgrades fit into Ethereum's story, see the
[Ethereum history timeline](https://app.efs.eth.limo/explorer/history/timeline.md).
