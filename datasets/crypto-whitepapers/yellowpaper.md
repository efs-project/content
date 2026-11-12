# Ethereum Yellow Paper

- **Project:** Ethereum
- **Paper:** *Ethereum: A Secure Decentralised Generalised Transaction Ledger*
- **Author:** Gavin Wood (original author); now maintained by Andrew Ashikhmin with contributions from many others
- **Year:** 2014 (first edition); this copy is the Shanghai version `efc5f9a`, dated 2025-02-04
- **Canonical source:** https://ethereum.github.io/yellowpaper/paper.pdf (built from https://github.com/ethereum/yellowpaper)
- **File in this folder:** `yellowpaper.pdf` (byte-identical to the ethereum.github.io copy; built from commit
  [`efc5f9a`](https://github.com/ethereum/yellowpaper/commit/efc5f9a1f356cba376c978eedb63cb0363c2aa85))
- **Rights:** Licensed under [Creative Commons Attribution-ShareAlike 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
  (CC BY-SA 4.0), as stated in the repository's [`LICENCE.md`](https://github.com/ethereum/yellowpaper/blob/master/LICENCE.md).

## Summary

Where the Ethereum whitepaper explains the idea, the Yellow Paper defines the machine. Gavin Wood wrote it
in 2014 as a formal, mathematical specification of the Ethereum protocol: the world state and account
model, transactions and blocks, the Ethereum Virtual Machine and every opcode's gas cost, and the rules
for executing a transaction and applying it to the state. It gave independent client teams, writing in
different languages, one precise reference to implement against.

The paper has been revised for each network upgrade since. Its maintainers note that it now covers the
protocol only up to the Shanghai upgrade (April 2023) and does not yet include Cancun or later changes; the
[Python execution-layer specification](https://ethereum.github.io/execution-specs/) is kept up to date
instead. It remains the classic formal description of the Ethereum execution layer.
