**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: new string
  -> every lc char changed to up
  -> every up char changed to uc
  -> all other chars unchanged

**OUTLINE**
- INPUT: string (STR)
- OUTPUT: new string -> uppercase/lowercase chars swapped

**REQUIREMENTS**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Leave as string
- OR consider using array

**ALGORITHM**
- SET resultsStr
- Loop through STR
- If char is UC -> convert char to LC and add to resultStr
- If char is LC -> convert char to UC and add to resultStr
- If char is neither -> add to resultsStr

**NOTES**
- Remember: non-alpha chars toLC === non-alpha chars toUC