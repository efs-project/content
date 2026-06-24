# XRP (Ripple)

- **Title:** The Ripple Protocol Consensus Algorithm
- **Project:** Ripple / XRP Ledger
- **Author(s):** David Schwartz, Noah Youngs, Arthur Britto (Ripple Labs Inc.)
- **Year:** 2014
- **Canonical source:** https://ripple.com/files/ripple_consensus_whitepaper.pdf
- **License / distribution:** Published openly by Ripple Labs; freely available. Included as a
  freely-distributed project whitepaper.
- **File:** `ripple-consensus-whitepaper.pdf` (8 pages; fetched and validated)

## Summary

The Ripple consensus whitepaper presents a low-latency consensus algorithm for the XRP Ledger that does not
rely on proof-of-work mining. Each node trusts a configurable set of peers (a "Unique Node List"), and the
network reaches agreement through iterative rounds in which nodes propose and progressively converge on a
set of candidate transactions, requiring only that trusted subnetworks overlap sufficiently. The paper shows
that with minimal connectivity this achieves network-wide agreement quickly and tolerates a bounded fraction
of faulty nodes. The design targets fast, cheap cross-border payments and settlement — Ripple's core use
case — rather than general smart contracts.
