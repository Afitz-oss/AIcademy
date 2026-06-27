Coding Practice Problems 

Define a function greet that prints "Hello, World!".
# Define the function greet
def ____():
    """Print a greeting"""
    # Concatenate the strings: greeting
    greeting = 'Hello' + ', World!'

    # Print greeting
    print(____)

# Call greet
greet()

Define a function greet with a parameter name that prints a personalized greeting.
# Define greet with the parameter, name
def greet(____):
    """Print a personalized greeting"""
    # Concatenate the strings: greeting
    greeting = 'Hello, ' + name + '!'

    # Print greeting
    print(____)

# Call greet with the string 'Alice'
greet('Alice')

Define a function multiply_by_two that returns a number multiplied by 2.
# Define the function multiply_by_two with parameter x
def multiply_by_two(____):
    """Return x multiplied by 2"""
    # Multiply x by 2
    result = x * ____

    # Return result
    return ____

# Call multiply_by_two with the number 5, assign to result
result = multiply_by_two(5)

# Print result
print(result)

Define a function add_numbers that returns the sum of two numbers.
# Define the function add_numbers with parameters a and b
def add_numbers(____, ____):
    """Return the sum of a and b"""
    # Add a and b
    total = ____

    # Return total
    return ____

# Call add_numbers with arguments 3 and 4, assign to sum_result
sum_result = add_numbers(3, 4)

# Print sum_result
print(sum_result)

Define a function count_vowels that counts the number of vowels in a word.
# Define the function count_vowels with parameter word
def count_vowels(____):
    """Return the number of vowels in the word"""
    # Initialize count
    count = 0
    # Convert word to lowercase
    word = word.lower()
    # Iterate over each character in word
    for char in ____:
        # If character is a vowel, increment count
        if char in 'aeiou':
            ____

    # Return count
    return ____

# Call count_vowels with the string 'DataCamp', assign to num_vowels
num_vowels = count_vowels('DataCamp')

# Print num_vowels
print(num_vowels)


# Import pandas as pd
import pandas as pd

# Load a CSV file into a DataFrame: df
df = pd.read_csv(____)

# Define the function count_column_entries with parameters df and col_name
def count_column_entries(____, ____):
    """Return a dictionary with counts of occurrences in specified column"""
    # Initialize an empty dictionary: counts_dict
    counts_dict = {}

    # Extract column from DataFrame: col
    col = df[____]

    # Iterate over entries in col
    for entry in ____:
        # If entry is in counts_dict, increment count
        if entry in counts_dict:
            counts_dict[entry] += ____
        # Else, add entry to counts_dict with count 1
        else:
            counts_dict[entry] = ____

    # Return counts_dict
    return counts_dict

# Call count_column_entries with df and 'column_name', assign to result_dict
result_dict = count_column_entries(df, 'column_name')

# Print result_dict
print(result_dict)


Define a function reverse_string that returns the reverse of a string.
# Define the function reverse_string with parameter s
def reverse_string(____):
    """Return the reverse of the string s"""
    # Reverse the string
    reversed_s = s[____]

    # Return reversed_s
    return ____

# Call reverse_string with the string 'Python', assign to reversed_result
reversed_result = reverse_string('Python')

# Print reversed_result
print(reversed_result)


Define a function is_prime that checks if a number is prime.
# Define the function is_prime with parameter n
def is_prime(____):
    """Return True if n is a prime number, False otherwise"""
    # Check if n is less than 2
    if n < 2:
        return False
    # Check for factors from 2 to n-1
    for i in range(2, n):
        if n % i == 0:
            return ____
    # If no factors found, return True
    return ____

# Call is_prime with number 17, assign to prime_check
prime_check = is_prime(17)

# Print prime_check
print(prime_check)

Define a function factorial that returns the factorial of a number.
# Define the function factorial with parameter n
def factorial(____):
    """Return the factorial of n"""
    # Initialize result
    result = 1
    # Loop from 1 to n
    for i in range(____, ____):
        result *= ____

    # Return result
    return ____

# Call factorial with number 5, assign to fact_result
fact_result = factorial(5)

# Print fact_result
print(fact_result)

Define a function filter_even_numbers that filters even numbers from a list.
# Define the function filter_even_numbers with parameter num_list
def filter_even_numbers(____):
    """Return a list of even numbers from num_list"""
    # Initialize empty list: even_numbers
    even_numbers = []

    # Iterate over num_list
    for num in ____:
        # If num is even, append to even_numbers
        if num % 2 == ____:
            even_numbers.append(____)

    # Return even_numbers
    return ____

# Call filter_even_numbers with list [1,2,3,4,5,6], assign to evens
evens = filter_even_numbers([1, 2, 3, 4, 5, 6])

# Print evens
print(evens)



Define a function sum_numbers that returns the sum of numbers from 1 to n using a for loop.
# Define the function sum_numbers with parameter n
def sum_numbers(____):
    """Return the sum of numbers from 1 to n"""
    # Initialize total
    total = 0
    # Use a for loop to iterate from 1 to n
    for i in range(____, ____):
        # Add i to total
        total += ____
    # Return total
    return ____

# Call sum_numbers with n = 10, assign to sum_result
sum_result = sum_numbers(10)

# Print sum_result
print(sum_result)


Define a function find_first_even that returns the first even number in a list using a while loop.
# Define the function find_first_even with parameter num_list
def find_first_even(____):
    """Return the first even number in num_list"""
    # Initialize index
    index = 0
    # Use a while loop to iterate over num_list
    while ____ < ____:
        # If current number is even, return it
        if num_list[index] % 2 == 0:
            return ____
        # Increment index
        index += ____
    # If no even number found, return None
    return ____

