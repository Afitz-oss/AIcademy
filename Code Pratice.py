from email import message
from re import X
from typing import Any


from os import name
from unittest import result
from numpy.ma import count
import pandas as pd



nums_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,9,9,9]
nums_list_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,9,9,9]
list_of_lists = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3]]
long_time_no_even = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,102]
words_list = ['apple', 'banana', 'cherry', 'date', 'elderberry','apple', 'ice', 'ice', 'ice']
student_scores = {'Alice': 85, 'Bob': 90, 'Charlie': 78, 'David': 92, 'Eve': 88}
country_capitals = {'USA': 'Washington D.C.', 'France': 'Paris', 'Japan': 'Tokyo', 'Germany': 'Berlin', 'Italy': 'Rome'}
texts = "Hello, world!"
stock_prices = {'AAPL': 150.75, 'GOOG': 2820.46, 'MSFT': 235.77}
sold_products = ['AAPL', 'GOOG', 'MSFT', 'AAPL', 'GOOG', 'MSFT', 'AAPL', 'GOOG', 'MSFT']
grades = [
    ("Alice", 90),
    ("Bob", 85),
    ("Alice", 95),
    ("Charlie", 78),
    ("Bob", 82),
    ("Alice", 88)
]
list_hash = [100, 4, 200, 1, 3, 2]
list_of_cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']
sales = [
    ("apple", 5),
    ("banana", 3),
    ("apple", 2),
    ("orange", 4),
    ("banana", 1)
]
anagram_list = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']

word_dict_key = {'Turtle': 'Turtle', 'Rab': 'Rabbit', 'Snake': 'Snake', 'Li': 'Lion', 'ger': 'Tiger'}
set_of_words = {'Turtle', 'Rabbit', 'Snake', 'Lion', 'Tiger'}
set_of_nums = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
set_of_nums_2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10,13,14,15,16,17,18,19,20}
tuple_of_words = ('Turtle', 'Rabbit', 'Snake', 'Lion', 'Tiger')
tuple_name_age = ('John', 25), ('Jane', 30), ('Jim', 35)
list_of_tuples = [("Alice", 90), ("Bob", 85), ("Alice", 95), ("Bob", 82)]


import pandas as pd

df = pd.read_csv(r"/Users/akimfitzgerald/Documents/Akim's Coding Practice/02_datasets/extended_income_job_country_100_rows.csv")

industry_mean = df.groupby("Industry").mean("Average Annual Income (USD)").head(3)



print(industry_mean)

