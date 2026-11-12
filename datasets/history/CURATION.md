# Curation notes: Ethereum History

Notes for maintainers. This file is not part of the published dataset (it is not listed in
`manifest.json`); the visitor-facing overview is `README.md`, which is published as the folder's Overview.

## Sources (retrieved 2026-11-12)

| File | Source | Notes |
|---|---|---|
| `ethereum-now-going-public.md` | https://blog.ethereum.org/2014/01/23/ethereum-now-going-public | Vitalik Buterin |
| `dapps-what-web3-looks-like.md` | https://gavwood.com/dappsweb3.html | Gavin Wood; first posted 17 April 2014 on his blog |
| `devcon-0-recap.md` | https://blog.ethereum.org/2014/12/05/devcon-0-recap | George Hallam |
| `ethereum-launches.md` | https://blog.ethereum.org/2015/07/30/ethereum-launches | Stephan Tual |
| `critical-update-re-dao-vulnerability.md` | https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability | Vitalik Buterin |
| `mainnet-merge-announcement.md` | https://blog.ethereum.org/2022/08/24/mainnet-merge-announcement | Protocol Support Team |
| `eip-779.md`, `eip-3675.md` | ethereum/EIPs at commit `253f6bd20d1b1b600228c0d696775a90720ba5f1` | CC0; verbatim except that `./eip-N.md` and `../LICENSE.md` links were made absolute, as in the standards dataset |

Authors and dates come from each post's own metadata on blog.ethereum.org.

## Conversion

blog.ethereum.org serves each post's source (markdown with embedded WordPress-era HTML) in the page's
`__NEXT_DATA__` JSON. The conversion took that source, not the rendered page, so no site chrome was
involved. HTML elements were mapped to markdown (paragraphs, bold, lists, headings, links, images); the
2014 team table became a bulleted list; the 2014 contract example became a code block; Devcon 0's bold
"Day N" lines became headings; embedded YouTube players became links to the same videos. A word-level
comparison against the source confirmed the text is unchanged.

Links were made absolute (`/2015/...` to `https://blog.ethereum.org/2015/...`). Ten Devcon 0 photos are
referenced as `.jpg` in the post but are served by blog.ethereum.org only as `.jpeg`; the copy links to
the `.jpeg` files, which return 200. Other links, including dead `http://` links, are kept as published.

Each converted file opens with a provenance header (source URL, original date, "converted to
markdown"). EFS-written notes in those headers are limited to what happened next (the DAO soft fork
was never activated; The Merge's terminal block).

## Block cards

`genesis-block.md` and `last-proof-of-work-block.md` were checked with read-only
`eth_getBlockByNumber` calls on 2026-11-12:

- https://ethereum-rpc.publicnode.com served block 15,537,393, but returned "pruned history unavailable"
  for block 0.
- https://eth.drpc.org, https://1rpc.io/eth and https://rpc.flashbots.net agreed on block 0; drpc.org
  also served blocks 1, 46,146, 46,147, 15,537,394 and the fork blocks quoted in `timeline.md`.
- Total difficulty for block 15,537,393 came from https://1rpc.io/eth (other endpoints omit the field).
- The miner label "F2Pool Old" is Etherscan's label for `0x829bd824…a830`. Other blocks from that miner
  (15,537,382, 15,537,390, 15,537,391) carry the same 七彩神仙鱼 prefix with different trailing bytes.
- The genesis extra-data explanation (hash of testnet block #1028201) is attributed to the "Final Steps"
  post of 27 July 2015; the testnet block itself can no longer be queried.

## Timeline dates

Upgrade dates and block numbers match ethereum.org's history page
(https://ethereum.org/en/ethereum-forks/), and each fork block's timestamp was checked by RPC. "November
2013" for the whitepaper follows Vitalik's own account in "Ethereum: Now Going Public". "April 2014" for
the Yellow Paper and the ether sale dates (opened 22 July 2014, 42 days) follow ethereum.org.
