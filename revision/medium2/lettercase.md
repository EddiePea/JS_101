**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: object containing 3 properties (OBJ):
  - Percentage of chars in STR that are lowercase [letters]
  - Percentage of chars in STR that are uppercase [letters]
  - Percentage of chars in STR that are [neither] lcl nor ucl
- Assume STR will contain at least one [char]

**OUTLINE** 
- INPUT: string
- OUTPUT: object

**RULES**

**ASSUMPTIONS**
- Whitespace is included in char count when computing percentages (TRUE -> see example 1)
- [char] -> any sybol, including punctuation, special chars etc.
- Always going to get a string argument -> no need for validation
- [letter] = alphabetic char (a to z or A to Z in UTF-16 code points)

**TESTS**

**DATA STRUCTURE**
- Could use string and object inside function
OR 
- Could use array and object inside the function

**ALGORITHM**
- GET length of STR
- SET object with 3 properties set to strings with value 0.00 (2dp) (resultsObj)

- Loop through STR
  - If char is lowercase letter -> increase value of LC property by relevant percentage
    - First convert existing property to a number
    - Then add (1 divided by charsArr.length (*100)) to get the total percentage
    - Ensure output is to 2 dp
    - Convert output to string
  - If char is uppercase letter -> do same for UC property
  - If char is neither -> do the same for neither property
- Return results Obj

**NOTES**
- You don't have to create a resultsObj initially -> you can create it as you go, e.g. return { lowercase ...} etc.