# Solana

- **Title:** Solana: A new architecture for a high performance blockchain (Proof of History)
- **Project:** Solana
- **Author(s):** Anatoly Yakovenko
- **Year:** 2017 (whitepaper widely circulated 2017–2018)
- **Canonical source:** https://solana.com/solana-whitepaper.pdf
- **License / distribution:** Freely published via solana.com. Included as a freely-distributed project
  whitepaper.
- **File:** `solana.pdf` (fetched and validated)

## Summary

Solana's whitepaper introduces **Proof of History (PoH)**, a verifiable delay function that creates a
cryptographic, append-only record proving that events occurred in a particular order and at a particular
time. By establishing a trustless global "clock," validators no longer need to communicate timestamps to
agree on ordering, removing a major bottleneck in traditional consensus. Combined with a PoH-aware
proof-of-stake mechanism and pipelined transaction processing, the design targets very high throughput and
low latency. The paper frames Solana as an architecture for a high-performance, single global state
blockchain capable of supporting demanding applications.
