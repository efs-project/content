# Cardano (Ouroboros)

- **Project:** Cardano
- **Paper:** *Ouroboros: A Provably Secure Proof-of-Stake Blockchain Protocol*
- **Authors:** Aggelos Kiayias, Alexander Russell, Bernardo David, Roman Oliynykov
- **Year:** 2016 (IACR ePrint 2016/889; published at CRYPTO 2017)
- **Canonical source:** https://eprint.iacr.org/2016/889
- **File in this folder:** `ouroboros.pdf` (the ePrint revision of 20 July 2019)
- **Rights:** Academic preprint, freely available on the IACR Cryptology ePrint Archive (2016/889); no explicit licence stated.

## Summary

Ouroboros is the proof-of-stake consensus protocol that underpins Cardano. The paper describes it as the
first blockchain protocol based on proof of stake with rigorous security guarantees. Instead of mining, time
is divided into epochs and slots, and a secure multiparty coin-flipping procedure elects a slot leader for
each slot in proportion to stake; that leader produces the block. The paper proves that, if a majority of
stake is honest, the protocol achieves persistence and liveness comparable to Bitcoin's, and it adds a
reward scheme under which honest behaviour is an approximate Nash equilibrium.

Cardano, developed by IOHK (co-founded by Charles Hoskinson), launched in September 2017 and added smart
contracts in September 2021. This file is the underlying research paper rather than a Cardano-branded
overview.
