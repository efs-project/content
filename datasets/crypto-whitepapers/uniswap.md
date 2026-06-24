# Uniswap

- **Title:** Uniswap v2 Core; Uniswap v3 Core
- **Project:** Uniswap
- **Author(s):** Hayden Adams, Noah Zinsmeister, Moody Salem, River Keefer, Dan Robinson (varies by version)
- **Year:** v2 — 2020; v3 — March 2021 (original v1 concept, 2018)
- **Canonical source:** https://app.uniswap.org/whitepaper.pdf (v2); https://app.uniswap.org/whitepaper-v3.pdf (v3)
- **License / distribution:** Freely published via uniswap.org. Included as freely-distributed project
  whitepapers.
- **Files:** `uniswap-v2-core.pdf`, `uniswap-v3-core.pdf` (both fetched and validated)

## Summary

Uniswap is the protocol that popularized the **automated market maker (AMM)** model for decentralized
exchange. Instead of an order book, liquidity providers deposit pairs of tokens into pools, and trades
execute against a deterministic pricing curve. The **v2 Core** paper formalizes the constant-product
invariant (x·y = k), adds direct ERC20-to-ERC20 pairs, time-weighted average price oracles, and flash swaps.
The **v3 Core** paper introduces **concentrated liquidity**, letting providers allocate capital within
custom price ranges for far greater capital efficiency, along with multiple fee tiers. Two versions are
included because they represent distinct, influential designs in DeFi. (v1 was only a blog/explainer; v2 and
v3 are the canonical formal papers.)
