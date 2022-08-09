**INSTRUCTIONS**
- Function - STR arg
- STR_ARG => 0+ [space separated] [words]
- Returns OBJ
- OBJ -> shows number of [words] of [different sizes]
- Word = any sequence of non-space chars

**OUTLINE**
- INPUT: string - made up of 0+ 'words' separated by spaces
- OUTPUT: object -> keys (word length) + values (number of words of that length in STR_ARG)

**REQUIREMENTS**
- Takes STR argument
- STR argument -> made up of 0 or more WORDS
  - Words = sequence of non-space chars
  - Words in STR are separated by spaces
  - Spaces = whitespace
- Empty string -> returns empty object

**ASSUMPTIONS**
- Any char types can appear in the string, e.g. symbols, special chars, numbers etc.
- A single word will include any punctuation adjacent to it (and not separated by whitespace, e.g. 'seven.' -> length = 6)

**TESTS**
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

**DATA STRUCTURE**
- Object
- Might use array inside for looping

**ALGORITHM**
- Convert STR ARG to array of words (i.e. any sequence of chars separated by spaces)
  - Could use split('');
- Transform wordsArr into array of word lengths, e.g [3, 4, 5, 2]
- SET resultsObject
- LOOP through lengthsArr
  - IF resultsObj[lengthsArr[i]] (TRUTHY, i.e. not 0 or not present, so undefined)
  - THEN resultsObj[lengthsArr[i]] += 1;
  - OTHERWISE resultsObj[lengthsArr[i]] = 1;
- Return resultsObject

**NOTES**
- Don't forget that you can use short-circuit evaluation!
