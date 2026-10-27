# Filecoin

- **Project:** Filecoin (Protocol Labs)
- **Paper:** *Filecoin: A Decentralized Storage Network*
- **Author:** Protocol Labs
- **Year:** 2017 (dated 19 July 2017; an earlier Filecoin paper appeared in 2014)
- **Canonical source:** https://research.protocol.ai/publications/filecoin-a-decentralized-storage-network/
- **File in this folder:** `filecoin.pdf` (36 pages; same text as the Protocol Labs copy, in a
  recompressed PDF)

## Summary

Filecoin is a decentralized storage network that turns cloud storage into an open market. Clients pay
storage miners to keep their data and retrieval miners to serve it, and miners earn the network's token
(also called Filecoin) for doing so. A miner's mining power is proportional to the storage it actively
provides, so the network's "work" is useful in itself.

The paper's main cryptographic contributions are **Proof-of-Replication**, which proves that a miner has
stored a unique physical copy of a client's data, and **Proof-of-Spacetime**, which proves that the data
stayed stored over time. These proofs let the blockchain check storage without trusting the miner.
Filecoin is designed to work alongside IPFS, Protocol Labs' content-addressed file system.
