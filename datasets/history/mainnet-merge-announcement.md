# Mainnet Merge Announcement

*Protocol Support Team · 24 August 2022*

> **Source:** <https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement>
>
> Published on the Ethereum Foundation Blog on 24 August 2022. Converted to markdown for EFS: the author's text is unchanged, and site navigation, share buttons and footers are left out. Links are as originally published; some no longer work.
>
> The Merge completed on 15 September 2022: [block 15,537,393](https://app.efs.eth.limo/explorer/history/last-proof-of-work-block.md) was the last proof-of-work block.

---

![](https://storage.googleapis.com/ethereum-hackmd/upload_fc82062a814fd40a66c7d03a522da205.jpeg)

- Ethereum is moving to proof-of-stake! The transition, known as The Merge, must first be activated on the Beacon Chain with the Bellatrix upgrade. After this, the proof-of-work chain will migrate to proof-of-stake upon hitting a specific `Total Difficulty` value.
- The Bellatrix upgrade is scheduled for epoch **`144896`** on the Beacon Chain -- **11:34:47am UTC on Sept 6, 2022**.
- The `Terminal Total Difficulty` value triggering The Merge is **`58750000000000000000000`**, expected between **Sept 10-20, 2022**.
- Note: as [announced earlier](https://blog.ethereum.org/2022/06/21/testnet-deprecation/), the Kiln testnet is being sunset. Operators will shut down on September 6, 2022.

## Background

Following years of hard work, Ethereum's proof-of-stake upgrade is finally here! The successful upgrade of all public testnets is now complete, and The Merge has been scheduled for the Ethereum mainnet.

The Merge is different from previous network upgrades in two ways. First, node operators need to update both their consensus layer (CL) and execution layer (EL) clients in tandem, rather than just one of the two. Second, the upgrade activates in two phases: the first, named Bellatrix, at an epoch height on the Beacon Chain, and the second, named Paris, upon hitting a [`Total Difficulty`](https://eips.ethereum.org/EIPS/eip-3675#terminal-total-difficulty-vs-block-number) value on the execution layer.

## Upgrade Information

![](https://storage.googleapis.com/ethereum-hackmd/upload_aa804448c0b15c877035c523d6ae948a.png)

### Timing

_The Merge_ is a two-step process. The first step is a network upgrade, Bellatrix, on the consensus layer triggered by an epoch height. This is followed by the execution layer's transition from proof-of-work to proof-of-stake, Paris, triggered by a specific `Total Difficulty` threshold called the `Terminal Total Difficulty` (`TTD`).

The Bellatrix upgrade is scheduled for epoch **`144896`** on the Beacon Chain -- **11:34:47am UTC on Sept 6, 2022**.

Paris, the execution layer's portion of the transition, will be triggered by the `Terminal Total Difficulty (TTD)` of **`58750000000000000000000`**, expected between **`Sept 10-20, 2022`**. The exact date at which `TTD` is reached depends proof-of-work hash rate. Estimates for the transition can be found at [bordel.wtf](https://bordel.wtf/) and [797.io/themerge](https://797.io/themerge/).

Once the execution layer reaches or exceeds the `TTD`, the subsequent block will be produced by a Beacon Chain validator. The Merge transition is considered complete once the Beacon Chain finalizes this block. Under normal network conditions, this will happen 2 epochs (or ~13 minutes) after the first post-TTD block is produced!

A new JSON-RPC block tag, `finalized`, returns the latest finalized block or an error if no such post-merge block exists. This tag can be used by applications to check if The Merge has been completed. Similarly, smart contracts can [query the `DIFFICULTY` opcode (`0x44`)](https://eips.ethereum.org/EIPS/eip-4399#using-264-threshold-to-determine-pos-blocks) (renamed to `PREVRANDAO` post-merge) to determine if The Merge has happened. We recommend infrastructure providers monitor overall network stability in addition to finalization status.

### Client Releases

The following client releases support The Merge on the Ethereum mainnet. Node operators must run **both** an execution and consensus layer client to remain on the network during and after The Merge.

When choosing which client to run, validators should be especially mindful of the risks of running a majority client on both the EL and CL. An explainer of these risks and their consequences can be found [here](https://dankradfeist.de/ethereum/2022/03/24/run-the-majority-client-at-your-own-peril.html). An estimate of current EL and CL client distribution and guides for switching from one client to another can be found [here](https://clientdiversity.org/).

#### Consensus Layer

| Name       | Version | Link                                                                      |
| ---------- | ------- | ------------------------------------------------------------------------- |
| Lighthouse | v3.1.0  | [Download](https://github.com/sigp/lighthouse/releases/tag/v3.1.0)        |
| Lodestar   | v1.0.0  | [Download](https://github.com/ChainSafe/lodestar/releases/tag/v1.0.0)     |
| Nimbus     | v22.9.0 | [Download](https://github.com/status-im/nimbus-eth2/releases/tag/v22.9.0) |
| Prysm      | v3.1.1  | [Download](https://github.com/prysmaticlabs/prysm/releases/tag/v3.1.1)    |
| Teku       | 22.9.0  | [Download](https://github.com/ConsenSys/teku/releases/tag/22.9.0)         |

**_Warning_**: Nimbus version v22.9.0 is a high-urgency upgrade that fixes a critical pre-TTD block production issue affecting users that restarted their node after Bellatrix. It also improves compatibility with Besu, Prysm and slow block builders and provides a speed boost in block processing important for those running on Raspberry Pi and similar hardware.

**_Warning_**: Lighthouse version v3.1.0 is a high-priority release contains an important fix to ensure that Lighthouse does not attempt to produce invalid blocks. The --strict-fee-recipient flag for the Lighthouse Validator Client has also been found to prevent block proposals in the period between the Bellatrix upgrade (Sept 6th) and the TTD date (estimated Sept 15th). We are presently inside that period of time and therefore all stakers using that flag are affected. We advise that anyone using the --strict-fee-recipient flag should remove it and restart the Validator Client as soon as possible. **This does not affect the --suggested-fee-recipient flag.**

**_Warning_**: Prysm v3.1.1 is a highly recommended update as it contains several important fixes and features for the merge.

**_Warning_**: Teku version 22.9.0 is a required update.

#### Execution Layer

| Name               | Version           | Link                                                                        |
| ------------------ | ----------------- | --------------------------------------------------------------------------- |
| Besu               | 22.7.2            | [Download](https://github.com/hyperledger/besu/releases/tag/22.7.2)         |
| Erigon             | v2022.09.01-alpha | [Download](https://github.com/ledgerwatch/erigon/releases/tag/v2022.09.01)  |
| go-ethereum (geth) | v1.10.23          | [Download](https://github.com/ethereum/go-ethereum/releases/tag/v1.10.23)   |
| Nethermind         | v1.14.1           | [Download](https://github.com/NethermindEth/nethermind/releases/tag/1.14.1) |

**_Warning_**: Besu 22.7.2 is a recommended release for the Merge and Mainnet users. 22.7.1 remains Merge-ready. This release provides additional robustness before the Merge with some fixes and improvements in sync, peering, and logging.

**_Warning_**: Erigon version v2022.09.01-alpha fixes invalid block production due to insufficient verification of digital signature components, block snapshot production that sometimes occurs during POS reverse header download and a lot of smaller bugs and safety issues. All Erigon users are recommended to upgrade to this or a later version prior to the Merge.

**_Warning_**: geth version v1.10.22 contains a critical database issue, do not use this version, and if you have already upgraded, please upgrade to v1.10.23 as soon as possible.

### Upgrade Specifications

Consensus-critical changes for The Merge are specified in two places:

- The consensus layer changes under the [`Bellatrix` directory](https://github.com/ethereum/consensus-specs/tree/dev/specs/bellatrix) of the consensus-specs repository
- The execution layer changes under the [`Paris` spec](https://github.com/ethereum/execution-specs/blob/master/network-upgrades/mainnet-upgrades/paris.md) in the execution-specs repository

In addition to these, two other specifications cover how the consensus and execution layer clients interact:

- The Engine API, specified in the [execution-apis repository](https://github.com/ethereum/execution-apis/tree/main/src/engine), is used for communication between the consensus and execution layers
- Optimistic Sync, specified in the [`sync`](https://github.com/ethereum/consensus-specs/blob/dev/sync/optimistic.md) folder of the consensus-specs repository, is used by the consensus layer to import blocks as the execution layer client is syncing and to provide a partial view of the head of the chain from the former to the latter

## Merge Bug Bounty Bonus

All Merge-related bounties for vulnerabilities have received a 4x multiplier between now and the 8th of September. Critical bugs are now worth up to **$1 million USD**.

See the [bug bounty program](https://bounty.ethereum.org) for more details.

## FAQ

### As a node operator, what should I do?

Post-merge, an Ethereum full node is the combination of a consensus layer (CL) client which runs the proof-of-stake Beacon Chain and an execution layer (EL) client which manages the user-state and runs the computations associated with transactions. The EL and CL client communicate over an authenticated port using a new set of JSON RPC methods called the [Engine API](https://github.com/ethereum/execution-apis/tree/main/src/engine). The EL and CL client authenticate each other using a JWT secret. **Node operators should refer to their clients' documentation for instructions about how to generate and configure this value.**

In other words, if you were already running a node on the Beacon Chain, you now also need to run an execution layer client. Similarly, if you were running a node on the current proof-of-work network, you will need to run a consensus layer client. For them to communicate securely, a JWT token must be passed to each client. An update to the ['Run a Node' section](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/) of the ethereum.org website goes over these steps in more detail.

It is worth emphasizing that while they are both part of consensus layer client releases, running a Beacon Node is distinct from running a Validator Client. Stakers must run both, but node operators only need the former. [This post](https://docs.ethhub.io/ethereum-roadmap/ethereum-2.0/eth-2.0-client-architecture/) explains the difference between both components in more detail.

Also, note that each layer will maintain an independent set of peers and expose its own APIs. The [Beacon](https://github.com/ethereum/beacon-apis) and [JSON RPC](https://github.com/ethereum/execution-apis) APIs will both continue working as expected.

### As a staker, what do I need to do?

As explained above, **validators on the Beacon Chain will need to run an execution layer client after The Merge in addition to their consensus layer clients.** Pre-merge, this was strongly recommended, but some validators have outsourced these functions to third-party providers. This was possible because the only data required on the execution layer were updates to the deposit contract.

Post-merge, validators must ensure that user transactions and state transitions blocks that they create and attest to are valid. To do this, each beacon node must be paired with an execution layer client. Note that multiple validators can still be paired to a single beacon node & execution layer client combo. This expands validators' responsibilities but also gives a validator who proposes a block the right to its associated transaction priority fees (which currently go to miners).

While validator rewards still accrue on the Beacon Chain and will require a subsequent network upgrade to be withdrawn, transaction fees will be paid, burned, and distributed on the execution layer. Validators can specify any Ethereum address as a recipient for transaction fees.

**After updating your consensus client, be sure to set the `fee recipient` as part of your validator client configurations to ensure transaction fees are sent to an address you control.** If you have staked using a third-party provider, it is up to your selected provider to specify how these fees are allocated.

The Staking Launchpad has a [Merge Readiness Checklist](https://launchpad.ethereum.org/en/merge-readiness) that stakers can use to ensure they have gone through each step of the process. EthStaker have also hosted [Validator Prep Workshops](https://ethstaker.cc/ethstaker-validator-workshop/), with more being planned.

Stakers who wish to run a validator on a testnet in preparation for the mainnet proof-of-stake transition can do so on Goerli (now merged with Prater), which also has a [Staking Launchpad instance](https://prater.launchpad.ethereum.org/).

### Why is the estimated date for the `Terminal Total Difficulty` so broad?

The incremental difficulty added per block is dependent on the network hash rate which is volatile. If more hash rate joins the network, `TTD` will be reached sooner. Similarly, if hash rate leaves the network, `TTD` will be reached later. In the event of a significant drop in hash rate levels, a `TTD Override` could be coordinated as was done on [Ropsten](https://blog.ethereum.org/2022/06/03/ropsten-merge-ttd/).

### As an application or tooling developer, what should I do?

As explained in a [previous post](https://blog.ethereum.org/2021/11/29/how-the-merge-impacts-app-layer/), The Merge will have only minimal impact on a subset of contracts deployed on Ethereum, none of which should be breaking. Additionally, the lion's share of user API endpoints remain stable (unless you use proof-of-work specific methods such as `eth_getWork`).

That said, most applications on Ethereum involve much more than on-chain contracts. **Now is the time** to ensure that your front-end code, tooling, deployment pipeline and other off-chain components work as intended. We strongly recommend that developers run through a complete testing & deployment cycle on Sepolia or Goerli and report any issues with tools or dependencies to those projects' maintainers. If you are unsure where to open an issue, please use [this repository](https://github.com/eth-clients/merge-testnets/).

Additionally, please note that all testnets aside from Sepolia and Goerli will be deprecated post-merge. If you are a user of Ropsten, Rinkeby or Kiln, you should plan to migrate to Goerli or Sepolia. More information about this can be found [here](https://blog.ethereum.org/2022/06/21/testnet-deprecation/).

### As an Ethereum user or Ether holder, is there anything I need to do?

Whether you are using Ethereum applications on-chain, holding Ether on an exchange or in a self-custodied wallet, you do not have to do anything. If an application, exchange or wallet you use offers additonal instructions or recommendations, you should verify these are actually coming from them. Be on the lookout for scams!

### As a miner, is there anything I need to do?

No. If you are mining on the Ethereum mainnet, you should be aware that the network will operate entirely under proof-of-stake after The Merge. At that point, mining will no longer be possible on the network.

### What happens if I am a miner or node operator and I do not participate in the upgrade?

If you are using an Ethereum client that is not updated to the latest version (listed above), your client will sync to the pre-fork blockchain once the upgrade occurs.

You will be stuck on an incompatible chain following the old rules and will be unable to send Ether or operate on the post-merge Ethereum network.

### As a validator, can I withdraw my stake?

No. The Merge is the most complicated upgrade to Ethereum to date. To minimize risks of network disruptions, a minimal approach was taken which excluded any non-transition changes from this upgrade.

Withdrawals from the Beacon Chain will likely be introduced in the first upgrade after The Merge. Specifications for both the [consensus](https://github.com/ethereum/consensus-specs/issues/2758) and [execution](https://eips.ethereum.org/EIPS/eip-4895) layers are in progress.

### I have more questions, where can I ask them?

Join client team developers, members of ETHStaker, researchers, and more on the next [Merge Community Call](https://github.com/ethereum/pm/issues/599) on Friday, Sept 9 at 14:00 UTC!

## Thank You

Ethereum's transition to proof-of-stake has been a _loooong_ time coming. Thank you to everyone who contributed to researching, specifying, developing, analyzing, testing, breaking, fixing, or explaining everything that got us to The Merge.

There have been far too many contributors over the years to list here, but you know who you are. Without all of you in the bazaar, we wouldn't have built this cathedral.

wen merge? Very 🔜.

---

Thank you to Joseph Schweitzer and Tomo Saito for the cover image for this post!
