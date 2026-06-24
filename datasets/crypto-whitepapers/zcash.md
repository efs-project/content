# Zcash (Zerocash)

- **Title:** Zerocash: Decentralized Anonymous Payments from Bitcoin (extended version)
- **Project:** Zcash (built on the Zerocash construction)
- **Author(s):** Eli Ben-Sasson, Alessandro Chiesa, Christina Garman, Matthew Green, Ian Miers,
  Eran Tromer, Madars Virza
- **Year:** 2014 (IEEE S&P 2014; extended version dated May 18, 2014)
- **Canonical source:** http://zerocash-project.org/paper
- **License / distribution:** **FLAG (mild).** The official conference version is **IEEE-copyrighted**.
  The file included here is the **authors' freely-hosted extended version** from zerocash-project.org —
  redistributing an author preprint is standard and acceptable, but it is not the IEEE version. Noting the
  distinction for James.
- **File:** `zerocash.pdf` (authors' extended version; fetched and validated)

## Summary

Zerocash is the academic protocol behind Zcash and a landmark in applied zero-knowledge cryptography. It
shows how to build a decentralized anonymous payment scheme on top of a Bitcoin-like ledger using
**zk-SNARKs** (zero-knowledge succinct non-interactive arguments of knowledge): users can prove a
transaction is valid — that inputs exist and balances are conserved — without revealing the sender,
recipient, or amount. This provides much stronger privacy than mixing or ring signatures, with fully shielded
transactions. Zcash implemented these ideas as a live cryptocurrency offering both transparent and shielded
addresses. The trade-off historically involved a trusted setup for the SNARK parameters, which the paper and
later work address.
