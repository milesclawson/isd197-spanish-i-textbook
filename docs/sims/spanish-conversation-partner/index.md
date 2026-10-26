---
title: "Spanish Conversation Partner"
description: "Practice speaking or typing Spanish with an AI partner tuned to ACTFL Novice Mid (Semester 1) and Novice High (Semester 2)."
status: built
---

# Spanish Conversation Partner

<iframe src="main.html" width="100%" height="640px" allow="microphone" scrolling="no"></iframe>

## How to Use It

1. Pick your semester, then pick a scenario.
2. Press 🎤 and speak Spanish, or type. Use **Help me start** if you're stuck and **What did they say?** for an English check.
3. Press **Finish** to get a Can-Do check, a strength, and a next step. **Save** downloads your conversation to turn in.

Speech input works best in Chrome or Edge on a laptop or Chromebook. Please don't share your real last name, address, phone number, or school. Invent answers if you like.

## ACTFL Levels Behind Each Semester

| | Semester 1 (1A) | Semester 2 (1B) |
|---|---|---|
| Target | Novice Low to Novice Mid | Novice Mid to Novice High |
| Partner speaks | 3-7 word sentences, one easy question at a time | 5-10 word sentences, mixes in open questions |
| You are expected to | Use words, phrases, and memorized sentences | String sentences together and ask your own questions |
| Extras | Choices and sentence starters | One small surprise per conversation (a complication) |

## For Teachers

- Vocabulary and grammar for each scenario come from the unit pages and live in `worker/scenarios.mjs`. Edit that file, then run `node build.mjs`.
- The AI runs through a small proxy so no API key is in the page. See `worker/README.md`.
- Speech input uses the browser's built-in speech recognition, which in Chrome sends audio to Google. Check that this fits your district's student-privacy rules before using it.

**Used in:** [Spanish 1A](../../spanish-1a/index.md) and [Spanish 1B](../../spanish-1b/index.md)

**Status:** Built -- awaiting instructor review.
