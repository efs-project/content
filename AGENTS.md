# AGENTS.md

This repository is the canonical EFS content catalog. Keep it simple, portable, and deployable.

## Mission

Curate useful files that can follow EFS to every chain: games, standards, whitepapers, historical texts, media, and future datasets. Every item should become easier to understand, verify, pin, and deploy over time.

## Rules

- Do not add the local deployment checkout, build artifacts, node modules, or temporary files.
- Keep dataset files directly beside their dataset `manifest.json` unless there is a concrete reason to introduce a subfolder.
- Preserve provenance. Do not remove source URLs, author names, copyright notices, or license notes.
- Do not imply EFS owns or relicenses third-party works.
- Use SPDX license ids when possible, such as `CC0-1.0`, `MIT`, and `CC-BY-4.0`.
- Use `NOASSERTION` or `LicenseRef-*` for unclear or nonstandard rights status.
- Treat unclear redistribution rights as not deployable until reviewed.
- Keep manifests compatible with the current seeder: `dataset`, `anchorPath`, `defaults`, and `files[].path` must keep working.
- Add rich metadata incrementally instead of doing broad rewrites.
- Validate manifests before committing with `npm run validate`.

## Metadata Direction

Prefer:

- `path` for the local file and EFS anchor segment.
- `title` for human display names.
- `description` for human summaries.
- `source` for upstream provenance.
- `mirrors` for deployable retrieval URIs, especially `ipfs://`.
- `deployments/<chain-id>/` for chain-specific outputs.

If a current manifest uses `name` as a filename, leave it compatible and add `title` separately when improving that item.

