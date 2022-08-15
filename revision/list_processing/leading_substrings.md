**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: list of substrings of STR (subStr)
  - Each subStr -> begin with first letter of STR
  - Each subStr -> from shortest to longest

**OUTLINE**
- INPUT: string
- OUTPUT: array with string elements

**REQUIREMENTS**

**ASSUMPTIONS**
- String could contain whitespace -> treated like any other char
- STring can contain any type of cahr

**TESTS**
leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
leadingSubstrings('abc d')    // ['a', 'ab', 'abc', 'abc ', 'abc d']

**DATA STRUCTURE**
- Array

**ALGORITHM**
- SET resultsArr
- Loop through string
- Set counter to 1
- Take substrings of the string using the counter to indicate where extraction should end
- Add substrings to resultsArr
- Return resultsArr

**NOTES**