**INSTRUCTIONS**
- Function
- ARGS: 2 [integers]
  - Int1 = count
  - Int2 = [starting_num] of a sequence that function creates
- Returns: ARR -> same num of elements as the count arg
- Value of each element -> [multiple] of starting num
- Count arg = integer >= 0
- Starting num => any integer
- If count = 0; return empty array

**OUTLINE**
- INPUT: 2 integers
- OUTPUT: array (sequence of numbers)

**REQUIREMENTS**
- Starting num -> can be negative
- Function should take the starting num and add the starting num to the last element until num of elements = count

**ASSUMPTIONS**
- Neither arg will ever be Infinity or -Infinity

**TESTS**
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []

**DATA STRUCTURE**
- Array

**ALGORITHM**
- SET empty array -> [resultsArr]
- Create loop -> continues while count > 0
  - Add num to resultsArr
  - Add num to num
- Return resultsArr

OR
- Create newArr with num of elements in count
- Fill newArr with 0
- Call map on newArr -> ([indx + 1) * starting num] 

**NOTES**
- Think about the role that each num is playing