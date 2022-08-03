**INSTRUCTIONS**
- function
- one arg: positive ingter (INT)
- returns string (STR)
- STR: alternating 1s and 0s (start with 1)
- STR.length = INT

**OUTLINE**
- INPUT: 
- OUTPUT: 

**REQUIREMENTS**
- Define a function
- Function takes 1 arg (a positive integer) (INT)
- Returns a string
- String made up of 1s and 0s pattern (starting with 1)
- STR.length = INT

**ASSUMPTIONS**
- INT is always a positive integer (no validation for, e.g., negative integers)
- STR.length = INT -> if the length is 5 then STR will have a length of 5 with pattern of 10101
- If INT = 0, returns empty string

**TESTS**
stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
stringy(0);    // ""

**DATA STRUCTURE**
- Return string

**ALGORITHM**
- Create empty string - numStr
- Create do...while loop:
    - Add '10' pattern to numStr on each iteration
    - While numStr.length <= INT
- If numStr.length > INT - return numStr minus last char
- Otherwise return numStr

**NOTES**