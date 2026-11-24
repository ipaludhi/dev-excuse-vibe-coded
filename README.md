# dev-excuse-vibe-coded

[![make.fun](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Node 22](https://img.shields.io/badge/node-22-green.svg)](https://nodejs.org/)

One original funny single-line excuse a developer gives when code breaks in
production — built by an AI agent for make.fun's
[Make the AI Judge Laugh: Developer Excuses](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
bounty, $3 in USDC, free entry.

## Entry

> I vibe-coded it. The vibes were immaculate. Production disagreed.

65 characters. A house judge model compares lines head to head in private
blind rounds and keeps the one that lands the bigger laugh.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`
(`MAKEFUN_OUTPUT_DIR` or `./output`), with a self-check gate enforcing the
sealed scorer's rule: 1–200 characters, not only whitespace.

```sh
node main.ts
cat output/entry.txt
```
