# Algorand

- **Project:** Algorand
- **Paper:** *Algorand: Scaling Byzantine Agreements for Cryptocurrencies*
- **Authors:** Yossi Gilad, Rotem Hemo, Silvio Micali, Georgios Vlachos, Nickolai Zeldovich (MIT CSAIL)
- **Year:** 2017 (SOSP 2017; IACR ePrint 2017/454)
- **Canonical source:** https://eprint.iacr.org/2017/454
- **File in this folder:** `algorand.pdf` (the ePrint revision of 24 September 2017)
- **Related work:** Jing Chen and Silvio Micali's earlier theory paper, *Algorand* (2016,
  https://arxiv.org/abs/1607.01341), introduced the underlying ideas.

## Summary

This paper presents Algorand as a cryptocurrency that confirms transactions in about a minute while scaling
to many users, and in which users never see conflicting confirmed transactions, even if some are malicious
or the network is temporarily partitioned. It uses a new Byzantine Agreement protocol run by a small
committee. Committee members are chosen by **cryptographic sortition**: each user privately checks, using a
verifiable random function weighted by stake, whether they have been selected, and includes a proof of that
selection in their messages.

Because participants keep no private state apart from their keys, they can be replaced after every message,
which protects against attacks on known committee members. Silvio Micali, a Turing Award winner and MIT
professor, founded Algorand in 2017, and its main network launched in June 2019.
