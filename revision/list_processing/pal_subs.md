**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Return: list of all [palindromic] [substrings] of a string
- Palindromic substring -> each substring => sequence of chars that reads same forwards as backwards
- Sort substrings in order of appearance in input string
- [Duplicate_strings] included multiple times
- Use [substrings] function
- Consider all chars
- Case sensitive
- Single chars are not palindromes

**OUTLINE**
- INPUT: string
- OUTPUT: array of palindromic substrings

**REQUIREMENTS**

**ASSUMPTIONS**
- Take account of special chars AND whitespace

**TESTS**
palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Call substring function 
- Filter for palindromes
  - Split each substring into separate chars - charsArr
  - Ask if charsArr === charsArr.reverse()
  - AND if length of charsArr > 1
  - If YES -> return substring -> add it to filteredArr
- Return filteredArr

**NOTES**
- Watch out for object equivalence!
- Whenver you're using the equality operator and objects, be wary!!!
- Don't forget to use helper functions!