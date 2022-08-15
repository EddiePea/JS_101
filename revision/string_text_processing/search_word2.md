**INSTRUCTIONS**
- Function
- Args: word and text string
- Returns: new string -> 
  - Every instance of word highlighted
  - To highlight word => 
    - enclose in 2 asterksks on eitehr side
    - AND change every letter of word to uppercase

**OUTLINE**
- INPUT: 
- OUTPUT:

**REQUIREMENTS**

**ASSUMPTIONS**
- Case insensitive search

**TESTS**

**DATA STRUCTURE**
- Array OR string if using regex

**ALGORITHM**
- Search for case insensitive searchWord
- Replace with capitalised searchWord plus ** and ** around it
- Return new string

OR 
- Convert string into an array of words
- Loop through array of words
  - If word does not match search word -> return word
  - Otherwise return **[word.toUpperCase()]**
- Join transformed wordsArr

**NOTES**
- Remember to ask about whitespace after a word -> do you want all patterns found...