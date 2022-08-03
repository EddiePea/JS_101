**INSTRUCTIONS**
- function
- takes positive integer (n) as arg
- logs right [?] triangle
- each side has [n] stars
- hypotenuse - should run from lower left to upper right

**OUTLINE**
- INPUT: positive integer argument
- OUTPUT: 'triangle' printed to console, (n) stars on each side

**REQUIREMENTS**
- Log 'right' triangle to console
- Triangle hypot must run from bottom left to upper right hand side

**ASSUMPTIONS**
- Right triangle = right angled triangle
- Only passed positive integer arguments (e.g. no strings, decimals - no validation required)

**TESTS**
- see pics

**DATA STRUCTURE**
- printed string output

**ALGORITHM**
- Loop
- SET counter to 1
- While counter <= num
  - Print whitespace padding (num - counter) + (star.repeat(counter))
  - Increment counter

**NOTES**
- Again, think about simple changes to variables
