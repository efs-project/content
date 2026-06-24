# Cosmos

- **Title:** Cosmos: A Network of Distributed Ledgers
- **Project:** Cosmos (Tendermint / Interchain Foundation)
- **Author(s):** Jae Kwon, Ethan Buchman
- **Year:** 2016
- **Canonical source:** https://github.com/cosmos/cosmos (and https://cosmos.network/resources/whitepaper)
- **License / distribution:** Open-source repository content from the Cosmos project; freely available.
  Included as the project's own published whitepaper. (Distributed as Markdown in the repo.)
- **File:** `cosmos-whitepaper.md` (fetched from the project's GitHub repo)

## Summary

Cosmos describes an "Internet of Blockchains": a network of independent, application-specific chains
("zones") that can interoperate through a central **Hub** using the **Inter-Blockchain Communication (IBC)**
protocol. Its foundation is **Tendermint**, a Byzantine-fault-tolerant proof-of-stake consensus engine that
provides fast finality and is decoupled from the application layer via the ABCI interface, so developers can
build chains without re-implementing consensus and networking. Rather than forcing everything onto one
chain, Cosmos envisions many sovereign chains exchanging tokens and data. It is included here as Markdown,
which doubles as a clean demonstration of EFS's "markdown file" support.
