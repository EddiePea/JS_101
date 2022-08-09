**INSTRUCTIONS**
- Function
- Takes string of [words] - STR
- Swap [first_letter] and [last_letter] of every [word]
- Assume -> 
  - Every [word] contains at least one [letter]
  - STR always contains at least one [word]
  - Each STR only contains [words] and [spaces]
  - No [leading], [trailing] or [repeated_spaces]

**OUTLINE**
- INPUT: string [STR]
- OUTPUT: new string, where [first_letter] of each [word] in [STR] is swapped with [last_letter]

**REQUIREMENTS**
- Swap first char of each word with last char of that word
- If there is only one word, swap first char with last char
- If there is only one char in a word, return that word as is

**ASSUMPTIONS**
- [word] = sequence of consecutive characters bounded by whitespace or quotation marks
  - includes punctuation marks and symbol chars, e.g. commas, exclamation marks (as if they were letters)
  - includes numeric chars
  - Always includes at least 1 letter
- [letter] = char from [a-z] or [A-Z]
- [first_letter_of_word] = char at indx position [0]
- [last_letter_of_word] = char at indx position [word.length - 1]
- [space] = whitespace
- [leading_space] = space in front of first word in string, e.g. '  hello' 
- [trailing_space] = space at end of last word in string, e.g. ['hello  ']
- [repeated_space] = consecutive whitespaces, e.g. '   ' 
- Empty string -> return empty string => woud this fit in the whitespace rule?

**TESTS**
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
swap('')  // 'a'

**DATA STRUCTURE**
- String
- Consider array

**ALGORITHM**
- Convert STR into arr of words
- Loop through words array
  - For each word -> turn word into array of chars
    - SET first letter = last letter (charArr.length - 1)
    - SET last letter = first letter (charArr[0])
  - Join word to create string
  - Add to newArr 
- Join newArr to create string 
- Return string

**NOTES**
- Ask yourself what you're doing to something -> if you're transforming it, think about using map