**INSTRUCTIONS**
- Function 
- ARG: string [STR] containing 1+ [words]
- Returns: new string containing words from STR
- All 5+ letter words -> letters in reverse order
- STR -> only letters and spaces 
- Words separated by single space

**OUTLINE**
- INPUT: string
- OUTPUT: new string where words over 4 letters in length are reversed

**REQUIREMENTS**

**ASSUMPTIONS**
- Word = consecutive characters separated by whitespace (or start/end of string)

**TESTS**
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

**DATA STRUCTURE**
- Output string
- Inside function: probably use array

**ALGORITHM**
- Convert string into array of words (separate words by whitespace) [wordsArr]
- If using a method like forEach or a for loop - SET a new variable to contain transformed words. Not necessary if using a method like map
- Loop through wordsArr
  - If word.length < 5 - return word
  - Otherwise - 
    - Turn word into array of chars [charsArr]
    - Reverse charsArr
    - Convert charsArr into a string
- Convert transformed array into string 
- Return string

**NOTES**
- Consider creating helper function to reverse words