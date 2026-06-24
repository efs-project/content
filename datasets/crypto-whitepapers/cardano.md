# Cardano (Ouroboros)

- **Title:** Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol
- **Project:** Cardano (consensus protocol underlying it)
- **Author(s):** Aggelos Kiayias, Alexander Russell, Bernardo David, Roman Oliynykov
- **Year:** 2016 (IACR ePrint 2016/889; also CRYPTO 2017)
- **Canonical source:** https://eprint.iacr.org/2016/889
- **License / distribution:** Academic preprint hosted on the IACR Cryptology ePrint Archive; freely
  available for download. Included as an academic preprint.
- **File:** `ouroboros.pdf` (fetched and validated)

## Summary

Ouroboros is the proof-of-stake consensus protocol that underpins Cardano, and it was the first PoS
protocol to come with a rigorous, peer-reviewed security proof. Instead of mining, the protocol divides
time into epochs and slots and uses a secure, verifiable coin-flipping procedure to elect slot leaders in
proportion to stake, who then produce blocks. The paper proves that, under an honest-majority-of-stake
assumption, the protocol achieves the same persistence and liveness guarantees as proof-of-work without its
energy cost. Cardano itself is a layered smart-contract platform built on this foundation; note that the
file here is the underlying consensus paper rather than a product brochure.
