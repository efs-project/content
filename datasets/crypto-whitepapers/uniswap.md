# Uniswap

- **Project:** Uniswap
- **Papers:**
  - *Uniswap v2 Core*: Hayden Adams, Noah Zinsmeister, Dan Robinson. March 2020.
  - *Uniswap v3 Core*: Hayden Adams, Noah Zinsmeister, Moody Salem, River Keefer, Dan Robinson. March 2021.
- **Canonical sources:** https://app.uniswap.org/whitepaper.pdf (v2);
  https://app.uniswap.org/whitepaper-v3.pdf (v3)
- **Files in this folder:** `uniswap-v2-core.pdf` and `uniswap-v3-core.pdf` (both byte-identical to the
  uniswap.org copies)

## Summary

Uniswap is the protocol that popularized the **automated market maker (AMM)** for decentralized exchange.
Instead of an order book, liquidity providers deposit pairs of tokens into a pool, and trades execute
against a pricing formula that keeps the product of the two reserves constant (x · y = k). The **v2 Core**
paper explains the design of the v2 contracts: pools between any two ERC-20 tokens, a price oracle that
gives time-weighted average prices, "flash swaps", and a protocol fee that can be switched on later.

The **v3 Core** paper introduces **concentrated liquidity**, which lets providers place their capital within
chosen price ranges for much greater capital efficiency, along with multiple fee tiers and an improved
oracle. Uniswap runs on Ethereum and other EVM chains.
