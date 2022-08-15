**INSTRUCTIONS**
- Function
- Arg: grocery list in 2D array
  - Each element: fruit name, quantity (num)
- Returns: 1D array
  - Each fruit name occurs NUM times

**OUTLINE**
- INPUT: 2D array
  - L1 = parentArr
  - L2 = subArr with 2 elements
  - L3 = elements -> string or NUM
- OUTPUT: 1D array

**REQUIREMENTS**

**ASSUMPTIONS**
- Returns newArr -> doesn't mutate calling arr

**TESTS**
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Loop through L1 array
- SET 'fruit', 'num' variables which correspond to the 2 L3 elements
- In place of each L2 subArr return fruit variable repeated num times

**NOTES**