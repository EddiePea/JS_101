**INSTRUCTIONS AND RULES**
- Function:
- Arg: string [sentence]
- Returns: string with every occurence of a [number_word] converted to corresponding [digit_char]
  - [number_word] = a word which designates a number (e.g. 'five')
  - [digit_char] = a string character which represents a digit (e.g. 0, 1, 2, 3 etc.)

**OUTLINE**
- INPUT: string (STR)
- OUTPUT: new string with number_words replaced by corresponding digit_chars

**ASSUMPTIONS**
- Number words will not go above 9

**TESTS**

**DATA STRUCTURE**
- Use array and corresponding index values for number_words
- Use array to loop through words

**ALGORITHM**
- SET array of number words (0-9) whose value corresponds to their index number, e.g. "zero" at index position 0 (numArr)
- Convert sentence to array of individual words (i.e. consecutive chars separated by whitespace) (wordsArr)
- Loop through wordsArr
  - Loop through numArr
    - If the current numArr element includes the current wordsArr element
      - replace current wordsArr element with numArr index number  
- Convert wordsArr back into a string with whitespace between each wordsArr element
- Return string

**NOTES**
- Watch out for punctuation marks
- Don't forget -> if you want to output a new string from old, you need to reassign value of old string to newString value
- If you're using 2 loops think -> is this really necessary??