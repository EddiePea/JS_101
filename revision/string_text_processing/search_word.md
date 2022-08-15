**INSTRUCTIONS**
- Function
- Args: 2 
  - Word
  - String of [text]
- Returns: integer
  - Number of times word appears in text
- Assume that word and text inputs will always be provided
- Assume all word breaks = spaces
- Some words include punctuation
- Assume search = case sensitive

**OUTLINE**
- INPUT: word string, long string containing multiple words
- OUTPUT: integer -> number of times word appears in text

**REQUIREMENTS**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array?
- OR if using regex - string

**ALGORITHM**
- Convert text into array separated by whitespace
- Loop through array
  - Filter for word
  - Return filteredArr
- Return length of filteredArr
OR
- Create regex of word
- Call match on textString, pass in regex as argument with global flag - returns an array
- Return length of array

**NOTES**
- \\b and \\b flags look for regex in between with whitespace either side
- create new regex -> let regex = new RegExp('pattern', 'flags');