# Data Scientist Track — Roadmap

> **Prerequisite:** Complete Stages 0–4 of `python_first_principles.md` (through intro pandas). Stages 5–6 help but aren't strictly required to start.

This track takes you from "I can load a CSV" to "I can build, evaluate, and defend a machine learning model." The emphasis is on *understanding what your results mean*, not just running `model.fit()`.

**Guiding principle:** statistics before sklearn. Anyone can call a model. A data scientist knows whether the result is meaningful, whether the model is overfit, and whether the metric even matters for the problem.

---

## The Sequence

Each numbered item maps to a problem bank in `01_problem_banks/data_science/`.

### 1. NumPy Foundations
**File:** `numpy_foundations.md`
- Arrays, vectorized operations, broadcasting
- Bridging from pandas Series to numpy arrays
- **Why:** pandas, scikit-learn, and PyTorch all sit on NumPy. You can't go deep without it.

### 2. Pandas for Analysis
**File:** `pandas_analysis.md`
- `groupby`, `agg`, `merge`, `pivot_table`
- Uses `02_datasets/extended_income_job_country_100_rows.csv`
- **Why:** real analysis is reshaping and aggregating data, not just filtering it.

### 3. Statistics Fundamentals
**File:** `statistics_fundamentals.md`
- Distributions, mean/median/variance, probability basics
- Hypothesis testing, p-values, confidence intervals
- **Why:** without this you can run a model but can't say if its results are real.

### 4. Exploratory Data Analysis (EDA)
**File:** `eda.md`
- Summary statistics, finding patterns, detecting anomalies
- Correlation analysis
- **Why:** every modeling project starts with understanding the data deeply.

### 5. Data Visualization
**File:** `data_visualization.md`
- matplotlib + seaborn: distributions, correlation heatmaps, feature importance
- **Why:** data scientists who can't visualize make bad decisions and can't communicate.

### 6. Feature Engineering
**File:** `feature_engineering.md`
- Encoding categoricals, scaling, imputation, derived features
- **Why:** often the highest-leverage part of an ML project — better features beat better models.

### 7. Supervised Learning
**File:** `supervised_learning.md`
- Classification + regression
- Uses sklearn built-ins (iris, diabetes) for adequate data size; pandas CSV for feature work
- **Why:** the core of applied ML — predicting a labeled target.

### 8. Model Evaluation
**File:** `model_evaluation.md`
- Train/test split, accuracy, precision/recall, F1, confusion matrix
- Overfitting vs. underfitting, the bias-variance tradeoff
- **Why:** a model you can't evaluate is a model you can't trust.

### 9. Cross-Validation + Hyperparameter Tuning
**File:** `cross_validation_tuning.md`
- k-fold cross-validation, GridSearchCV, learning curves
- **Why:** prevents the "95% accuracy that's actually overfit" trap.

### 10. Imbalanced Datasets
**File:** `imbalanced_datasets.md`
- Class imbalance, SMOTE, class weights, choosing the right metric
- **Why:** real-world targets (fraud, churn, disease) are almost always imbalanced.

### 11. Unsupervised Learning
**File:** `unsupervised_learning.md`
- K-means clustering, PCA dimensionality reduction
- **Why:** finding structure in unlabeled data — segmentation, compression, discovery.

### 12. Scikit-learn Pipelines
**File:** `sklearn_pipelines.md`
- `Pipeline`, `ColumnTransformer`, avoiding data leakage
- **Why:** the professional way to chain preprocessing + modeling without subtle bugs.

---

## Bring Your Own Dataset

This track uses the **guided** dataset intake (`03_prompts/upload_dataset.md`). Before modeling on your own data, the tutor walks you through inspecting it — shape, nulls, dtypes, target column, class balance — because dataset inspection is itself a core data-science skill.

For ML problems where the default 100-row dataset is too small, the tutor uses scikit-learn built-in datasets (`load_iris`, `make_classification`, `load_diabetes`).

---

## Difficulty Spread

Every problem bank contains Beginner / Intermediate / Advanced problems (see the Difficulty Standard in `AGENTS.md`).
