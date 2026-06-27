# Tests

Pytest tests for canonical solutions in `../05_solutions/`.

## Convention

Mirror the solutions tree:

```
05_solutions/python_fundamentals/medium_solutions.py
06_tests/python_fundamentals/test_medium_solutions.py
```

Each test file imports the solution module and exercises each function:

```python
from solutions.python_fundamentals.medium_solutions import pattern_count

def test_pattern_count_basic():
    assert pattern_count("ab", "ababababab") == 5

def test_pattern_count_no_match():
    assert pattern_count("xy", "abc") == 0

def test_pattern_count_empty_text():
    assert pattern_count("ab", "") == 0
```

## Running

```bash
pip install -r ../requirements.txt
pytest 06_tests/ -v
```

## Note

You may need to add an `__init__.py` and configure `pythonpath` in a `pytest.ini` or `pyproject.toml` so the `05_solutions/` directory is importable. Or just run `pytest` from the repo root with `PYTHONPATH=05_solutions`.
