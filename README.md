# 70 jours d'anglais

A self-directed, 70-day English course built for a French speaker learning to speak naturally — for real life, not for an exam. Companion app to *70 jours de français*, same architecture, mirrored direction: French is the explanatory/native language here, English is the language being practiced.

No backend, no build step, no account. Everything is static HTML/CSS/JS and stored locally in the browser (`localStorage`).



---

## Quick start

Open `index.html` in a browser, or serve the folder with GitHub Pages (no configuration needed — it's a plain static site).

```
index.html
style.css
script.js
data.js
```

Push all four files to the same folder in your repo. That's it.

---

## How the course is structured

**Direction:** English is the target language (spoken aloud, primary in example sentences, pronounced by the browser's English voice). French is the language of instruction — missions, grammar notes, and the "Did you know?" callouts all run in French, since that's what makes the *instructions* clear to a French-speaking beginner. This is the mirror image of the French app, where French was the target and English was explanatory.

**70 days, 8 blocks:**

| Block | Days | Focus |
|---|---|---|
| 1 | 1–10 | Present tense foundations: to be, to have / have got, can, want, do/does (questions & negatives), there is/are |
| 2 | 11–20 | Present mastery + present continuous, high-frequency conversational chunks |
| 3 | 21–35 | Past simple — regular & irregular verbs, was/were, past questions/negatives |
| 4 | 36–50 | going to (near future), imperative, just + past |
| 5 | 51–55 | Softening phrases: I would like, could you, it would be |
| 6 | 56–57 | Mid-course review — no new grammar, integration |
| 7 | 58–68 | Past continuous, used to, pronunciation focus (th, h, vowel length, connected speech) |
| 8 | 69–70 | Final capstone — Pierrot & Hettia's story as a comprehension + fluency test |

Each day includes: a grammar focus, key vocabulary with audio, example sentences (English primary, French translation), sometimes a "Did you know?" grammar insight, sometimes a **"Erreur fréquente d'un francophone"** callout (a common French→English transfer mistake, e.g. *I have 30 years* → *I am 30 years old*), a short session checklist (review / listen & repeat / speak / read or write), and a daily spoken "mission."

**Current build status:** Days 1–10 (Block 1) are fully written. Days 11–70 currently fall back to generic block-level content (the app won't break — `DAY_DETAILS[day] || blockFallback` handles it gracefully — but the day-by-day detail for Blocks 2–8 still needs to be written).

---

## The story capstone (Days 69–70)

Days 69–70 are reserved for a custom story — Pierrot and Hettia's own story, from her arrival in France to their engagement in Thailand and wedding in Greece — used the same way the French app uses its "Élise" story: as a comprehension and fluency test *after* the grammar is done, not a teaching vehicle during it.

To wire the story in:

1. Drop your chapter HTML files (e.g. `chapter-1.html`, `chapter-2.html`, ...) into the repo, alongside `index.html`.
2. In `data.js`, give Day 69 (or wherever you want the reading day) a `chapters` array:

```js
69: {
  ...
  chapters: [
    { n: 1, file: "chapter-1.html", title: "..." },
    { n: 2, file: "chapter-2.html", title: "..." }
  ]
}
```

Any day with a non-empty `chapters` array automatically becomes a "story day": the normal session checklist disappears, the notes box switches to asking for a story summary instead of free notes, and the day's clickable chapter links render above the mission.

---

## Data model (`data.js`)

Two top-level objects:

- **`BLOCKS`** — the 8-block grammar arc (day ranges, titles, block-level color, fallback prompts). Defines `getTotalDays()` implicitly via the last block's range.
- **`DAY_DETAILS`** — per-day content, keyed by day number. Fields:

| Field | Purpose |
|---|---|
| `grammar` | Grammar focus for the day, in French |
| `vocab` / `vocabWords` | Vocabulary label + word list |
| `vocabExamples` | Array of `[English, French]` sentence pairs |
| `didYouNotice` | Optional grammar/culture insight, in French |
| `mistake` | Optional `{ wrong, right, note }` — a common French-speaker mistake |
| `tables` | Conjugation tables, pulled from `CONJUGATIONS` |
| `prompt` | The day's spoken mission, in French |
| `chapters` | Optional array marking this as a story day (see above) |

`CONJUGATIONS` holds reusable verb tables (e.g. `toBePresent`, `canModal`) referenced from `tables` across multiple days.

---

## Notes on shared code with the French app

`script.js` and `style.css` are adapted from the French app's files with the language direction flipped:

- TTS voice selection uses `en-GB`/`en-US` instead of `fr-FR`
- `localStorage` keys are prefixed `eft_` instead of `fft_` — deliberately different, so the two apps don't collide if ever hosted under the same GitHub Pages origin
- Mission/notice labels render in French ("Mission du jour", "Le sais-tu ?") instead of English
- A new `.mistake-box` style (red/coral accent) distinguishes the "common mistake" callout from the gold "Did you know?" box

If you update `style.css` or `script.js` on the French app, these won't sync automatically — they're independent copies now, not shared files.
