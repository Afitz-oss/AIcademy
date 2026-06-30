# Python Fundamentals — Decorators

**Knowledgebase reference:** `00_knowledgebase/python_basics.ipynb` → Stage 3 (functions — decorators wrap functions); concept is Stage 6 in `09_roadmaps/python_first_principles.md`. For AI use cases see `@torch.no_grad()` and middleware patterns in agents.
**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).

---

```python
def shout(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()    # adds shouting behavior
    return wrapper

@shout
def greet(name):
    return f"hello {name}"

greet("alice")  # returns "HELLO ALICE"
```