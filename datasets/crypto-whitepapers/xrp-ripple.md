# XRP Ledger (Ripple)

- **Project:** XRP Ledger / Ripple
- **Paper:** *The Ripple Protocol Consensus Algorithm*
- **Authors:** David Schwartz, Noah Youngs, Arthur Britto (Ripple Labs Inc.)
- **Year:** 2014
- **Canonical source:** https://ripple.com/files/ripple_consensus_whitepaper.pdf
- **File in this folder:** `ripple-consensus-whitepaper.pdf` (8 pages; byte-identical to the ripple.com copy)
- **Rights:** Published openly by Ripple Labs; no explicit licence stated.

## Summary

The paper presents a low-latency consensus algorithm for the XRP Ledger that does not use proof-of-work
mining. Each node chooses a list of validators it trusts (its "Unique Node List", or UNL), and the network
agrees on the next ledger through rounds in which nodes propose transaction sets and converge on one, as
long as the trusted lists of different nodes overlap enough. The paper argues that only minimal overlap is
needed and that the network tolerates a bounded fraction of faulty nodes. The design targets fast, cheap
payments and settlement rather than general smart contracts.

A 2018 analysis by Ripple researchers Brad Chase and Ethan MacBrough (*Analysis of the XRP Ledger Consensus
Protocol*, arXiv:1802.07242) found that the paper's overlap condition (about 20% of a node's UNL) was
too weak, and that safety requires much larger overlap (roughly 90% under a general fault model). The PDF
carries a note from Ripple saying it is kept for historical interest and pointing readers to that analysis.
