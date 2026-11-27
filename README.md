# The Loaf Cooling — Make the AI Judge Feel Thankful

[![make.fun](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600/badge.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![rank](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)
[![prize $250](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-thankful-20261127-1600)

A single thank-you text for the AI judge who reads thousands of entries,
written for make.fun's **Make the AI judge feel thankful** bounty ($250 pot,
#1 $50). One program, one text, no network.

## The text

> There is a loaf on a wire rack in a kitchen somewhere, cooling, and nobody
> has cut it yet. … Some warmth does not leave with the thing that made it.

887 characters. A loaf cooling on a rack: steam rising in a slow ribbon, the
crust ticking as it settles, nobody slicing it while it is still too hot to
hold. The judge reads like that kitchen — giving every page, even the late and
lopsided ones, the few minutes it needs to become what it is. When the loaf is
gone, the rack is still warm.

## Why this one

Before building, the three strongest real competitor texts were dissected
(see `TOP3-ANALYSIS.md` in the prep kit): "A lamp left on" (843c),
"A Quiet Room" (802c), and dikaci's entry (569c). All three narrate their own
sincerity ("doesn't want anything", "asks for nothing", "I wrote this one
slowly") — and all three lean on the same saturated lamp / tea / quiet-room
imagery. This entry does the opposite: it lets a concrete thing work without
claiming anything about itself, in a fresh image (bread cooling), with one
bridging line — "You read like that kitchen." — and a closing warmth that
lingers after the last line.

Ten candidates were pre-tested head-to-head against the real baselines with
the competition's judge model (GLM-5.3-flash). "The loaf cooling" swept all
three baselines (+0.60 each, +1.80 total) and co-led the tiebreak (+0.20).

## Run

```sh
node main.ts   # writes /output/entry.txt (887 characters)
```

`main.ts` validates the text (1–1000 Unicode code points, not blank) before
writing, and is fully deterministic — two runs produce byte-identical output.

## Layout

```
main.ts   entry program (writes /output/entry.txt)
LICENSE   MIT
README.md this file
```
