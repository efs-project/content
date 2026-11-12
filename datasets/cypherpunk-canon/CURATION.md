# Cypherpunk Canon: curation notes

Curator notes for this dataset. This file is not deployed (it is not in
`manifest.json`); the visitor-facing overview is `README.md`.

## Hosting policy

- **Documents are hosted whether or not they carry an explicit licence**
  (owner's rule; first applied to the two manifestos on 2026-10-27). EFS
  stores copies with author and source attribution and does not relicense
  them.
- Media (images, audio, video) must carry a real licence; this dataset has none.
- The 21-work starting list came from
  [The Cypherpunk Library](https://www.cypherpunkbooks.com/collection). Its
  blanket public-domain claim is not relied on as rights evidence. *b-money* was
  added because the Bitcoin whitepaper cites it as reference [1].
- The ten remaining link records were created under an older, stricter rights
  policy. Under the current rule they can be converted to full texts (or PDFs)
  once someone fetches and verifies the complete text, as was done for the nine
  below.

## Full texts: sources and verification

All texts were fetched on 2026-11-12. Each file is the title, an author/date
line, the text, and a closing `*Source: ...*` line. Words, spelling and
original typos are unchanged. Hard-wrapped plain-text sources keep their line
breaks; Markdown joins them into paragraphs.

| File | Source used | Notes |
|---|---|---|
| `cypherpunks-manifesto-full.md` | https://www.activism.net/cypherpunk/manifesto.html | Hosted in full since 2026-10-27. |
| `crypto-anarchist-manifesto-full.md` | https://www.activism.net/cypherpunk/crypto-anarchy.html | Source page says "freely distributable with attribution". |
| `declaration-of-independence-of-cyberspace.md` | https://www.eff.org/cyberspace-independence | EFF hosts Barlow's own archive. The emailed cover note that preceded the declaration in 1996 is not included. |
| `the-conscience-of-a-hacker.md` | https://phrack.org/issues/7/hackers-manifesto.html | Identical to `3.txt` in Phrack's issue 7 archive (https://phrack.org/archives/tgz/phrack7.tar.gz). Issue 7 is dated 25 September 1986. Indented lines are rendered as Markdown line breaks; the one line-end hyphenation ("will-ing") is joined. |
| `why-i-wrote-pgp.md` | https://www.philzimmermann.com/EN/essays/WhyIWrotePGP.html | Author's site. This is the 1999 revision of the 1991 essay. |
| `protecting-privacy-with-electronic-cash.md` | Extropy #10, Winter/Spring 1993, pp. 8-14; scan at https://cdn.nakamotoinstitute.org/docs/protecting-privacy-with-electronic-cash.pdf | See below. |
| `the-beauty-of-ecash.md` | Hal Finney's essay page, https://web.archive.org/web/20140421063207/http://www.finney.org/~hal/beauty_ecash.html | Author's own site (archived). Finney titled it "The Beauty of ECash"; the old record used "eCash". His email address under the signature is omitted. |
| `libertaria-in-cyberspace.md` | May's 9 August 1993 Cypherpunks repost, https://mailing-list-archive.cryptoanarchy.wiki/archive/1993/08/afd51441bdcebe887e3841a08dc769cd76f81c8291dc56525bec4c2d2368c56b | Repost carries the original Extropians headers (1 Sep 1992). Used in preference to the Nakamoto Institute copy (https://nakamotoinstitute.org/library/libertaria-in-cyberspace/), which is retypeset and drops the closing line "Libertaria will thrive in cyberspace." The 1993 cover note and May's signature block are not included. |
| `b-money.md` | https://www.weidai.com/bmoney.txt | Author's site, the URL cited in the Bitcoin whitepaper. Body is byte-identical to the source apart from trailing whitespace; includes Appendix A. |

### Protecting Privacy with Electronic Cash

The Nakamoto Institute HTML text
(https://nakamotoinstitute.org/library/protecting-privacy-with-electronic-cash/)
differs from the printed article in about twenty places (for example "third
box on the left" for the printed "right", "make it easy to experiment" for
"will let you experiment", "We can change this if technologies can" for "We can
change this; these technologies can"), and in the "Access" sidebar and
references (for example "Phillip" for the printed "Philip", "Authenticators"
for "Authentications").

The hosted text follows the print. It was checked by diffing the Nakamoto
Institute text against an independent OCR transcription of the print
(https://grafton9.net/zone-digitali/stra3/www.dada.it/stranet/snhtml/ipertest/metanet/txt2/text4e.htm
and `text5e.htm`), then reading every disagreement against the scan. Printed
slips are kept as printed ("spent used before", "used before before",
"publically", "depositer", "just as in Figure 3"). Figures 1-4 are diagrams
and are not reproduced; the closing source line says so. Curly quotes and em dashes (the print uses spaced hyphens)
follow the Nakamoto Institute typesetting; footnote markers are placed as in
the print.

## Metadata conventions

- `redistributionStatus: deployable` means the local bytes may be seeded.
- `redistributionStatus: link-only` applies to an EFS-authored record, not the
  linked work.
- `workLicense: NOASSERTION` on a record means the linked work's terms were
  not established.
- `modificationStatus: verbatim` means the work's text is unchanged; only the
  Markdown wrapper (title, author/date line, source line) is added.
- `aboutCard` points from a PDF to its human-readable card. Each card is also a
  manifest payload so it follows the dataset into EFS.
- `sha256` records the retrieved binary; the seeder also computes the on-chain
  content hash from local bytes.
- Tags become permanent on-chain folders. Bookkeeping tags (`record`, `about`,
  `index`) were removed in 2026-11; reuse existing topical tags rather than
  adding single-use ones.

## Seeder notes

The current v1 dataset seeder deploys payload paths, content types, hashes,
sizes and tags. Rich manifest fields remain catalog metadata. The seeder skips
an existing placement whose content hash already matches, so a metadata-only
manifest change does not update an unchanged payload's on-chain tags or
properties; change the file itself when its on-chain metadata must change.

Validate from the repository root with `npm run validate`.
