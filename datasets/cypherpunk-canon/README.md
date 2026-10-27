# Cypherpunk Canon

A rights-aware reading shelf for foundational cypherpunk writing, privacy
research, and adjacent books. The dataset is deployed at `/cypherpunk`.

The initial 21-work shelf was discovered through
[The Cypherpunk Library](https://www.cypherpunkbooks.com/collection). That
collection is a useful editorial source, but its blanket public-domain claim is
not treated as sufficient rights evidence. EFS verifies redistribution terms
against the work, author, publisher, or another primary source before copying
third-party bytes.

## Contents

- 21 represented works.
- 5 works included locally: three PDFs and the full texts of the two manifestos.
- 16 link-only metadata records.
- 25 deployable EFS entries: one index, three PDFs, three human-readable about
  cards, two manifesto texts, and sixteen records.

Open [`collection.md`](./collection.md) for the human-readable shelf.
`manifest.json` is the deployable, machine-readable inventory.

## Locally Included Works

| Work | Format | Rights basis |
|---|---|---|
| The Praxeology of Privacy | PDF | Explicit public-domain dedication in the work and on the author's site |
| 21 Lessons | PDF | CC BY-SA 4.0 in the work and on the author's site |
| Farewell to Westphalia | PDF | CC BY-SA 4.0 in the book |
| A Cypherpunk's Manifesto | Markdown | No explicit grant; hosted in full as a foundational, widely republished text (owner decision, 2026-10-27) |
| The Crypto Anarchist Manifesto | Markdown | No explicit grant; the source page says "freely distributable with attribution"; hosted in full (owner decision, 2026-10-27) |

The binary files are unmodified.

## Link-Only Records

The remaining works are represented by EFS-authored Markdown records. Those
records are CC0-1.0 and may be deployed, pinned, and mirrored. The underlying
third-party works are not included and retain their own rights.

A record remains link-only when:

- no explicit redistribution license was found;
- the license has noncommercial or no-derivatives restrictions that need an
  operator decision; or
- availability from a website was the only evidence found.

This lets EFS preserve discovery and provenance without confusing "available
online" with "safe to mirror everywhere."

## Metadata Convention

- `redistributionStatus: deployable` means the local bytes may be seeded.
- `redistributionStatus: link-only` applies to an EFS-authored record, not the
  linked work.
- `workLicense: NOASSERTION` means the linked work's redistribution terms have
  not been established.
- `aboutCard` points from included content to its human-readable provenance and
  rights note. Each referenced card is also a manifest payload so it follows
  the dataset into EFS.
- `sha256` records the retrieved binary artifact; the deployment seeder also
  computes the on-chain content hash from local bytes.

## Validation

From the repository root:

```sh
npm run validate
```

The current v1 dataset seeder deploys payload paths, content types, hashes,
sizes, and tags. Rich manifest fields remain catalog metadata; the about-card
payloads make the important human-readable details available inside EFS.

The seeder skips an existing on-chain placement when its content hash already
matches. A metadata-only change to the manifest therefore does not update an
unchanged payload's on-chain tags or properties; change the relevant card file
when the human-readable metadata needs a new deployment.
