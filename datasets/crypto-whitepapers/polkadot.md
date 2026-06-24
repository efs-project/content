# Polkadot

- **Title:** Polkadot: Vision for a Heterogeneous Multi-Chain Framework (Draft 1)
- **Project:** Polkadot (Web3 Foundation / Parity)
- **Author(s):** Dr. Gavin Wood (founder, Ethereum & Parity)
- **Year:** 2016
- **Canonical source:** Web3 Foundation / polkadot.com (whitepaper). The included PDF was fetched from a
  reputable mirror; the canonical authoritative source is the Web3 Foundation.
- **License / distribution:** Web3 Foundation whitepaper, freely circulated. Included as a
  freely-distributed project whitepaper.
- **File:** `polkadot.pdf` (fetched and validated as the genuine Gavin Wood Polkadot whitepaper)

## Summary

Polkadot's whitepaper argues that existing blockchains conflate two distinct concerns — **canonicality**
(agreeing on a single ordered history) and **validity** (agreeing that state transitions are correct) — and
that separating them enables scalability and extensibility. Polkadot proposes a central **relay chain** that
provides shared security and consensus to many parallel application-specific chains called **parachains**,
which can have heterogeneous designs and still interoperate and pass messages. Validators secure the relay
chain while collators produce parachain blocks. The result is a framework for many specialized chains
operating under one pooled security umbrella, with cross-chain communication as a first-class feature.
