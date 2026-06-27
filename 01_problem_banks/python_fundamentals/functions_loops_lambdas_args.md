Create similar problems like this # Import pandas
import pandas as pd

# Import Twitter data as DataFrame: df
df = pd.read_csv("tweets.csv")

# Initialize an empty dictionary: langs_count
langs_count = {}

# Extract column from DataFrame: col
col = df['lang']

# Iterate over lang column in DataFrame
for langs in col:

    # If the language is in langs_count, add 1 
    if langs in langs_count:
        langs_count[langs] += 1

    # Else add the language to langs_count, set the value to 1
    else:
        langs_count[langs] = 1


# Print the populated dictionary
print(langs_count)  # Define count_entries()
def count_entries(df, col_name):
    """Return a dictionary with counts of 
    occurrences as value for each key."""

    # Initialize an empty dictionary: langs_count
    langs_count = {}
    
    # Extract column from DataFrame: col
    col = df[col_name]
    
    # Iterate over lang column in DataFrame
    for langs in col:

        # If the language is in langs_count, add 1
        if langs in langs_count:
            langs_count[langs] += 1
      
        # Else add the language to langs_count, set the value to 1
        else:
            langs_count[langs] = 1
        

    # Return the langs_count dictionary
    return langs_count

# Call count_entries(): result
result = count_entries(tweets_df, 'lang')

# Print the result
print(result) # Define three_shouts
def three_shouts(word1, word2, word3):
    """Returns a tuple of strings
    concatenated with '!!!'."""

    # Define inner
    def inner(word):
        """Returns a string concatenated with '!!!'."""
        return word + "!!!"  

    # Return a tuple of strings
    return (inner(word1), inner(word2), inner(word3))

# Call three_shouts() and print
print(three_shouts("a", "b", "c"))  # Define echo
def echo(n):
    """Return the inner_echo function."""

    # Define inner_echo
    def inner_echo(word1):
        """Concatenate n copies of word1."""
        return word1 * n   

    # Return inner_echo
    return inner_echo

# Call echo: twice
twice = echo(2)

# Call echo: thrice
thrice = echo(3)

# Call twice() and thrice() then print
print(twice("hello"), thrice('hello')) Add in Args Kwags and Lambda function problem sets Add in appened to list problems and for looping through lens and range 

1. Count Job Titles per Industry
Write a function count_jobs_by_industry(data) that takes a DataFrame and returns a dictionary with industries as keys and the number of unique job titles in each industry as values.

2. Filter Jobs by Income and Employment Rate
Create a lambda function that filters the DataFrame to show only jobs with "Mid" or "Senior" income brackets and an employment rate above 85%.

3. Categorize Employment Rate
Write a function employment_rate_classifier(data) that contains an inner function to classify employment rates:

Below 60%: "Low Stability"
60%-85%: "Moderate Stability"
Above 85%: "High Stability"
The outer function should return a dictionary of job titles and their stability level.

4. Compute Median Income by Country
Write a function median_income_by_country(data) that returns a dictionary with countries as keys and their corresponding median annual income as values.

5. Find the Most Common Job Title
Write a function most_common_job_title(data) that returns the most frequently occurring job title in the dataset.

6. Average Salary for a Given List of Job Titles
Create a function average_salary_for_jobs(data, *job_titles) that takes a DataFrame and a variable number of job titles, then returns a dictionary with the average annual income for each specified job title.

Example usage:

python
Copy
Edit
average_salary_for_jobs(data, 'Software Engineer', 'Data Scientist')
7. Find Countries with at Least N Jobs
Write a function countries_with_min_jobs(data, n) that returns a list of countries that have at least n unique job listings.

Example usage:

python
Copy
Edit
countries_with_min_jobs(data, 5)
8. Industry with the Highest Employment Rate
Write a function highest_employment_rate_industry(data) that returns the industry with the highest average employment rate across all its jobs.

9. Compare Income Disparity Between Median and Average
Write a function income_disparity(data) that returns a dictionary with industries as keys and the absolute difference between the average annual income and the median annual income as values.

10. Jobs with Income Above Industry Average
Write a function above_average_jobs(data) that finds job titles where the average income is higher than the industry average for that job’s industry.

1. File Operations and While Loop with List Appending
Problem:

Create a text file (e.g., job_data.txt) containing several lines, each with a job title.
Write a Python program that opens this file and uses a while loop to read each line one by one.
Append each job title to a list.
Once the end of the file is reached, print out the complete list of job titles.
2. Handling Index Errors with Try/Except
Problem:

