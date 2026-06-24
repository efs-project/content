# Monero (CryptoNote)

- **Title:** CryptoNote v 2.0
- **Project:** Monero (built on the CryptoNote protocol)
- **Author(s):** Nicolas van Saberhagen (pseudonym)
- **Year:** 2013 (dated October 17, 2013)
- **Canonical source:** https://cryptonote.org/whitepaper.pdf (original site defunct; archived copy used) —
  Monero's own annotated copy: https://www.getmonero.org/resources/research-lab/pubs/whitepaper_annotated.pdf
- **License / distribution:** **FLAG (mild).** The original 2013 CryptoNote v2 paper carries no explicit
  license statement. It is universally mirrored (Monero, Bytecoin, Zenodo, etc.), and the Zenodo archival
  copy is published under CC-BY 4.0. Included on that basis, but confirm before durable public hosting.
- **File:** `cryptonote.pdf` (fetched from Web Archive mirror and validated as the real CryptoNote v2 paper)

## Summary

CryptoNote v2 is the protocol paper that Monero is built on; it is the foundational document of the
privacy-coin lineage. It identifies traceability and linkability weaknesses in Bitcoin's transparent ledger
and proposes cryptographic fixes: **ring signatures** to obscure which input actually spent funds (hiding
the sender among a set of plausible signers) and **one-time stealth addresses** so that recipients cannot be
linked across payments. It also discusses an egalitarian, memory-hard proof-of-work. Monero implemented and
extended these ideas (later adding RingCT to hide amounts), becoming the most prominent privacy-focused
cryptocurrency. Note this file is the CryptoNote protocol paper, not a Monero-branded document.