# Call find_first_even with list [1,3,5,7,8,10], assign to first_even
first_even = find_first_even([1, 3, 5, 7, 8, 10])

# Print first_even
print(first_even)


Define a function collect_until_stop that collects user input in a list until the user types 'stop'.
# Define the function collect_until_stop with no parameters
def collect_until_stop():
    """Collect user input until 'stop' is entered"""
    # Initialize empty list: inputs
    inputs = []
    # Use a while loop to collect inputs
    while True:
        # Get input from user
        user_input = input("Enter something (type 'stop' to finish): ")
        # If user_input is 'stop', break the loop
        if user_input == 'stop':
            ____
        # Else, append user_input to inputs
        else:
            ____
    # Return inputs
    return ____

# Call collect_until_stop, assign to user_inputs
user_inputs = collect_until_stop()

# Print user_inputs
print(user_inputs)


Define a function print_even_numbers that prints even numbers from a list using a for loop.
# Define the function print_even_numbers with parameter num_list
def print_even_numbers(____):
    """Print even numbers from num_list"""
    # Use a for loop to iterate over num_list
    for num in ____:
        # If num is even, print it
        if num % 2 == ____:
            print(____)

# Call print_even_numbers with list [2,5,8,11,14]
print_even_numbers([2, 5, 8, 11, 14])


Define a function factorial_while that calculates the factorial of a number using a while loop.
# Define the function factorial_while with parameter n
def factorial_while(____):
    """Return the factorial of n using a while loop"""
    # Initialize result and counter
    result = 1
    counter = n
    # Use a while loop to compute factorial
    while counter > ____:
        result *= ____
        counter -= ____
    # Return result
    return ____

# Call factorial_while with n = 5, assign to fact_result
fact_result = factorial_while(5)

# Print fact_result
print(fact_result)


Define a function count_down that prints numbers from n down to 1 using a while loop.
# Define the function count_down with parameter n
def count_down(____):
    """Print numbers from n down to 1"""
    # Use a while loop to count down
    while n >= ____:
        print(____)
        # Decrement n
        n -= ____

# Call count_down with n = 5
count_down(5)


Define a function sum_list that returns the sum of all numbers in a list using a for loop.
# Define the function sum_list with parameter num_list
def sum_list(____):
    """Return the sum of all numbers in num_list"""
    # Initialize total
    total = 0
    # Use a for loop to iterate over num_list
    for num in ____:
        # Add num to total
        total += ____
    # Return total
    return ____

# Call sum_list with list [1,2,3,4,5], assign to sum_result
sum_result = sum_list([1, 2, 3, 4, 5])

# Print sum_result
print(sum_result)



Define a function filter_long_words that returns words longer than n characters from a list using a for loop.
# Define the function filter_long_words with parameters words_list and n
def filter_long_words(____, ____):
    """Return words longer than n characters"""
    # Initialize empty list: long_words
    long_words = []
    # Use a for loop to iterate over words_list
    for word in ____:
        # If length of word is greater than n, append to long_words
        if len(word) > ____:
            long_words.append(____)
    # Return long_words
    return ____

# Call filter_long_words with ['apple', 'banana', 'cherry', 'date'], n = 5
result = filter_long_words(['apple', 'banana', 'cherry', 'date'], 5)

# Print result
print(result)


Define a function find_primes that returns a list of prime numbers up to n using a nested for loop.
# Define the function find_primes with parameter n
def find_primes(____):
    """Return a list of prime numbers up to n"""
    # Initialize empty list: primes
    primes = []
    # Use a for loop to iterate from 2 to n
    for num in range(2, ____ + 1):
        # Assume num is prime
        is_prime = True
        # Use a nested for loop to check for factors
        for i in range(2, num):
            if num % i == 0:
                is_prime = ____
                break
        # If num is prime, append to primes
        if is_prime:
            primes.append(____)
    # Return primes
    return ____

# Call find_primes with n = 10, assign to primes_list
primes_list = find_primes(10)

# Print primes_list
print(primes_list)


Define a function simulate_do_while that uses a while loop to simulate a do-while loop, printing numbers from 1 upwards until a condition is met.
# Define the function simulate_do_while with no parameters
def simulate_do_while():
    """Simulate a do-while loop to print numbers until a condition is met"""
    # Initialize counter
    counter = 1
    # Use a while loop to simulate do-while
    while True:
        # Print counter
        print(____)
        # Increment counter
        counter += ____
        # Check if counter is greater than 5, break if so
        if counter > ____:
            ____
    # Function ends here

# Call simulate_do_while
simulate_do_while()


"""
Problem 1: Write a function that takes a list of numbers and returns:
- The sum of all even numbers
- The sum of all odd numbers
- The difference between these sums
Example: [1,2,3,4,5] should return (6, 9, -3)
"""


"""
Problem 2: Create a function that takes a string and returns a dictionary where:
- Keys are the characters in the string
- Values are the number of times each character appears
Ignore spaces and make it case-insensitive
Example: "Hello World" should return {'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1}
"""

"""
Problem 3: Write a function that takes two lists and returns a new list containing:
- All elements that appear in both lists
- Without any duplicates
- In ascending order
Example: [1,2,2,3,4] and [2,3,3,4,5] should return [2,3,4]
"""

"""
Problem 7: Create a function that takes a list of words and returns a dictionary where:
- Keys are the lengths of words
- Values are lists of words with that length
Example: ["hello", "hi", "python", "hey"] should return {5: ["hello"], 2: ["hi"], 6: ["python"], 3: ["hey"]}
"""