Create a list of job titles (you may use the “Job Title” column from the sample DataFrame).
Write a function that accepts an index and returns the job title at that index.
Use a try/except block to catch IndexError if the provided index is out of range.
Print a user-friendly error message when an invalid index is requested.
3. Using Dictionary, Set, and Tuple to Aggregate Data
Problem:

From the sample DataFrame, build a dictionary where each key is a country.
The corresponding value should be a tuple containing:
The number of unique industries in that country (use a set to determine uniqueness).
The average employment rate (calculated from the “Employment Rate (%)” column) for that country.
Print the resulting dictionary.
4. Merging DataFrames and Handling Missing Values
Problem:

Create a second DataFrame (e.g., df_extra) with additional information such as:
"Job Title"
"Company Name"
"Location"
Merge this DataFrame with the sample DataFrame on the "Job Title" column.
Some job titles may not have matching entries, so handle missing values in the merged DataFrame by either:
Filling them with a default value (using fillna()), or
Dropping the incomplete rows.
Print the final merged DataFrame.
5. Sorting and Ranking with For Loops
Problem:

Sort the sample DataFrame by "Average Annual Income (USD)" in descending order.
Create a ranking based on the sorted order (i.e., rank 1 for the highest income, 2 for the second highest, etc.).
Use a for loop to iterate over the sorted DataFrame and print out each job title along with its ranking and average income.
6. Selecting and Filtering DataFrames and Columns
Problem:

Filter the sample DataFrame to select only the rows where:
"Employment Rate (%)" is above 90.
"Industry" is either "Technology" or "Healthcare".
From the filtered data, display only the columns "Job Title" and "Average Annual Income (USD)".
7. Data Exploration with Pandas
Problem:

Perform exploratory analysis on the sample DataFrame by computing:
The mean, median, minimum, and maximum of "Average Annual Income (USD)".
Group the data by "Income Bracket" and calculate the average "Employment Rate (%)" for each group.
Print your results clearly.
8. Control Flow Logic Based on Data Conditions
Problem:

Iterate through the list of countries from the sample DataFrame.
For each country, check the average employment rate (you might need to calculate this if a country appears multiple times).
Use an if/elif/else structure:
Print a message if the average employment rate is above 92.
Print a different message if it is below 90.
Otherwise, print a neutral message.
9. Combining While Loops with Try/Except for User Input
Problem:

Using a list of job titles (from the sample DataFrame), write a program that repeatedly prompts the user to enter an index.
The program should:
Use a while loop to continue prompting until the user types "exit".
Attempt to retrieve and print the job title at the given index.
Use try/except to catch and handle any IndexError.
When the user types "exit", the program should end gracefully.
10. Reading a CSV File into a DataFrame with Exception Handling
Problem:

Save the sample DataFrame as a CSV file (e.g., job_data.csv).
Write Python code that attempts to read the CSV file into a Pandas DataFrame.
Use try/except to handle the case where the file might not be found (FileNotFoundError).
If the file is successfully read, print the first few rows (use head()).
11. Advanced DataFrame Merging and Filtering
Problem:

Given two CSV files:
One containing the job details (the sample DataFrame).
Another containing company ratings (with columns such as "Job Title" and "Rating").
Merge these two DataFrames on the "Job Title" column.
After merging, filter the DataFrame to display only the rows with a "Rating" greater than 4.0.
Ensure that any missing "Rating" values are handled (e.g., filled or the corresponding rows dropped).
12. Creating New DataFrame Columns via Computation
Problem:

Add a new column to the sample DataFrame called "Income Difference".
This column should be computed as the difference between "Average Annual Income (USD)" and "Median Annual Income (USD)".
You can compute this using either a for loop or vectorized operations.
Finally, sort the DataFrame by "Income Difference" in ascending order and print the result.
13. Using Sets to Find and Sort Unique Values
Problem:

Extract all unique industries from the sample DataFrame using a set.
Convert the set into a sorted list (alphabetical order) and print each industry on a new line.
14. Control Flow in DataFrame Row Iteration
Problem:

Iterate over each row of the sample DataFrame.
For each row:
If the "Income Bracket" is "High", print:
"High income in [Country] for [Job Title]"
If it is "Medium", print:
"Medium income in [Country] for [Job Title]"
Otherwise (if other income brackets exist), print:
"Low income in [Country] for [Job Title]"
Use appropriate control flow (if/elif/else) to implement this logic.
15. Tuple Unpacking and List Manipulation
Problem:

Suppose you have a list of tuples where each tuple is structured as:
(Country, Job Title, Average Annual Income)
Write a Python program that:
Iterates over this list and unpacks each tuple.
Appends the "Job Title" to a new list if the "Average Annual Income" is above a specified threshold (e.g., 80000).
After processing, print the final list of job titles that meet the criteria.

