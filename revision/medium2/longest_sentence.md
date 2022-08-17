**INSTRUCTIONS**
- Write program:
  - Prints longest [sentence] in a string AND word count
  - Length -> based on number of [words]

- Sentences:
  - May end with periods, exclamation points or question marks

- Words: 
  - Treat any sequence of chars that are not spaces OR [sentence_ending_chars] as a word
  - '--' = word

- WATCH OUT
  - Expected output
  - Make sure you [preserve] the punctuation from the end of the sentence
  - This problem -> manipulating and processing strings
  - So every detail about string matters -> case, punctuation, tabs, spaces

**OUTLINE**
- INPUT: string
- OUTPUT: log string with most words AND word count

**RULES**

**ASSUMPTIONS**
- If emtpy string return empty string with 0 word count
- Will only receive as arguments -> no need for validation
- If there are multiple sentences of the same longest length, return last longest sentence?

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
**ALGO -> first go*
- Convert input string into array of words (i.e. consecutive chars separated by whitespace) (wordsArr)

- SET longestSentenceArr to empty array
  - This stores the words of the longest sentence so far
- SET index counter to 0

- Create outer loop
  - Runs while index counter < wordsArr.length
- Set currentSentenceArr to empty array
  - This stores words of the current sentence
  - It is reset to an empty array on each iteration of the outerloop

- Create inner loop -> runs while currentword does not end with [.! or ?] - make sure it still adds word ending with termination char 
  - Add word to currentSentenceArr
  - Increment index counter by 1

- If currentSentenceArr.length > longestSentenceArr.length
  - longestSentenceArr = currentSentenceArr.splice();

- Return:
  - longestSentenceArr.join(' ');
  - Template literal: `The longest sentence has ${longestSentenceArr.length || 0} words`


**NOTES**
- Watch out -> when using split you might miss off the separating punctuation!