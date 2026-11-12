# EFS Content

Curated datasets for Ethereum File System.

This repository is the portable content source for EFS demos and chain deployments. The goal is simple: keep useful, imagination-sparking files in a structure that can be pinned to IPFS, deployed to EFS on any supported chain, and enriched over time with names, descriptions, sizes, tags, provenance, and license metadata.

## Current Datasets

| Dataset | Anchor | Files | Bytes | Description |
|---|---:|---:|---:|---|
| [Web Games](./datasets/web-games/) | `/games` | 16 | 417483 | Single-file HTML5 games, playable in a sandboxed iframe. |
| [Crypto Whitepapers](./datasets/crypto-whitepapers/) | `/whitepapers` | 43 | 15079829 | Major cryptocurrency whitepapers and reference notes. |
| [Ethereum Standards](./datasets/ethereum-eips/) | `/standards` | 16 | 354321 | Landmark Ethereum standards (EIPs/ERCs), public domain under CC0. |
| [Cypherpunk Canon](./datasets/cypherpunk-canon/) | `/cypherpunk` | 27 | 23476165 | A reading shelf of 22 cypherpunk works: nine short classics in full, three books as PDFs, and links to the rest. |
| [Ethereum History](./datasets/history/) | `/history` | 12 | 114224 | Ethereum's story in its own words: the announcement, Devcon 0, launch, the DAO, the Merge. |
| [Media](./datasets/media/) | `/media` | 7 | 1312174 | Public-domain images about archives that outlast their medium: Pale Blue Dot, the Voyager Golden Record, the Ethereum diamond. |

`catalog.json` is the machine-readable table of contents. Each dataset folder owns its own `manifest.json`, a visitor-facing `README.md` (published as the folder's Overview), curator notes in `CURATION.md`, and its source files.

## Layout

```text
datasets/<dataset>/
  README.md       Human overview and curation notes.
  manifest.json  Chain-neutral seed manifest.
  *              Files to pin and deploy.

deployments/
  README.md      Where chain-specific deployment outputs will live.

manifest.schema.json
catalog.json
scripts/validate-manifests.mjs
```

Dataset files stay beside their manifest for now. That keeps the current seeder path-compatible and avoids churn.

## Manifests

Manifests intentionally preserve the current EFS seeder shape:

- `dataset`: stable dataset id.
- `title`: human display title.
- `anchorPath`: EFS root path for the dataset.
- `description`: one-sentence dataset overview.
- `defaults`: optional defaults such as `contentType` and `license`.
- `files[]`: deployable files, each with at least `path`.

Richer fields are additive. Prefer these names as the metadata grows:

- `title` for human display names.
- `description` for item summaries.
- `tags` for browsing and filtering.
- `authors`, `rightsHolder`, `license`, and `licenseUrl` for rights metadata.
- `source` for upstream provenance.
- `mirrors` for content-addressed or deployable retrieval URIs such as `ipfs://`, `ar://`, or `web3://`.
- `deployments` for chain-specific EFS attestations, kept out of source manifests when possible.

Run the structural validator before deployment:

```sh
npm run validate
```

Validation checks manifest shape, local files, catalog consistency, and the same path-safety rules used by the current seeder. It does not yet certify that every third-party item has complete rights metadata.

## Deployment

Deployment tooling is intentionally not vendored in this content repository.
Pass the desired `manifest.json` path to the active EFS deployment checkout and
run its manifest-only dry run before enabling IPFS pins or transactions. Do not
assume a sibling `contracts` checkout contains the dataset seeder.

The seeder pins local bytes, writes IPFS mirrors, records content type/hash/size, and tags files. Deployment receipts should be committed under `deployments/<chain-id>/` so source manifests stay chain-neutral.

## License

This is a mixed-license content collection.

EFS-authored manifests, catalog metadata, dataset READMEs, curation notes, and original summaries are dedicated to the public domain under CC0-1.0 unless a file says otherwise.

EFS-authored software or scripts are MIT licensed and should carry an MIT SPDX header.

Third-party works are not relicensed by EFS. Each file keeps its original license or distribution terms. See [LICENSE](./LICENSE) and [NOTICE.md](./NOTICE.md).
