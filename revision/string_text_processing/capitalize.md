**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: new string 
  -> [first_char] of every [word] capitalised
  -> all subsequent chars in lowercase
- Assume word => any sequence of non-whitespace chars

**OUTLINE**
- INPUT: string
- OUTPUT: new string - first char of each word capitalized

**REQUIREMENTS**
- A word that starts with a special char or quotation marks won't be capitalized -> it's not the first char in the word; the punctuation mark is

**ASSUMPTIONS**
- If first char is already capitalised -> capitalize it
- If intermediate char is capitalized -> turn to lower case
- If empty string -> empty string

**TESTS**

**DATA STRUCTURE**
- Array - easier to pinpoint first char of each word

**ALGORITHM**
- Convert string into array of words (demarcated by whitespace)
- Loop through wordsArr -> transform each word
  - Return new word -> first char converted to uppercase
  - subsequnet chars converted to lowercase
- Convert resulting array into string
- Return string


**NOTES**
- Always read back through the instructions to make sure you've got everything