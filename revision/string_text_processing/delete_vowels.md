**INSTRUCTIONS**
- Function
- Arg: array of strings (ARR)
- Returns: array of same string values with vowels removed

**OUTLINE**
- INPUT: array of string values (ARR)
- OUTPUT: [new] array of string values in ARR with vowels removed

**REQUIREMENTS**

**ASSUMPTIONS**
- Output array = new array

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Create helper function that returns true if char = vowel
- Loop through each ARR element
- Convert each ARR element into an array of chars (charArr)
- Call filter on each charArr -> return array of non-vowel chars -> join result
- Add result to newArr and return newArr

**NOTES**
- Regex - remember replace!