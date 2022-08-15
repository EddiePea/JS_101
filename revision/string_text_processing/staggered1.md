**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: string with [staggered_capitalization_scheme]
  - Every other char (from 1st) -> toUC
  - Followed by LC char OR non-alpha char
- Do not change non-alpha chars -> count as chars when determining switch between UC/LC

**OUTLINE**
- INPUT: 
- OUTPUT:

**REQUIREMENTS**

**ASSUMPTIONS**
- Chars includes whitespace

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Convert STR into array of individual chars (including all chars, e.g. whitespace) (charsArr)
- Loop through charsArr
- If index num of char is 0 or even -> convert char to uppercase
- If index num of char is odd -> convert char to lowercase
  - This should deal with non-alpha chars (where, e.g. ('!').toUpperCase === ('!').toLowerCase());
- Return transformed charsArr
- Convert transformed charsArr to switchedString
- Return switchedString

**NOTES**