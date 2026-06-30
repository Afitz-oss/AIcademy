# Python Fundamentals — Dictionary Counting Patterns

**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 2 (dictionaries — `.get()`, key membership, mutation patterns). Counting is the canonical hash-map skill before `collections.Counter`.
**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).

---

| Category                                 | Problem                                                                                     | Suggested Method                                                                                                                           |
| ---------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Dictionary Key Check**                 | `if word in word_dict`: Check if key exists and perform some operation (not initialization) | Example practice: Given a `word_dict`, iterate a list of words and print a message *only if* the word is already a key in the dictionary.  |
| **Dictionary Initialization / Counting** | `if word not in word_dict`: Check if key does *not* exist, initialize before processing     | Example practice: Given a `words_list`, count occurrences by initializing keys that don’t exist yet and then incrementing counts (`+= 1`). |
