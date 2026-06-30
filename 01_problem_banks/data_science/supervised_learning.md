# Data Science — Supervised Learning

**Knowledgebase reference:** `00_knowledgebase/data_science.ipynb` → DS-5 (What is ML?) and DS-6 (Model Evaluation)
**Roadmap:** `09_roadmaps/data_scientist.md` → step 7
**Setup required:** `pip install scikit-learn numpy pandas`
**Prerequisite:** feature engineering + model evaluation basics

> **Why this matters:** Supervised learning — predicting a labeled target from features — is the core of applied ML. Classification (categories) and regression (numbers) cover the large majority of real ML problems.

> **Data note:** The default 100-row dataset is too small for reliable ML. These problems use scikit-learn built-in datasets. You can substitute your own via the guided intake in `03_prompts/upload_dataset.md`.

---

## 1. Your First Classifier

**Difficulty:** Beginner
**Stage:** Data Science
**Pattern / topic:** Train/test split, fit/predict, accuracy
**Goal track relevance:** The end-to-end ML workflow in miniature — split, train, predict, score. Every supervised project follows this shape.
**Dataset:** sklearn `load_iris`

### Goal
Load the iris dataset, split it into train/test (80/20), train a `LogisticRegression` (or `KNeighborsClassifier`), predict on the test set, and report accuracy.

### Constraints / I/O
- Input: the iris dataset
- Output: a trained model + test accuracy
- Edge cases to consider: why we must not evaluate on training data

### Hints
<details><summary>Hint 1</summary>`from sklearn.model_selection import train_test_split` with `test_size=0.2, random_state=42`.</details>
<details><summary>Hint 2</summary>`model.fit(X_train, y_train)`, `model.predict(X_test)`, `accuracy_score(y_test, preds)`.</details>

### Acceptance criteria
- [ ] Proper train/test split
- [ ] Model trained only on training data
- [ ] Test accuracy reported
- [ ] Learner can explain why evaluating on training data is misleading

---

## 2. Regression with Error Metrics

**Difficulty:** Intermediate
**Stage:** Data Science
**Pattern / topic:** Linear regression, MAE/RMSE/R²
**Goal track relevance:** Predicting a continuous value and measuring error correctly — different metrics tell different stories.
**Dataset:** sklearn `load_diabetes`

### Goal
Train a `LinearRegression` on the diabetes dataset. Report MAE, RMSE, and R² on the test set. Explain in one sentence what each metric tells you and which you'd report to a non-technical stakeholder.

### Constraints / I/O
- Input: the diabetes dataset
- Output: MAE, RMSE, R² + interpretation
- Edge cases to consider: outliers' effect on RMSE vs. MAE

### Hints
<details><summary>Hint 1</summary>`mean_absolute_error`, `mean_squared_error` (take the sqrt for RMSE), `r2_score`.</details>
<details><summary>Hint 2</summary>RMSE punishes large errors more than MAE because it squares them.</details>

### Acceptance criteria
- [ ] All three metrics computed correctly
- [ ] Correct interpretation of each
- [ ] Reasoned choice of stakeholder-facing metric
- [ ] Notes how outliers affect RMSE vs. MAE

---

## 3. Compare Models + Feature Importance

**Difficulty:** Advanced
**Stage:** Data Science
**Pattern / topic:** Model comparison, overfitting, feature importance
**Goal track relevance:** Real work means choosing between models and explaining *why* one wins — and which features drive predictions.
**Dataset:** sklearn `make_classification` (or `load_breast_cancer`)

### Goal
Train three classifiers (e.g. LogisticRegression, RandomForest, GradientBoosting) on the same data. Compare train vs. test accuracy for each to detect overfitting, pick the best generalizer, and report the top 5 most important features from the tree-based model.

### Constraints / I/O
- Input: a classification dataset
- Output: a comparison table (train/test per model) + top features + a recommendation
- Edge cases to consider: a model with high train but low test accuracy (overfit)

### Hints
<details><summary>Hint 1</summary>A large gap between train and test accuracy signals overfitting — prefer the model that generalizes, not the one with the highest train score.</details>
<details><summary>Hint 2</summary>`model.feature_importances_` on the tree-based model; sort descending.</details>

### Acceptance criteria
- [ ] Three models compared on train AND test
- [ ] Overfitting identified via the train/test gap
- [ ] Top 5 features reported
- [ ] A justified model recommendation
