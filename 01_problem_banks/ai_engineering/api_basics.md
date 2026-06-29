# AI Engineering — API Basics Problem Bank

**Who this is for:** Learners on the AI Engineer track who've completed Stage 4 (imports, file I/O, requests).
**Knowledgebase reference:** `00_knowledgebase/ai_engineering.ipynb` → AE-2
**Setup required:** OpenAI API key in `.env`

---

## 1. Your First API Call

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** OpenAI API, environment variables, basic completion
**Goal track relevance:** Every AI product starts with an API call. This is the "Hello World" of AI engineering. Once you can reliably make a call and parse the response, you can build anything on top of it.
**Dataset:** none

### Goal
Write a Python script that:
1. Loads your OpenAI API key from the `.env` file using `os.environ.get()`
2. Makes a chat completion request asking: "Explain what a Python list is in exactly one sentence."
3. Prints only the text of the response (not the full API response object)
4. Also prints the number of tokens used (`usage.total_tokens`)

### Constraints / I/O
- Input: None (hardcoded question)
- Output: The AI's response text + token count printed to console
- Edge cases to consider: What happens if the API key is missing or wrong? Handle the error gracefully.

### Hints
<details><summary>Hint 1</summary>Load the key with `os.environ.get("OPENAI_API_KEY")`. If it returns `None`, your `.env` file isn't set up correctly.</details>
<details><summary>Hint 2</summary>The response text lives at `response.choices[0].message.content`. Token count is at `response.usage.total_tokens`.</details>

### Acceptance criteria
- [ ] API key loaded from environment, not hardcoded
- [ ] Response text extracted and printed (not the full response object)
- [ ] Token count printed
- [ ] Error handled if API key is missing

---

## 2. Multi-Turn Conversation

**Difficulty:** Beginner
**Stage:** AI Engineering
**Pattern / topic:** Conversation history, message roles, stateful API usage
**Goal track relevance:** Every chatbot, coding assistant, and AI tutor works the same way: maintain a list of messages and send the full history with every API call. Understanding this is fundamental to building any conversational AI.
**Dataset:** none

### Goal
Build a simple command-line chatbot that maintains conversation history. The user types messages, the AI responds, and the conversation continues until the user types `"quit"`.

Requirements:
- Start with a system message that sets the AI's persona as a friendly Python tutor
- Keep the full message history and send it with every request
- After each AI response, print how many total messages are in the history
- When the user types `"quit"`, print a goodbye message and exit

### Constraints / I/O
- Input: User types in terminal
- Output: AI responses in terminal + message count
- Edge cases to consider: What happens to context as the conversation gets very long? (Hint: token limits)

### Hints
<details><summary>Hint 1</summary>Keep a `messages` list. After each user input, append `{"role": "user", "content": user_input}`. After each AI response, append `{"role": "assistant", "content": ai_reply}`.</details>
<details><summary>Hint 2</summary>Use a `while True:` loop. Check `if user_input.lower() == "quit": break`.</details>

### Acceptance criteria
- [ ] System message establishes Python tutor persona
- [ ] Conversation history maintained across turns
- [ ] AI remembers what was said earlier in the conversation (test by saying "what was my first message?")
- [ ] Clean exit on "quit"

---

## 3. AI-Powered Data Extractor

**Difficulty:** Intermediate
**Stage:** AI Engineering
**Pattern / topic:** Structured output, JSON mode, real-world data processing
**Goal track relevance:** Extracting structured data from unstructured text is one of the most valuable things you can do with an LLM in production — parsing resumes, emails, customer feedback, contracts.
**Dataset:** none

### Goal
Write a function `extract_job_info(job_posting_text)` that uses the OpenAI API to extract structured information from a job posting and returns a Python dictionary with these keys:
- `job_title` (str)
- `company` (str or None)
- `salary_min` (int or None)
- `salary_max` (int or None)
- `is_remote` (bool)
- `required_skills` (list of str)
- `years_experience` (int or None)

Test it on at least 3 different job posting texts (copy from a real job board).

### Constraints / I/O
- Input: A string containing a job posting
- Output: A Python dictionary with the keys above
- Edge cases to consider: What if salary isn't mentioned? What if it's remote-optional? What if skills aren't listed?

### Hints
<details><summary>Hint 1</summary>Use `response_format={"type": "json_object"}` to force JSON output. Tell the model exactly what keys to include in your prompt.</details>
<details><summary>Hint 2</summary>Use `json.loads(response.choices[0].message.content)` to parse the JSON string into a Python dict.</details>

### Acceptance criteria
- [ ] Returns a Python dict (not a string)
- [ ] All required keys present, with `None` for missing info
- [ ] `is_remote` is a boolean, not a string
- [ ] `required_skills` is a list, not a string
- [ ] Tested on 3 different job postings