Challenge 1: Number Divisibility Check with Nested Conditions
Problem Statement:
Write a Python program that iterates over numbers from 1 to 30 (inclusive). For each number, your program should:

Check if the number is even.
If it is even:
Print: "<number> is even".
Then, inside this block, check if the number is divisible by 3.
If yes, print: "<number> is divisible by 3".
Inside this check, further verify if the number is divisible by 5.
If yes, print: "<number> is divisible by 5".
If the number is not even (i.e., it is odd):
Simply print: "<number> is odd".
Example Expected Behavior:

For the number 30, the output should be:
csharp
Copy
30 is even
  30 is divisible by 3
    30 is divisible by 5
For the number 8, the output might be:
csharp
Copy
8 is even
For the number 7, the output should be:
csharp
Copy
7 is odd
Hints:

Use the modulus operator % to check divisibility.
Make sure each nested if block is indented one level deeper than its parent so that the stacking is clear.
Challenge 2: Student Grades Evaluation with Deeply Nested Conditions
Problem Statement:
You have a list of dictionaries where each dictionary represents a student and contains their name along with their scores in Math, Science, and English. For example:

python
Copy
students = [
    {'name': 'Alice',   'math': 85, 'science': 78, 'english': 92},
    {'name': 'Bob',     'math': 45, 'science': 55, 'english': 65},
    {'name': 'Charlie', 'math': 70, 'science': 82, 'english': 88},
    {'name': 'David',   'math': 90, 'science': 60, 'english': 40}
]
Write a Python program that uses a for loop to iterate over this list and evaluates each student's performance with the following nested conditions:

Check Math Score:
If the student's Math score is 50 or above:
Then, check the Science score:
If the Science score is also 50 or above:
Then, check the English score:
If the English score is 50 or above:
Print: "<name> has passed all subjects."
Else:
Print: "<name> needs to improve in English."
Else:
Print: "<name> needs to improve in Science."
Else:
Print: "<name> needs to improve in Math."
Expected Output Examples:

Alice: With scores 85 (Math), 78 (Science), and 92 (English), she should pass all subjects.
Output: Alice has passed all subjects.
Bob: With a Math score of 45 (which is below 50), you should print:
Output: Bob needs to improve in Math.
David: Although his Math (90) and Science (60) scores are acceptable, his English score (40) is not, so:
Output: David needs to improve in English.
Hints:

Remember that each level of the nested conditions must be indented further than its parent block.
The structure of the nested if statements is crucial. Make sure that if one condition fails, you do not proceed to check the deeper levels.


# Create a function count_word_frequency(text, *words) that counts how many times each specified word appears in a text
# The function should:
# - Accept a text string and variable number of words to search for
# - Return a dictionary with the words as keys and their frequencies as values
# - Be case-insensitive

# Example usage:

def count_word_frequency(text, *words):
    text = text.lower()

    word_count = {}

    for word in words:
        word_count[word] = {}

        if word in text.strip():
            count_words = word.count()
            word_count[word][count_words] += 1
        else:
            word_count[word][count_words] = 1
    return word_count


# Should return: {'the': 2, 'dog': 2, 'fox': 1}


# Create a function calculate_grades(**student_scores) that processes student grades
# The function should:
# - Accept keyword arguments where keys are student names and values are lists of their scores
# - Calculate the average score for each student
# - Return a dictionary with student names and their letter grades (A: ≥90, B: ≥80, C: ≥70, D: ≥60, F: <60)

# Example usage:

def calculate_grades(**student_scores):
    grades_dict = {}

    for grade, score in student_scores.items():
        score = sum(score) / len(score)

        if score >= 90:
            grades_dict[grade] = 'A'
        elif score < 90 and score >= 80:
            grades_dict[grade] = 'B'
        elif score < 80 and score >- 70:
            grades_dict[grade] = 'C'
        elif score < 70 and score >= 60:
            grades_dict[grade] = 'D'
        else:
            grades_dict[grade] = 'F'
    return grades_dict


# Create a function create_number_filter(min_val, max_val) that returns a function
# The returned function should:
# - Accept a list of numbers
# - Filter numbers that fall between min_val and max_val (inclusive)
# - Return the filtered list


# Create a function create_number_filter(min_val, max_val) that returns a function
# The returned function should:
# - Accept a list of numbers
# - Filter numbers that fall between min_val and max_val (inclusive)
# - Return the filtered list

def create_number_filter(min_val, max_val):

    def number_filter(numbers):
        filtered_list = []
        for num in numbers:
            if min_val <= num <= max_val:
                filtered_list.append(num)
    return number_filter

results = create_number_filter(10, 20)

print(results([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]))

