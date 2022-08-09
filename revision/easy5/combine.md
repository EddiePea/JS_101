**INSTRUCTIONS**
- Function
- Combines 2 arrs passed as args
- Returns NEW arr -> contains all elems from arr1 and arr2
- Each element alternating
- Assume both input arrays are filled
- Assume both have same number of elements

**OUTLINE**
- INPUT: 2 arrays
- OUTPUT: newArr -> contains arr1 and arr2 elements alternating

**REQUIREMENTS**
- Function takes 2 args: arr1, arr2
- Both ars -> same number of elements, filled
- Output: newArr with elements alternating

**ASSUMPTIONS**
- Arr1 - elements go first
- Elements can be any data type

**TESTS**
interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

**DATA STRUCTURE**
- new array

**ALGORITHM**
- Set newArr
- Let arr1 count = 0
- Loop through first arr
  - Let newArr[count] = currentElem
  - count += 2
- Let arr2 count = 1
- Loop through arr2
  - Let newArr[count] = currentElem
  - count += 2;
- Return newArr

**NOTES**
- Keep it simple - you can push two elements together, one from each arr
- If you're repeating something, e.g. calling forEach twice or using 2 for loops -> think 'do I really need this'?
- Reduce can be used with an empty array to populate that new array