# Prompt: Generate a Custom Dataset

Use this when you need fresh data to practice on (no PII, fully synthetic).

---

Use `02_datasets/synthetic_generator.ipynb` as a template and the Tutor Mode rules in `AGENTS.md`. Create a synthetic dataset for me.

- **Domain:** <e.g. "ecommerce orders" | "loan applications" | "tweets" | "sensor readings">
- **Rows:** <e.g. 1000>
- **Columns / schema:** <list of column names + types + value ranges or categories>
- **Special properties:** <e.g. "10% missing in column X" | "include outliers" | "add a time series spanning 2020-2024" | "include duplicates">
- **Output path:** `02_datasets/<descriptive_name>.csv`
- Also save the generator code as `02_datasets/<descriptive_name>_generator.py` so I can re-run it.

After saving:
1. Print `df.head()`, `df.dtypes`, `df.describe()`, and missing-value counts.
2. Tell me 3-5 interesting practice problems I could solve with this dataset (don't write them out as full problems — just one-liners).
