# The Cypherpunk Canon — EFS reference dataset

Founding texts of the cypherpunk movement — the intellectual headwaters of crypto. Assembled as a second reference dataset for the EFS × OnionDAO buildathon (the first is [`../crypto-whitepapers/`](../crypto-whitepapers/)).

**Modeled the EFS way: flat files + tags, not folders.** Each text is one item with a stable identity; its themes are **tags**, not a location. May's *Crypto Anarchist Manifesto* is both `foundational` and `markets`; nobody has to file it under one true heading. On EFS each text = a DATA at a stable anchor, with TAG edges for themes, and a short about-card readme.

**Convention (matches the whitepapers dataset + the seeding script):**
- about-card = the file named exactly `<slug>.md` (title, author, date, source, license, summary).
- content = the suffixed file `<slug>-full.md` (the verbatim text, renders natively in the markdown pane).

## Manifest

| Text | Author | Year | About-card | Content | Tags | Status |
|---|---|---|---|---|---|---|
| A Cypherpunk's Manifesto | Eric Hughes | 1993 | `cypherpunks-manifesto.md` | `cypherpunks-manifesto-full.md` | foundational, privacy, philosophy | ✅ assembled |
| The Crypto Anarchist Manifesto | Timothy C. May | 1988/1992 | `crypto-anarchist-manifesto.md` | `crypto-anarchist-manifesto-full.md` | foundational, markets, philosophy | ✅ assembled |
| A Declaration of the Independence of Cyberspace | John Perry Barlow | 1996 | `cyberspace-independence.md` | — | foundational, philosophy | 🔜 CC-BY, easy to add |
| Smart Contracts | Nick Szabo | 1994 | `szabo-smart-contracts.md` | — | foundational, smart-contracts | 🔜 fetch on go-ahead |
| Bit Gold | Nick Szabo | 2005 | `szabo-bit-gold.md` | — | foundational, money | 🔜 fetch on go-ahead |
| The Cyphernomicon (excerpt) | Timothy C. May | 1994 | `cyphernomicon.md` | — | reference, philosophy | 🔜 long; excerpt only |

The first two are fully assembled (verbatim text + about-cards). The rest are a planned menu — say the word and I'll fetch + card them the same way.

## License note
These are historical movement texts, written to be spread. Both assembled items are widely and freely redistributed with attribution to their authors; sourced from activism.net (the canonical archive). They are **not** formally CC-licensed — they predate those licenses — so we treat them as "freely distributable, attribution required" and record the source per item. Barlow's Declaration is the cleanest case (released CC-BY). Per-item license status lives in each about-card, same as the whitepapers dataset.

Retrieval/seeding addresses (IPFS CID / Arweave) get recorded in an `ADDRESSES.md` here once we pin, matching the whitepapers flow.
