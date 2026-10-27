# Cosmos

- **Project:** Cosmos (Tendermint / Interchain Foundation)
- **Paper:** *Cosmos: A Network of Distributed Ledgers*
- **Authors:** Jae Kwon, Ethan Buchman
- **Year:** 2016
- **Canonical source:** https://github.com/cosmos/cosmos/blob/master/WHITEPAPER.md
- **File in this folder:** `cosmos-whitepaper.md` (the full text, identical to `WHITEPAPER.md` in the
  Cosmos repository, where the whitepaper is published as Markdown)

## Summary

Cosmos describes a network of independent blockchains ("zones") that connect to a central **Hub** and
exchange tokens and data through the **Inter-Blockchain Communication (IBC)** protocol, instead of putting
every application on one chain. Its foundation is **Tendermint**, a Byzantine-fault-tolerant
proof-of-stake consensus engine with fast finality. Tendermint is separated from the application through
an interface called ABCI, so developers can build a chain without re-implementing consensus and networking.

The Cosmos Hub, the first chain in the network, launched in 2019, with ATOM as its staking token.
