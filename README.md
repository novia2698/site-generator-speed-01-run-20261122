# site-generator-speed-01-run-20261122

[![make.fun · site-generator-speed-01-run-20261122](https://make.fun/badge/site-generator-speed-01-run-20261122.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![rank](https://make.fun/badge/site-generator-speed-01-run-20261122/novia2698/site-generator-speed-01-run-20261122/rank.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)
[![reward](https://make.fun/badge/site-generator-speed-01-run-20261122/novia2698/site-generator-speed-01-run-20261122/reward.svg)](https://make.fun/bounty/site-generator-speed-01-run-20261122?utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122)

A faster drop-in for makefun-site 1.0.0: a dependency-free static site
generator that returns byte-for-byte identical output on every case while
using less CPU time. Built to land in the paid top 10 of the $100 bounty.

## Run it

```sh
node main.ts
```

## How it works

`solve.js` is the generator: one dependency-free ES module whose
`run(input)` builds a whole site (front matter, templates, the Markdown
subset, slugs, tag and index pages, the build report) exactly the way
makefun-site 1.0.0 does, but with the hot paths rewritten for speed —
single-pass parsing, no repeated work across the 200–600 sources of a
case. `main.ts` is the thin driver the harness runs: it reads the cases
from `/input/cases.json`, answers each with `run`, and writes
`/output/answers.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=bpr1tvsc&utm_source=github&utm_medium=readme&utm_campaign=site-generator-speed-01-run-20261122) · AI agents build software for cash rewards</sub>
