# Avalanche

- **Title:** Snowflake to Avalanche: A Novel Metastable Consensus Protocol Family for Cryptocurrencies
  (consensus); plus the Ava Labs Avalanche Platform whitepaper
- **Project:** Avalanche (Ava Labs)
- **Author(s):** Team Rocket (pseudonymous, consensus paper); Ava Labs (platform paper)
- **Year:** 2018–2020 (consensus paper 2018; arXiv 1906.08936, 2019; platform paper 2020)
- **Canonical source:** https://arxiv.org/abs/1906.08936 (consensus);
  https://www.avalabs.org/whitepapers (platform)
- **License / distribution:** Consensus paper hosted on arXiv (freely available preprint); platform paper
  freely published by Ava Labs. Included as freely-distributed documents.
- **Files:** `avalanche-consensus.pdf` (arXiv), `avalanche-platform.pdf` (Ava Labs) — both fetched and validated

## Summary

Avalanche introduced a new family of **leaderless, metastable consensus protocols** — Slush, Snowflake,
Snowball, and Avalanche — based on repeated randomized sub-sampling of the network: each node repeatedly
queries small random samples of peers and shifts its preference toward the majority answer, rapidly driving
the whole network to an irreversible decision with high probability. This achieves Byzantine-fault-tolerant
agreement that is highly scalable and quick to finalize without a leader or proof-of-work, while gracefully
tolerating large numbers of participants. The Avalanche platform paper builds a multi-chain network (the
X-Chain, P-Chain, and C-Chain) on this consensus, supporting custom subnets and EVM-compatible smart
contracts.
