# Data Science Problem Bank

Maps to the **Data Scientist track** in `09_roadmaps/data_scientist.md`. Problems emphasize *understanding what results mean*, not just running `model.fit()`.

**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).

**Datasets:**
- Pandas/EDA work uses `02_datasets/extended_income_job_country_100_rows.csv`
- ML work uses scikit-learn built-ins (`load_iris`, `make_classification`, `load_diabetes`) because the default file is too small to train on
- **Bring your own:** this track uses the guided dataset intake — see `03_prompts/upload_dataset.md`

---

## Topic → File Map

| # | Topic | File | Status |
|---|---|---|---|
| 1 | NumPy foundations | `numpy_foundations.md` | ✅ built |
| 2 | Pandas for analysis | `../pandas/` (existing) + `pandas_analysis.md` | partial |
| 3 | Statistics fundamentals | `statistics_fundamentals.md` | generated on demand |
| 4 | Exploratory data analysis | `eda.md` | generated on demand |
| 5 | Data visualization | `data_visualization.md` | generated on demand |
| 6 | Feature engineering | `feature_engineering.md` | generated on demand |
| 7 | Supervised learning | `supervised_learning.md` | ✅ built |
| 8 | Model evaluation | `model_evaluation.md` | generated on demand |
| 9 | Cross-validation + tuning | `cross_validation_tuning.md` | generated on demand |
| 10 | Imbalanced datasets | `imbalanced_datasets.md` | generated on demand |
| 11 | Unsupervised learning | `unsupervised_learning.md` | generated on demand |
| 12 | Scikit-learn pipelines | `sklearn_pipelines.md` | generated on demand |

**"Generated on demand"** means: the tutor creates problems for that topic when you reach it, following the roadmap spec and the Problem Output Format in `AGENTS.md`. The two ✅ files set the format and the depth to match.

To request one: *"Generate Data Science problems for <topic> from `09_roadmaps/data_scientist.md`."*
