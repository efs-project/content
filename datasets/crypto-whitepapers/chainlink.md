# Chainlink

- **Project:** Chainlink
- **Paper:** *ChainLink: A Decentralized Oracle Network* (v1.0)
- **Authors:** Steve Ellis, Ari Juels, Sergey Nazarov
- **Year:** 2017 (dated 4 September 2017)
- **Canonical source:** https://research.chain.link/whitepaper-v1.pdf
- **File in this folder:** `chainlink-whitepaper-v1.pdf` (byte-identical to the research.chain.link copy)

## Summary

Smart contracts cannot fetch outside data (prices, events, web APIs) on their own, and relying on a single
centralized "oracle" to supply it brings back a single point of failure. The Chainlink whitepaper proposes a
**decentralized oracle network**: many independent nodes retrieve and report data, and their answers are
aggregated, either by an on-chain contract or by a more efficient off-chain consensus mechanism. A
reputation system and security monitoring help users choose reliable providers, and the LINK token pays node
operators.

Chainlink became widely used to supply price feeds and other data to decentralized-finance applications. A
second whitepaper, *Chainlink 2.0: Next Steps in the Evolution of Decentralized Oracle Networks*, followed in
April 2021.
