# Solana

- **Project:** Solana
- **Paper:** *Solana: A new architecture for a high performance blockchain* (v0.8.13)
- **Author:** Anatoly Yakovenko
- **Year:** first drafted 2017; this version 2018
- **Canonical source:** https://solana.com/solana-whitepaper.pdf
- **File in this folder:** `solana.pdf` (byte-identical to the solana.com copy)
- **Rights:** Published openly by Solana Labs; no explicit licence stated.

## Summary

Solana's whitepaper introduces **Proof of History (PoH)**: a sequential hash chain that acts as a
verifiable record that events happened in a particular order and that time passed between them. Because
every validator can check this shared "clock" locally, nodes do not need to exchange messages to agree on
ordering, which removes a major bottleneck in traditional consensus.

The paper combines PoH with a proof-of-stake consensus mechanism and pipelined transaction processing,
aiming for very high throughput and low latency on a single global state. Solana's network opened to the
public in March 2020.
