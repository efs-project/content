# Algorand

- **Title:** Algorand: Scaling Byzantine Agreements for Cryptocurrencies
- **Project:** Algorand
- **Author(s):** Jing Chen, Silvio Micali (foundational theory); related work by Gilad et al.
- **Year:** 2017 (IACR ePrint 2017/454)
- **Canonical source:** https://eprint.iacr.org/2017/454
- **License / distribution:** Academic preprint on the IACR Cryptology ePrint Archive; freely available.
  Included as an academic preprint.
- **File:** `algorand.pdf` (fetched and validated)

## Summary

Algorand, originated by Turing Award winner Silvio Micali, is a pure proof-of-stake protocol that aims to
reach consensus with both high speed and strong security while avoiding forks. Its key idea is
**cryptographic sortition**: in each round a small committee of users is selected secretly and at random,
weighted by stake, using verifiable random functions, so that participants prove their own selection only
after the fact. This lets the network run a Byzantine agreement that scales to many users, confirms blocks
quickly, and resists attackers who cannot predict or target the committee in advance. The result is a
permissionless ledger with negligible forking probability and low computational cost.
