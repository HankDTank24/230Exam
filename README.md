# MAE 230 Midterm Study Guide

A multiple-choice study site for MAE 230 (Neural-Machine Interfaces and Assisted Human Movement).

- **9 sample exam questions** from the course's Sample Exam Questions handout
- **101 new practice questions** written from the lecture slides (brain anatomy, stroke, spinal cord & SCI, spinal tracts & reflexes, sensory tracts & receptors, neural control of walking, movement mechanics)
- After every answer, you get an explanation of why the right answer is right and why your choice was wrong. You can also open notes on every other option.
- You can filter by topic, take the sample questions only or the new ones only, or retry just the ones you missed. Your progress is saved in your browser.

## Files

| File | What it is |
|---|---|
| `index.html` | The website |
| `questions.js` | The question bank. Edit this file to add or fix questions. |
| `images/` | Diagrams used by some questions |

## Run it

- **On GitHub Pages:** go to Settings → Pages → Deploy from a branch → `main` / `(root)`.
- **Locally:** double-click `index.html`. No server or install is needed.

## Add a question

Copy any entry in `questions.js` and change the fields:

```js
{
  id: "P-NEW1", src: "practice", topic: "spinal",
  q: "Question text…",
  opts: ["choice a", "choice b", "choice c", "choice d"],
  ans: 2,                       // index of the correct choice (0 = a)
  exp: "Why the correct answer is right.",
  why: ["why a is wrong", "why b is wrong", null, "why d is wrong"]   // null for the correct one
},
```

Topic keys: `intro`, `brain`, `stroke`, `spinal`, `tracts`, `sensory`, `walking`, `mech`.
