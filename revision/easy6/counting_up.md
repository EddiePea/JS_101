**INSTRUCTIONS**
- Function
- ARG: integer
- Returns: array - containing all integers between 1 and ARG (inclusive); ascending order
- Assume ARG = positive integer

**OUTLINE**
- INPUT: number
- OUTPUT: array

**REQUIREMENTS**
- If ARG = 1, return [1]

**ASSUMPTIONS**
- Arg !== Infinity
- We don't have to worry about the size limits of arr
- 0 here is not a positive integer

**TESTS**
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Create empty array - resultArr
- Create a loop -> which continues while NUM > 1
- Inside the loop: 
  - Add num to resultArr
  - Decrement num by 1
- Return resultArr

**NOTES**
- If you need to create an array, think about using Array(length) and fill(element)
- then remember that you can populate an array with a consecutive num sequence by using the index nums (plus 1)