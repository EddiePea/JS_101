**INSTRUCTIONS**
- Function - takes array of nums as arg
- Returns - array
  - Same number of elements
  - Each element's value = [running total] from original array
- Running total = cumulative array total
  - e.g. [1, 2, 3] => [1, [1 + 2 = 3], [3 + 3 = 6]]

**OUTLINE**
- INPUT: Array of numbers
- OUTPUT: Array of numbers 
  - Same number of elements
  - Elements transformed to running totals

**REQUIREMENTS**
- Create function
- Takes an array argument (ARR)
- Elements of ARR = numbers
- Empty arr => returns empty arr
- Arr with one element => returns arr of that 1 element

**ASSUMPTIONS**
- Elements of ARR will only equal numbers (no need to validate)
- If all elements === 0, normal results, i.e. [0, 0, 0]
- Floating point numbers possible -> same results follow
- Negative numbers possible -> same results follow (next number is smaller)
- Returning NEW array, NOT modifying calling array

**TESTS**
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
runningTotal([1, 5, -3])              // [1, 6, 3]
runningTotal([2, 5.5, 6.7])           // [2, 7.5, 14.2]

**DATA STRUCTURE**
- Array
- Probably no need to change as have lots of array methods I can use here

**ALGORITHM**
- SET new resultsArr
- Loop through inputArr
- Add each element of inputArr to the previous element
  - If indx 0 -> add elem to resultsArr
  - SET runningTotal - currentElem + resultsArr[indx - 1];
  - Add runningTotal to resultsArr
- Add the result to the resultsArr each time

**NOTES**