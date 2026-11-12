# The Last Proof-of-Work Block

Block 15,537,393 was the last block of Ethereum mainnet produced by proof-of-work mining. Its total
difficulty crossed the Terminal Total Difficulty set for The Merge, so the next block, 15,537,394, was
the first one proposed by a proof-of-stake validator on the Beacon Chain.

The values below were read from Ethereum mainnet with the JSON-RPC call
`eth_getBlockByNumber("0xed14f1", false)` on 12 November 2026.

| Field | Value |
|---|---|
| Block number | 15,537,393 (`0xed14f1`) |
| Hash | `0x55b11b918355b1ef9c5db810302ebad0bf2544255b530cdce90674d5887bb286` |
| Parent hash | `0x2b3ea3cd4befcab070812443affb08bf17a91ce382c714a536ca3cacab82278b` |
| Timestamp | `0x6322c962` (1663224162, i.e. 2022-09-15 06:42:42 UTC) |
| Miner | `0x829bd824b016326a401d083b33d092293333a830` |
| Extra data | `0xe4b883e5bda9e7a59ee4bb99e9b1bc460021` |
| Difficulty | 11,055,787,484,078,698 |
| Total difficulty | 58,750,003,716,598,352,816,469 |
| Nonce | `0x62a3ee77461d4fc9` |
| Gas used / limit | 29,991,429 / 30,000,000 |
| Transactions | 1 |

## What the fields mean

**Total difficulty.** The Merge was triggered not by a block number but by the chain's accumulated
proof-of-work difficulty. The Terminal Total Difficulty was set at 58,750,000,000,000,000,000,000. This
block's total difficulty, 58,750,003,716,598,352,816,469, was the first to reach it, which made it the
terminal proof-of-work block.

**Miner.** The block reward went to `0x829bd824b016326a401d083b33d092293333a830`, an address Etherscan
labels "F2Pool Old", belonging to the F2Pool mining pool.

**Extra data.** The 18 bytes decode as UTF-8 to **七彩神仙鱼** ("discus fish", literally "seven-coloured
immortal fish"), followed by three bytes that are not text (`0x46 0x00 0x21`). The same five characters
appear in other blocks from this miner, each followed by three different bytes, so they work as the
pool's signature.

**Gas.** The block holds a single transaction that used almost the whole 30 million gas limit.

## The next block

Block 15,537,394 (`0x56a9bb0302da44b8c0b3df540781424684c3af04d0b7a38d72842b762076a664`), timestamped
2022-09-15 06:42:59 UTC, has a difficulty of 0, a nonce of 0 and empty extra data: from this block on,
Ethereum blocks are proposed by validators rather than mined. Its parent hash is the hash of block
15,537,393 above.

## Read more

- [Mainnet Merge Announcement](https://app.efs.eth.limo/explorer/history/mainnet-merge-announcement.md)
- [EIP-3675: Upgrade consensus to Proof-of-Stake](https://app.efs.eth.limo/explorer/history/eip-3675.md)
- [Timeline](https://app.efs.eth.limo/explorer/history/timeline.md)
- [Block 15,537,393 on Etherscan](https://etherscan.io/block/15537393)
