**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: object with 3 properties
  - Number of chars in STR => lowercase [letters]
  - Number of chars in STR => uppercase [letters]
  - Number of chars in STR that are neither lc/uc letters

**OUTLINE**
- INPUT: string
- OUTPUT: object, 3 properties

**REQUIREMENTS**
- Whitespace counts as neither
- Letters count as neither, i.e. not letters
- [letters] = alphabetical chars 
- Whitespace -> 0 for everything

**ASSUMPTIONS**

**TESTS**
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

**DATA STRUCTURE**
- Object

**ALGORITHM**
- Create resultsObj with lc, up and neither properties set to 0 value
- Loop through string
  - If char === char.tolc -> increase value of lc property by 1
  - If char === char.touc -> increase value of uc property by 1
  - else -> increase value of neither property by 1

**NOTES**
- Non-letter chars are the same toUC as toLC