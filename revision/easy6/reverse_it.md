**INSTRUCTIONS**
- Function
- String arg [STR]
- Returns new String -> contains [words] from STR [in_reverse_order]

**OUTLINE**
- INPUT: string
- OUTPUT: new string with words in reverse order

**REQUIREMENTS**
- Empty string returns empty string

**ASSUMPTIONS**
- Words = sequential characters (of any type) demarcated by whitespace (or the end of the string)
- Reverse order => 'one two three' -> 'three two one'
- String with whitespace returns emtpy string

**TESTS**
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"f

**DATA STRUCTURE**
- String
- Maybe use array inside function

**ALGORITHM**
- Convert input string into array - separate words using whitespace delimiter
- Reverse array
- Join to form string
- Return string

**NOTES**
- Watch out for array missing out whitespace