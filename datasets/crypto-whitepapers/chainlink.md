# Chainlink

- **Title:** ChainLink: A Decentralized Oracle Network (v1.0)
- **Project:** Chainlink
- **Author(s):** Steve Ellis, Ari Juels, Sergey Nazarov
- **Year:** 2017 (September 4, 2017)
- **Canonical source:** https://research.chain.link/whitepaper-v1.pdf
- **License / distribution:** Freely published via research.chain.link. Included as a freely-distributed
  project whitepaper.
- **File:** `chainlink-whitepaper-v1.pdf` (fetched and validated)

## Summary

Smart contracts cannot natively access external data (prices, events, APIs) or off-chain computation, and a
single centralized oracle reintroduces a single point of failure. Chainlink's whitepaper proposes a
**decentralized oracle network**: many independent oracle nodes retrieve and report data, with on-chain and
off-chain components, an aggregation mechanism, and a **reputation/penalty system** to incentivize honest,
reliable reporting. By sourcing answers from multiple independent providers and aggregating them, the system
delivers tamper-resistant data feeds to contracts. Chainlink became the dominant oracle infrastructure for
DeFi and beyond; a later "Chainlink 2.0" whitepaper expands the vision to decentralized off-chain
computation.
