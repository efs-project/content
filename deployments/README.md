# Deployments

Commit chain-specific deployment outputs here.

Suggested layout:

```text
deployments/
  <chain-id>/
    <dataset>.json
```

Source manifests under `datasets/` should stay chain-neutral. Deployment records can include IPFS CIDs, EFS anchor UIDs, attestation UIDs, transaction hashes, signer addresses, block numbers, and script versions.

