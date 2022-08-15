**INSTRUCTIONS**
- Function
- Arg: array of [nums] (ARR) (NUM(S)
- Returns: sum of the sums of each [leading_subsequence] in ARR
  - [a, b, c]
  - (a) + (a + b) + (a + b + c)
- ARR always contains at least one NUM

**OUTLINE**
- INPUT: array of numbers
- OUTPUT: single number

**REQUIREMENTS**
- If ARR contains only one NUM -> return NUM

**ASSUMPTIONS**

**TESTS**
sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

**DATA STRUCTURE**
- Use array inside function
- Output number

**ALGORITHM**
- Loop through ARR
- Add each element in turn to the sum of the previous elements in ARR
  - Create running total variable -> set to 0
  - Add current element to runningTotal
  - Push running total to emptyArr
  - Reduce emptyArr to create single number of summed numbers
- Return total

**NOTES**
- Take your time basically
- Try to think about what happens with chained method calls