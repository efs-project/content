# Tezos

- **Project:** Tezos
- **Papers:**
  - *Tezos: A Self-Amending Crypto-Ledger: Position Paper*, dated 3 August 2014
  - *Tezos: a self-amending crypto-ledger: White paper*, dated 2 September 2014
- **Author:** L.M. Goodman (pseudonym of Arthur Breitman)
- **Year:** 2014
- **Canonical sources:** https://tezos.com/position-paper.pdf and https://tezos.com/whitepaper.pdf
- **Files in this folder:** `tezos-position-paper.pdf` and `tezos-whitepaper.pdf` (both byte-identical to the
  tezos.com copies)

## Summary

Tezos is a smart-contract platform whose defining feature is **self-amendment**: the protocol includes a
procedure for stakeholders to vote on changes to the protocol itself, including changes to the voting
procedure, so it can upgrade without contentious hard forks. The position paper explains the motivation and
the choice of proof-of-stake and the OCaml language. The whitepaper describes the design: a network shell
that can run any blockchain protocol as a module, the seed amendment procedure, proof-of-stake consensus and
Turing-complete smart contracts. The hosted whitepaper is a later edition in which changes between the
original paper and the implementation are marked in red.

Tezos was created by Arthur and Kathleen Breitman, and its mainnet went live in 2018. Its smart-contract
language, Michelson, is designed to make formal verification of contracts practical.
