# AI Engineering — Prompt Engineering Problem Bank

**Who this is for:** Learners who have completed Stages 0–4 and are on the AI Engineer track.
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-3
**Setup required:** OpenAI API key in `.env`

---

## 1. The Vague vs. Specific Prompt

**Difficulty:** easy
**Stage:** AI Engineering
**Pattern / topic:** Prompt specificity, output formatting
**Goal track relevance:** Every AI product you build will live or die on prompt quality. A vague prompt returns unpredictable, unusable output. A specific prompt returns structured, reliable output you can build on.
**Dataset:** none

### Goal
Write two prompts for the same task — one vague, one specific — and compare the outputs.

**Task:** Ask an AI to summarize a Python error message for a beginner.

Use this error as input:
```
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

Your specific prompt must require:
1. A plain-English explanation (no jargon) in 1 sentence
2. An example of what caused it (1 line of code)
3. An example of how to fix it (1 line of code)

### Constraints / I/O
- Input: Two prompts (vague and specific) passed to the OpenAI API
- Output: Two API responses — show both and explain what's better about the specific one
- Edge cases to consider: What if the model ignores your format? How would you enforce it?

### Hints
<details><summary>Hint 1</summary>Vague: "Explain this error: TypeError: unsupported operand type(s) for +: 'int' and 'str'"</details>
<details><summary>Hint 2</summary>Specific: "Explain the following Python error to a complete beginner. Format your response as exactly 3 items: 1) Plain English explanation in one sentence without jargon. 2) One line of Python code that would cause this error. 3) One line of Python code that fixes it. Error: ..."</details>

### Acceptance criteria
- [ ] Both prompts submitted to the API and responses captured
- [ ] Specific prompt produces output with all 3 required elements
- [ ] Written explanation of what makes the specific prompt better

---

## 2. Few-Shot Classifier

**Difficulty:** easy
**Stage:** AI Engineering
**Pattern / topic:** Few-shot prompting, classification
**Goal track relevance:** Few-shot prompting is how you get reliable classification from LLMs without fine-tuning a model. Used in content moderation, sentiment analysis, and data labeling pipelines.
**Dataset:** none

### Goal
Build a function `classify_sentiment(review_text)` that uses few-shot prompting to classify a product review as `"positive"`, `"negative"`, or `"neutral"`. The function should:
1. Include at least 3 examples in the prompt (one per class)
2. Return only the classification string — not the full model response
3. Handle the case where the model returns unexpected output

```python
classify_sentiment("Absolutely love this product, changed my life!")  # → "positive"
classify_sentiment("It's okay I guess. Nothing special.")              # → "neutral"
classify_sentiment("Broke after one day. Do not buy.")                # → "negative"
```

### Constraints / I/O
- Input: A string `review_text`
- Output: One of `"positive"`, `"negative"`, `"neutral"` (lowercase string)
- Edge cases to consider: What if the model returns `"Positive"` with a capital P? What if it returns a sentence instead of one word?

### Hints
<details><summary>Hint 1</summary>Structure your few-shot prompt as a pattern the model completes: "Review: [example]\nSentiment: [label]\n\nReview: [new review]\nSentiment:"</details>
<details><summary>Hint 2</summary>Use `.strip().lower()` on the response to normalize it. If the result isn't in your expected set, you can return `"unknown"` or retry.</details>

### Acceptance criteria
- [ ] Function uses few-shot examples in the prompt (at least 3)
- [ ] Returns only the classification string
- [ ] Normalizes output to lowercase
- [ ] Handles unexpected output gracefully (no crash)

---

## 3. System Prompt Engineering

**Difficulty:** medium
**Stage:** AI Engineering
**Pattern / topic:** System message design, persona, constraints
**Goal track relevance:** Every production AI product has a system prompt. Getting it right is the difference between a helpful assistant and a liability. This is one of the highest-leverage skills for an AI engineer.
**Dataset:** none

### Goal
Design a system prompt for an AI coding tutor with these requirements:
- Teaches only Python — politely declines other languages
- Never gives the full solution, only hints
- Uses the Socratic method: asks questions to guide the learner
- Adjusts complexity based on the user's self-reported level
- Always explains *why* before showing *how*

Then test it with 3 different user messages and show the responses demonstrate all 5 requirements.

**Test messages:**
1. "How do I sort a list in JavaScript?"
2. "I'm a beginner. Just tell me the answer to FizzBuzz."
3. "I'm intermediate level. I'm confused about why my recursive function never stops."

### Constraints / I/O
- Input: A system prompt (string) + 3 user messages
- Output: 3 API responses that demonstrate all requirements
- Edge cases to consider: Does the AI stick to the constraints under pressure ("just tell me the answer")?

### Hints
<details><summary>Hint 1</summary>Be explicit in the system prompt: "You MUST NOT provide complete solutions. Instead, ask one guiding question." Explicit instructions beat implicit ones.</details>
<details><summary>Hint 2</summary>Test edge cases deliberately — if someone begs for the answer, a well-designed system prompt should hold the line.</details>

### Acceptance criteria
- [ ] Message 1 response declines JavaScript and redirects to Python
- [ ] Message 2 response gives a hint/question, not a solution
- [ ] Message 3 response engages with recursion at intermediate level
- [ ] System prompt is under 500 tokens (concise matters for cost)
