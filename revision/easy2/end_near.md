**INSTRUCTIONS**
- Function
- Returns penultimate word in string arg
- Words = any sequence of non-blank chars
- Assume str will always contain 2+ words

**OUTLINE**
- INPUT: string args in function
- OUTPUT: string => penultimate word in string

**REQUIREMENTS**
- Take string arg
- String will contain at least 2 words
- Words = sequence of non-blank chars

**ASSUMPTIONS**
- Non-blank = whitespace
- Even if words have numeric or symbolic chars, can form part of words

**TESTS**
console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

**DATA STRUCTURE**
- Convert input string to array
- Return string element

**ALGORITHM**
- Function taking 1 str arg
- Convert str into array
  - Each element = seqeunce of chars separated by whitespace
  - i.e. a word
- Return word at [str.length - 2] indx

**NOTES**

**MIDDLE WORD OF PHRASE*

**INSTRUCTIONS**
- Function
- Returns middle word of phrase

**OUTLINE**
- INPUT: string args in function
- OUTPUT: string => penultimate word in string

**ASSUMPTIONS / EDGE CASES**
- Only 1 word - return that word
- Only 2 words - return second word
- Even number of words - return word mid+1 
- Empty string - return empty string
- Whitespace string - return empty string

**TESTS**

**DATA STRUCTURE**

**ALGORITHM**
- Convert string to array
- Count length of array
  - If length === 0 - return empty string
  - CHECK this is dealt with by split(' ')
  - length % 2 === 0
    - Return element at index [length/2] + 1
  - OTHERWISE:
    - Return element at index Math.floor[length/2]

**NOTES**
- Might not need break in switch statemnet where you return each time...