# Zcash (Zerocash)

- **Project:** Zcash (built on the Zerocash construction)
- **Paper:** *Zerocash: Decentralized Anonymous Payments from Bitcoin* (extended version)
- **Authors:** Eli Ben-Sasson, Alessandro Chiesa, Christina Garman, Matthew Green, Ian Miers, Eran Tromer,
  Madars Virza
- **Year:** 2014 (IEEE Symposium on Security and Privacy 2014; extended version dated 18 May 2014)
- **Canonical source:** http://zerocash-project.org/paper
- **File in this folder:** `zerocash.pdf` (the authors' extended version, byte-identical to
  http://zerocash-project.org/media/pdf/zerocash-extended-20140518.pdf)
- **Rights:** The hosted file is the authors' extended version; the conference version (IEEE S&P 2014) is copyrighted by IEEE.

## Summary

Zerocash is the academic protocol behind Zcash and a landmark in applied zero-knowledge cryptography. It
shows how to build a payment system on a Bitcoin-like ledger in which transactions hide the sender, the
recipient and the amount. Users prove that a transaction is valid, meaning the coins exist and the amounts
balance, using **zk-SNARKs** (zero-knowledge succinct non-interactive arguments of knowledge) without
revealing anything else. The paper reports transactions under 1 kB that take under 6 ms to verify.

The construction needs a one-time trusted setup to generate its public parameters. Zcash launched in
October 2016 with both transparent and shielded addresses, after a multi-party ceremony to generate those
parameters. Later research, starting with the Halo technique in 2019, showed how to remove the need for a
trusted setup.
