# The Genesis Block

Block 0 of Ethereum mainnet: the starting state of the chain that launched as Frontier on 30 July 2015.

The values below were read from Ethereum mainnet with the JSON-RPC call
`eth_getBlockByNumber("0x0", false)` on 12 November 2026. Anyone can repeat the call against any
full-history mainnet node and should get the same answers.

| Field | Value |
|---|---|
| Block number | 0 |
| Hash | `0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3` |
| Parent hash | `0x0000000000000000000000000000000000000000000000000000000000000000` |
| Timestamp | `0x0` (0, i.e. 1970-01-01 00:00:00 UTC) |
| Extra data | `0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa` |
| Gas limit | `0x1388` (5,000) |
| Difficulty | `0x400000000` (17,179,869,184, i.e. 2^34) |
| Nonce | `0x0000000000000042` |
| State root | `0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544` |
| Transactions | 0 |

## What the fields mean

**Hash.** Every Ethereum client has this hash built in. A node that computes a different genesis hash is
on a different network.

**Timestamp.** The genesis block was assembled in advance, not mined, so its timestamp is simply 0, the
start of Unix time. The chain's real first moment is block 1, mined at 2015-07-30 15:26:28 UTC
(timestamp `0x55ba4224`; its extra data reads `Geth/v1.0.0/linux/go1.4.2`).

**Extra data.** These 32 bytes are not text and do not decode to anything readable. Ethereum's launch
plan, set out in the blog post
["Final Steps"](https://blog.ethereum.org/2015/07/27/final-steps), was to generate the genesis block with
a script whose `--extradata` argument was the hash of block 1,028,201 of the Ethereum testnet, a number
chosen for being both prime and palindromic. Nobody could know that hash in advance, so nobody could have
prepared the genesis block early, and anyone could regenerate it and check the result.

**Gas limit.** Every transaction costs at least 21,000 gas, so with a 5,000 gas limit no transaction
could fit in a block. This was Frontier's deliberate "thawing" period: miners could start mining and
nodes could sync before any ether moved. Miners then raised the limit a little at a time. It first
passed 21,000 at block 46,147 (gas limit 21,003, mined 2015-08-07 03:30:33 UTC), which carries the
chain's first transaction.

**State root.** The genesis block carries no transactions, but its state is not empty: it allocates the
ether bought in the 2014 ether sale and the other launch allocations. The state root commits to that
whole starting state.

## Read more

- [Ethereum Launches](https://app.efs.eth.limo/explorer/history/ethereum-launches.md), the announcement
  posted that day
- [Timeline](https://app.efs.eth.limo/explorer/history/timeline.md)
- [Block 0 on Etherscan](https://etherscan.io/block/0)
