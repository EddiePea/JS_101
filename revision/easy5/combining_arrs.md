**INSTRUCTIONS**
- Function
- Args: 2 arrays => ARR1, ARR2
- Returns: RETURN_ARR -> containing [union] of [values] from ARR1 and ARR2
- No duplication of values in RETURN_ARR
  - Includes duplicates in ARR1 and ARR2

**OUTLINE**
- INPUT: 2 arrays
- OUTPUT: 1 NEW array containing same elemnents in input arrays (but no duplicates)

**REQUIREMENTS**
- Assume Args always = arrays -> no need for validation
- Return a NEW array -> contains all of the elements in ARR1 and ARR2 BUT with no duplications

**ASSUMPTIONS**
- Array values will only be primitive data types
- 2 empty arrays -> returns 1 empty array
- For string values, case sensitive
- order doesn't matter

**TESTS**
union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Combine ARR1 and ARR2 to create single NEW arr (watch out for mutation)
- Loop through newArr -> remove duplicates
  - Take elements in turn
  - Create subArray of elements following currentElem
  - Return currentElement if it is NOT included in subArray
- Return filtered newArr

**NOTES**
- Watch out for objects
- Make sure that order is not important
- If filtering for duplicates, you can also use forEach or a for loop and only add a new element to a results array if it's not already there
- Consider using [...] spread operator... - allows you to sub in elements from multiple arrays as args in a list
- Spread operator -> creates arr containing the elements -> each element is array arg