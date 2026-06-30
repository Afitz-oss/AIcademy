# Pandas — Iteration and Aggregation

**Knowledgebase reference:** `00_knowledgebase/pandas_python_reference.ipynb` → section 1.5 (Aggregation & Grouping); prefer vectorized ops, fall back to `iterrows`/`apply` only when needed
**Difficulty standard:** every problem is Beginner / Intermediate / Advanced (see `AGENTS.md`).
**Dataset:** `02_datasets/extended_income_job_country_100_rows.csv` unless specified otherwise.

---

Category	Problem	Suggested Method
Row Iteration	Print each job title and its average income.	iterrows()
Row Iteration	For each row, print if the average income is greater than the median income.	iterrows() + if
Row Iteration	Print the country and employment rate for all jobs with 'Engineer' in the title.	iterrows() + 'Engineer' in
Column-wise	Normalize the 'Average Annual Income (USD)' column to a 0â€“1 scale.	vectorized / apply()
Column-wise	Convert the 'Employment Rate (%)' to a decimal and add as a new column.	df['Employment Rate'] / 100
Column-wise	Add a new column 'Income Ratio' = Average / Median.	vectorized
Filtering	Return all jobs in the 'Technology' industry with 'High' income bracket.	df[(...)]
Filtering	Filter rows where 'Employment Rate (%)' is below 90%.	df[df['Employment Rate (%)'] < 90]
Filtering	Find all jobs with 'Scientist' in the title and income above 95,000.	df[(...) & (...)]
Aggregation	Print average income per industry.	groupby('Industry').mean()
Aggregation	Find median employment rate per country.	groupby('Country')['Employment Rate (%)'].median()
Aggregation	Count how many jobs fall under each income bracket.	value_counts() or groupby
Mapping	Add a column 'Income Difference' = average - median.	df['new'] = df['A'] - df['B']
Mapping	Add a boolean column 'Above Median' where average > median.	apply() or vectorized
Mapping	Create a column indicating whether the job title includes 'Engineer'.	df['Job Title'].str.contains()
Nested Loop	For each country, list all unique job titles.	groupby() + set()
Nested Loop	Print the number of high-paying jobs (avg > 100k) per industry.	groupby() + sum()
Nested Loop	List all industries with average employment rate above 92%.	groupby().mean() + filtering
Sorting	Return the top 5 highest-paying jobs.	sort_values().head()
Sorting	Return the 3 lowest median income roles in the dataset.	sort_values().head()
Sorting	Sort jobs by income difference descending.	df['diff'] = ...; sort_values('diff')
Filtering Return all jobs where the job title does not contain 'Assistant'. df[~df['Job Title'].str.contains('Assistant')]
Filtering Find all jobs with 'Developer' in the title or in the 'Technology' industry. df[(...) | (...)]
Filtering Return all jobs in the 'Healthcare' industry with 'Medium' income bracket. df[(...)]
Filtering Filter rows where 'Average Annual Income (USD)' is above 120,000. df[df['Average Annual Income (USD)'] > 120000]