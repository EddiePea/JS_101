**INSTRUCTIONS**
- Function
- Arg: non-empty string
- Returns: middle char(s) of STR
  - If STR.length % 2 === 0 -> return 2 chars
  - If STR.length % 2 === 1 -> return 1 char

**OUTLINE**
- INPUT: non-empty string
- OUTPUT: new string containing ONE char (if str.length is odd) or TWO chars (if str.length is even)

**REQUIREMENTS**
- Str length includes whitespace
- Whitespace can be returned as middle char
- If one char in STR, return STR

**ASSUMPTIONS**
- String can be made up of any type of char (e.g. special chars, digits)
- Any of those chars can be returned as middle char

**TESTS**
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

**DATA STRUCTURE**
- String

**ALGORITHM**
- Find string length
- If STR.length is odd
  - Divide string length by 2
  - Round down to lowest integer -> gives RESULT
  - Return char at index position string[RESULT]
- If STR.length is even
  - Divide str.length by 2 -> RESULT
  - Return char at index position string[RESULT - 1] + char at index position string[RESULT]

**NOTES**