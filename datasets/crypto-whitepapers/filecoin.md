# Filecoin

- **Title:** Filecoin: A Decentralized Storage Network
- **Project:** Filecoin (Protocol Labs)
- **Author(s):** Protocol Labs (Juan Benet et al.)
- **Year:** 2017 (July 2017)
- **Canonical source:** https://filecoin.io/filecoin.pdf
- **License / distribution:** Freely published by Protocol Labs; the Filecoin/IPFS papers are released under
  a Creative Commons license. Included as a freely-distributed project whitepaper.
- **File:** `filecoin.pdf` (36 pages; fetched and validated — content confirmed as the Filecoin DSN paper)

## Summary

Filecoin is a decentralized storage network that turns cloud storage into an open market. Clients pay
storage and retrieval miners to store and serve files; miners earn the FIL token and prove they are doing
the job honestly. Its core cryptographic contributions are **Proof-of-Replication (PoRep)**, which proves a
miner has stored a unique physical copy of the client's data, and **Proof-of-Spacetime (PoSt)**, which
proves the data continued to be stored over a period of time. These proofs let the blockchain verify storage
without trusting the miner, and the network's useful work (storing real data) doubles as its consensus
security. Filecoin is built on top of IPFS content addressing. (Notably, its papers are the ones Tron was
accused of plagiarizing — see `../smart-contract-platforms/tron.md`.)
