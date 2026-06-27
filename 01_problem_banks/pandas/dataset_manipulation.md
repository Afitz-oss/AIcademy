Problem Set
Get the Index and Retrieve Data:

Using the dataset you created (income_job_country_data.csv), find the index of the first instance of the job title "Software Engineer" and print the average annual income for this entry.
Dictionary Creation and Key-Value Access:

Create a dictionary called job_incomes that maps each unique job title to its average income using data from the dataset.
Print all job titles (keys) in job_incomes.
Retrieve and print the average income for the job title "Teacher."
Updating and Adding Entries in a Dictionary:

Add a new entry for the job "Artist" in job_incomes with an average income of $50,000.
Print the dictionary to verify the addition.
Update the income of "Teacher" to $60,000 and print the dictionary again.
Nested Dictionaries for Country Data:

Create a nested dictionary called country_data where each key is a country and each value is another dictionary containing:
"Jobs" as a list of job titles for that country.
"Average Income" as a list of corresponding average incomes for each job.
Print the jobs and average income data for "Germany."
Pandas DataFrame Creation from a Dictionary:

Convert the country_data dictionary into a DataFrame with columns for Country, Job, and Average Income.
Print the DataFrame.
Filtering Data with Pandas:

Load your income_job_country_data.csv into a DataFrame.
Print out the subset of rows where the average income is above $90,000.
Labeling Rows in DataFrames:

Load the dataset, and set the job titles as the index.
Print out only the data for "Data Scientist."
Selecting Columns in DataFrames:

Print out only the "Country" and "Industry" columns as a new DataFrame.
Slicing DataFrames by Rows:

Print the first 5 rows of the dataset.
Print rows from index 10 to 15.
Accessing Specific Data Using loc:

Using .loc, print out the entire row for the "Software Engineer" in "Canada".
Print out the "Average Annual Income (USD)" and "Industry" for the job "Banker" in "Germany".
Conditional Data Selection in DataFrames:

Filter the DataFrame to show only jobs in the "Finance" industry.
Print the average income and country for all entries in the "Technology" industry with an income above $80,000.\

Additional Problem Set
Identifying Missing Values:

Load income_job_country_data.csv into a DataFrame and check for any missing values in each column. Print out the columns with missing values and the number of missing entries in each.
Dropping Rows with Missing Values:

Drop any rows in the dataset that have missing values and print the shape of the DataFrame before and after dropping these rows.
Filling Missing Values with Specific Values:

Suppose some entries in the "Income Bracket" column are missing. Fill in any missing values in "Income Bracket" with the label "Unknown."
Print out the unique values in the "Income Bracket" column to verify that the missing values have been filled.
Filling Missing Values with Median or Mean:

If there are missing values in the "Average Annual Income (USD)" column, replace them with the median income of the column.
Do the same for the "Median Annual Income (USD)" column, but use the mean instead.
Print out the DataFrame to confirm these changes.
Filling Categorical Data with Mode:

If there are any missing values in the "Industry" column, replace them with the most common industry (mode).
Print out the counts of each industry to confirm the most common industry has been used.
Replacing Outliers with Median Values:

Identify any outliers in the "Average Annual Income (USD)" column. For this exercise, consider values below the 5th percentile or above the 95th percentile as outliers.
Replace these outliers with the median income of the column and print the modified DataFrame.
Creating an Indicator Column for Missing Values:

Create a new column called "Income Missing" that has a value of True if "Average Annual Income (USD)" was originally missing and False otherwise.
Fill in missing values in "Average Annual Income (USD)" using the mean of the column, and print out the DataFrame.
Handling Missing Values in Multiple Columns:

For each job title, fill in any missing values in "Median Annual Income (USD)" with the mean income for that specific job across all countries.
Print out the updated DataFrame.
Standardizing Income Bracket Labels:

Check for any inconsistencies in the "Income Bracket" column (e.g., "High" vs. "high").
Standardize all values in "Income Bracket" to have consistent capitalization, such as "High," "Medium," and "Low," and print the unique values to verify.
Cleaning Up Strings with Whitespace or Extra Characters:

Ensure there are no leading or trailing whitespaces in the "Country" and "Job Title" columns. Strip any extra whitespace if present.
Print out the unique values for "Country" and "Job Title" to confirm the cleaning.

