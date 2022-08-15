**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: array that contains:
  - every [word] from STR
  - followed by whitespace
  - followed by num = word.length
- If arg = empty string OR no arg passed:
  - returns empty array
- Assume every pair of words -> separated by single space

**OUTLINE**
- INPUT: string of words each separated by one whitespace (STR)
- OUTPUT: array containing string elements
  - Each string element contains (i) each word from STR plus (ii) space plus (iii) length of word

**REQUIREMENTS**

**ASSUMPTIONS**
- [word] = continuous sequence of chars separated by whitespace
  - Can include any chars, e.g. punctuation

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Convert STR into array -> separate words by whitespaces (strArr)
- Loop through strArr and transform each element
  - Get length of each word
  - Return word + whitespace + length
- Return transformed strArr
- OR if empty string or no arg -> return [];

**NOTES**
- there is an arguments object -> you can check and see if any args have been passed to function by asking arguments.length === 0