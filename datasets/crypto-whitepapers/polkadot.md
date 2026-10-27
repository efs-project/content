# Polkadot

- **Project:** Polkadot
- **Paper:** *Polkadot: Vision for a Heterogeneous Multi-Chain Framework* (Draft 1)
- **Author:** Gavin Wood
- **Year:** 2016
- **Canonical source:** https://github.com/w3f/polkadot-white-paper (Web3 Foundation)
- **File in this folder:** `polkadot.pdf` (a December 2016 build of Draft 1; the Web3 Foundation's current
  copy has minor later edits, such as renumbered references)

## Summary

The Polkadot whitepaper argues that existing blockchains tie together two separate concerns:
**canonicality** (agreeing on one ordered history) and **validity** (agreeing that state transitions are
correct). Separating them, it says, makes chains easier to extend and scale. Polkadot proposes a central
**relay chain** that provides consensus and shared security to many parallel chains called
**parachains**, which can have different designs and still pass messages to each other. Validators secure
the relay chain while collators produce parachain blocks.

Gavin Wood, an Ethereum co-founder, wrote the paper. Polkadot's network launched in May 2020 using
nominated proof-of-stake, and parachains went live in December 2021.
