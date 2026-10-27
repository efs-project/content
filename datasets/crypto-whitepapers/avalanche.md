# Avalanche

- **Project:** Avalanche (Ava Labs)
- **Papers:**
  - *Scalable and Probabilistic Leaderless BFT Consensus through Metastability*: Team Rocket, Maofan Yin,
    Kevin Sekniqi, Robbert van Renesse, Emin Gün Sirer (Cornell University). arXiv:1906.08936v2, 2020.
  - *Avalanche Platform*: Kevin Sekniqi, Daniel Laine, Stephen Buttolph, Emin Gün Sirer. 30 June 2020.
- **Year:** 2020 (the consensus protocol was first described by the pseudonymous "Team Rocket" in 2018)
- **Canonical sources:** https://arxiv.org/abs/1906.08936 (consensus paper);
  https://assets.website-files.com/5d80307810123f5ffbb34d6e/6008d7bbf8b10d1eb01e7e16_Avalanche%20Platform%20Whitepaper.pdf
  (platform paper, as published by Ava Labs)
- **Files in this folder:** `avalanche-consensus.pdf` (arXiv v2, byte-identical) and `avalanche-platform.pdf`
  (byte-identical to the Ava Labs copy)

## Summary

The consensus paper introduces the **Snow** family of leaderless Byzantine-fault-tolerant protocols (Slush,
Snowflake, Snowball and Avalanche). Each node repeatedly asks a small random sample of other nodes for their
preference and shifts towards the majority answer. This quickly tips the whole network into agreement with
high probability, without a leader and without proof-of-work, and no node has to process more than a
logarithmic amount of data per decision. The paper reports about 3,400 transactions per second in a large
deployment.

The platform paper describes the first release of the Avalanche network (codenamed "Borealis"). It splits
the system into chains, execution environments and validator sets called **subnets**, where each subnet
validates one or more blockchains and the AVAX token secures the network. Avalanche's mainnet launched in
September 2020.
