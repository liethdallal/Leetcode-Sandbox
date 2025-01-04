# # 1. Two Sum
# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         for i in range(len(nums)):
#             for j in range(i + 1, len(nums)):
#                 if nums[i] + nums[j] == target:
#                     return [i,j]



# 1. Iterate Over the Characters in a String
# You can iterate over the characters of a string using a for loop:

# python
# Copy code
# my_string = "Hello"
# for char in my_string:
#     if char.isupper():
#         print(f"{char} is uppercase")
#     elif char.islower():
#         print(f"{char} is lowercase")
# 2. Use String Methods
# Here are some common string methods:

# upper: Converts all characters to uppercase.
# split: Splits a string into a list of substrings based on a delimiter.
# strip: Removes leading and trailing whitespace (or other specified characters).
# Examples:

# python
# Copy code
# my_string = "  Hello, World!  "
# print(my_string.upper())  # "  HELLO, WORLD!  "
# print(my_string.split(','))  # ['  Hello', ' World!  ']
# print(my_string.strip())  # "Hello, World!"
# 3. Declare Tuples and Lists, and Use List Methods
# Tuples: Immutable sequences of elements.
# Lists: Mutable sequences of elements.
# Examples:

# python
# Copy code
# # Declare a tuple
# my_tuple = (1, 2, 3)

# # Declare a list
# my_list = [3, 1, 2]

# # List methods
# my_list.sort()  # Sort the list in place
# print(my_list)  # [1, 2, 3]

# my_list.insert(1, 10)  # Insert 10 at index 1
# print(my_list)  # [1, 10, 2, 3]
# 4. Read from and Write to Files
# Use Python’s built-in open function to handle file I/O.

# Read a file:
# python
# Copy code
# with open('example.txt', 'r') as file:
#     for line in file:
#         print(line.strip())  # Remove trailing newline
# Write to a file:
# python
# Copy code
# with open('example.txt', 'w') as file:
#     file.write("Hello, World!\n")
#     file.write("Python is great.")
# 5. Declare, Iterate Over, and Modify Dictionaries
# Declare a dictionary:
# python
# Copy code
# my_dict = {'a': 1, 'b': 2, 'c': 3}
# Iterate over dictionary items:
# python
# Copy code
# for key, value in my_dict.items():
#     print(f"{key}: {value}")
# Modify a dictionary:
# python
# Copy code
# my_dict['d'] = 4  # Add a key-value pair
# my_dict['a'] = 10  # Update an existing key's value
# del my_dict['b']  # Remove a key-value pair
# Convert between tuples and dictionaries:
# python
# Copy code
# # Convert dictionary to a list of tuples
# tuple_list = list(my_dict.items())
# print(tuple_list)  # [('a', 10), ('c', 3), ('d', 4)]

# # Convert list of tuples to a dictionary
# new_dict = dict(tuple_list)
# print(new_dict)  # {'a': 10, 'c': 3, 'd': 4}