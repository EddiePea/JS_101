**INSTRUCTIONS**
- Function
- Arg => string of digits
- Returns => number integer
- Ignore leading + or - signs 
- Ignore invalid chars -> assume all chars are numeric

**OUTLINE**
- INPUT: string of digits
- OUTPUT: number (the numeric version of the string)

**REQUIREMENTS**
- Cannot use parseInt()
- Cannnot use Number()
- Cannot use String()
- Ignore - or + signs

**ASSUMPTIONS**
- Valid numeric chars only, e.g. no Infinity

**TESTS**
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

**DATA STRUCTURE**
- Number output

**ALGORITHM**
**Implicit coercion -> an operation which coerces a string to a num*
- SET (string - 1) = numLessOne
- Increment numLessOne
**Implicit coercion with unary + operator*
- +[numString] -> num

**NOTES**
- LS used an object to perform a conversion from string to num (commonplace)
- Remember: object keys = strings (always)