# Pandas — Advanced Data Science

**Knowledgebase reference:** `00_knowledgebase/pandas_python_reference.ipynb` → sections 1.5 (Aggregation & Grouping), 1.7 (Data Transformation), 1.11 (Rolling Windows), 1.12 (Multi-Index)
**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv` unless specified otherwise.

---

## Data Wrangling and Cleaning
Standardize Column Names:
Write a function that takes any DataFrame and converts its column names to snake_case (e.g., Average Annual Income (USD) becomes average_annual_income_usd).

Missing Value Imputation:
Simulate missing values in your DataFrame (e.g., set a few cells to NaN) and write a function to impute numeric columns using the median value and categorical columns using the mode.

Data Type Conversion:
The "Employment Rate (%)" is currently a percentage. Write a function to convert it into a decimal (e.g., 94.5% becomes 0.945).

Derived Metrics – Income Difference:
Create a new column income_gap that represents the difference between the average and median annual incomes.

Outlier Detection and Removal:
Implement a function that uses the IQR method to detect and remove outliers from the “Average Annual Income (USD)” column.

Data Transformation and Aggregation
Group and Aggregate:
Group the DataFrame by Country and compute the mean and standard deviation of Average Annual Income (USD) for each country.

Pivot Table Creation:
Create a pivot table that shows the mean Employment Rate (%) for each combination of Country and Industry.

Sorting and Ranking:
Sort the DataFrame first by Country and then in descending order of Average Annual Income (USD). Additionally, add a rank column that ranks the jobs within each country based on income.

Filtering Rows:
Write a function that filters and returns rows where the Income Bracket is "High" and the Employment Rate (%) is above 90% (after converting percentages to decimals).

Categorical Encoding:
Apply one-hot encoding to categorical columns such as Country, Job Title, Income Bracket, and Industry.

Performance and Optimization
Vectorization vs. Looping:
Generate a large synthetic numerical array (or DataFrame column) and compare the performance of summing its elements using a Python loop versus a vectorized NumPy operation. Report the time differences.

Memory Optimization:
Write a function that inspects a DataFrame’s memory usage and attempts to reduce it by converting columns to more appropriate dtypes (for example, using category for low-cardinality text columns).

Efficient Merging:
Given two DataFrames (one with job data and another with regional economic indicators), write a function to merge them efficiently on a common key, and discuss strategies to optimize the join.

Custom Apply Functions:
Instead of using built-in methods, write a custom function that applies a transformation (e.g., scaling or normalization) to each row of the DataFrame using DataFrame.apply and compare it with vectorized operations.

Parallel Processing:
Implement a simple parallelized computation (using libraries like multiprocessing or joblib) on a DataFrame column to compute a custom metric (e.g., a complex transformation of income values).

Exploratory Data Analysis (EDA) and Visualization
Correlation Analysis:
Compute the correlation matrix for all numeric columns in your DataFrame and visualize it using a heatmap (e.g., with Matplotlib or Seaborn).

Distribution Plotting:
Plot histograms or kernel density estimates (KDEs) for Average Annual Income (USD) and Median Annual Income (USD) to understand their distributions.

Boxplots for Outlier Detection:
Create boxplots for the numeric income columns to visually inspect for outliers and compare these findings with your earlier outlier detection method.

Multi-dimensional Scatter Plot:
Using a plotting library of your choice, create a scatter plot that visualizes Average Annual Income (USD) vs. Employment Rate (%), color-coded by Income Bracket.

Time Series (Bonus if applicable):
If you add a time dimension (e.g., a year column) to your DataFrame, create a line plot showing how Average Annual Income (USD) changes over time for each Country.

Modeling and Pipeline Creation
Linear Regression Model:
Build a simple linear regression model to predict Median Annual Income (USD) using Average Annual Income (USD) as the predictor. Evaluate the model using an appropriate metric (e.g., RMSE).

Classification Task:
Develop a classification model to predict the Income Bracket (High vs. Medium) based on the available numerical features. Preprocess the data as needed and report the classification accuracy.

Train/Test Split and Cross-Validation:
Write a function that splits your data into training and test sets, and then perform k-fold cross-validation on your model to assess its performance more robustly.

Hyperparameter Tuning:
Implement a grid search to optimize hyperparameters of one of your models (e.g., a decision tree or random forest classifier) using scikit-learn’s GridSearchCV.

Custom Transformer for Pipelines:
Create a custom transformer (by subclassing sklearn.base.TransformerMixin) that applies a specific transformation to your data (e.g., log transformation of income columns) and integrate it into a scikit-learn pipeline.

Productionizing and Experimentation
Model Serialization:
After training a model, write code to serialize (save) your model and the preprocessing pipeline using pickle or joblib, and then write a function to load and use the saved model for new predictions.

Feature Scaling:
Implement a feature scaling function (using standardization or min-max scaling) for all numeric columns, and compare the effect on model performance.

Experiment Logging:
Integrate an experiment tracking tool (such as MLflow or a simple logging mechanism) to log parameters, metrics, and artifacts from your model training process.

Reusable Functions Library:
Organize your code into a Python module or package (e.g., data_utils) that includes functions for cleaning, transformation, visualization, and modeling. Write unit tests for key functions using a testing framework like pytest.

End-to-End Data Pipeline:
*Design and implement an end-to-end data pipeline that:

Reads raw data (e.g., from a CSV),
Cleans and preprocesses it,
Performs exploratory analysis,
Trains a machine learning model, and
Exports the model and summary reports.
Use modular coding practices to ensure each step is testable and reusable.*