**INSTRUCTIONS**
- Function
- Arg: string of digits
- Returns: appropriate num as integer
- Str may have leading + or - sign
- If first char is + return positive num
- If first char is - return negative num
- If no sign - return positive num
- Assume str always contains valid num
- Cannot use standard conversion methods

**OUTLINE**
- INPUT: numeric string (with or without + or - sign)
- OUTPUT: + or - number (integer)

**REQUIREMENTS**
- Function 
- Takes string of digits as arg
- Return numeric version of string digits as integer 
- + or - signs taken notice of - if no sign, +
- Cannot use standard conversion methods

**ASSUMPTIONS**
- No floating point nums
- No Infinity or -Infinity

**TESTS**
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

**DATA STRUCTURE**
- Object or array to store digits

**ALGORITHM**
- Convert string to array of chars
- If array of chars index 0 === + or - =>
  - Store that fact in sign variable
  - Create new array without it to call forEach on
  - Iterate over array and if it isn't a num -> omit
- If sign variable is negative -> multiply num output by -1

**NOTES**
- Always break down into helper functions!
- Esp. if your function looks v long