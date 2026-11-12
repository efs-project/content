# Monero (CryptoNote)

- **Project:** Monero (built on the CryptoNote protocol)
- **Paper:** *CryptoNote v 2.0*
- **Author:** Nicolas van Saberhagen (pseudonym)
- **Year:** 2013 (dated 17 October 2013)
- **Canonical source:** originally https://cryptonote.org/whitepaper.pdf (site now offline; archived at
  https://web.archive.org/web/2020/https://cryptonote.org/whitepaper.pdf). Monero's annotated copy:
  https://www.getmonero.org/resources/research-lab/pubs/whitepaper_annotated.pdf
- **File in this folder:** `cryptonote.pdf` (byte-identical to the archived cryptonote.org copy)
- **Rights:** The 2013 CryptoNote v2.0 paper carries no explicit licence statement; it is widely mirrored by the Monero and Bytecoin projects and archived on Zenodo.

## Summary

CryptoNote is the protocol paper that Monero is built on, and the founding document of the privacy-coin
family. It sets out two privacy goals that Bitcoin does not meet, **untraceability** (every possible sender
of a payment is equally likely) and **unlinkability** (two payments cannot be shown to go to the same
person), and proposes fixes: **ring signatures**, which hide the real signer of a transaction among a group
of possible signers, and **one-time addresses**, so that a recipient's payments cannot be linked together.
It also proposes a proof-of-work function meant to give ordinary CPUs a fair chance against GPUs and
specialized hardware.

Monero launched in April 2014 as a fork of Bytecoin, an earlier CryptoNote-based coin. It has since extended the
design, for example by hiding transaction amounts with Ring Confidential Transactions (2017) and adopting the
RandomX proof-of-work (2019). This file is the CryptoNote paper, not a Monero-branded document.
