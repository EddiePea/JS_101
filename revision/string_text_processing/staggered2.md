**INSTRUCTIONS**
- Function -> modify staggered1
- Ingore alpha chars when determining whether it should be UC or LC
- Non-alpha chars include in return value 
- Don't count when toggling desired case

**OUTLINE**
- INPUT: string (STR)
- OUTPUT: new string -> alternative caps/lc BUT ignorning non-alpha chars

**REQUIREMENTS**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Convert STR into array of individual chars
- SET counter variable to 0
- Loop through charsArr and transform chars
  - If char is alpha and counter is even or 0 
    - Convert char to uppercase and return it
    - Increment counter by 1
  - If char is alpha and counter is odd
    - Convert char to lowercase and return it
    - Increment counter by 1
  - If char is not alpha -> continue OR return char (depending on structure)
- Convert transformed charsArr into string
- Return string

**NOTES**
- Think about using ternary expressions
- Think through slowly -> go through logical steps with care