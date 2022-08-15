**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: [list] of all possible substrings of STR
- Order list by where in the string the substring begins
  - substrings that start at indx 0 first
  - then substrings starting at indx 1 etc.
- Multiple substrings at each position -> so return substrings at given index from short to long

**OUTLINE**
- INPUT: string
- OUTPUT: array of substrings

**REQUIREMENTS**
- Can/should use leadingSubstrings function

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Loop through string OR string arr
- Call leadingSubs function on the string - will produce an array of substrings
- On each iteration, extract substring from string starting from the next index position (i.e. start at 0, then 1 etc) 

**NOTES**