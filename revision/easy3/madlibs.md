**INSTRUCTIONS**
- create madlib [game] program
- create story template with BLANKS for words
- player constructs list of words
- words placed into story [BLANKS] -> amusing result
- prompt for noun, verb, adverb, adjective
- inject them into story template

**OUTLINE**
- INPUT: user string input (noun, verb, adverb adjective)
- OUTPUT: strings with user input added in appropriate places

**REQUIREMENTS**
- Get string input from user
- Put string input in right places in output string
- Print output string

**ASSUMPTIONS**
- User will enter the right kind of word -> no analysis needed (or possible probably)
- Whitespace -> invalid
- Numbers -> invalid

**TESTS**

**DATA STRUCTURE**
- template literal

**ALGORITHM**
- GET user input: (maybe in separate functions to get separate return values)
  - Validate input
    - IF whitespace -> invalid
    - IF (coerced to number) typeof === number (invalid)
  - Ask for noun
  - Ask for verb
  - Ask for adjective
  - Ask for adverb

- Create template literals with appropriate blanks for each kind of word
- Print template literals

//Deal with s
/*
- If double ss at end - add es (if see below)
- If no s at end - add s (if no 'you' or 'they' or 'we' before)
- If s at the end (i.e. have entered a noun with 's') remove s if (no you etc)
*/

**NOTES**