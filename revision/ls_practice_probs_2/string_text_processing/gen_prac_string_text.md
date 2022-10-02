**UPPERCASE CHECK**

INSTRUCTIONS/RULES:
- Arg: string

- Returns: boolean
  - TRUE if all alphabetic chars in str = upperCase
  - FALSE otherwise
  - Ignore non-alphabetic chars

- Empty string -> return true

ASSUMPTIONS:
- Will always get string arg

INPUT: string

OUTPUT: boolean

DATA STRUCTURE:
- Array -> can use filter
- Loop through string chars

TYPE OF PROBLEM:
- String processing
- Iteration

BIG PICTURE:
- Go through all string chars and work out (i) which ones are alphabetic and (ii) if those alpha chars are uppercase

ALGO:
1. Filter the string for non-alpha chars -> no need for this step as non-alphchar.toUpperCase() === non-alphaChar
  - Convert string to array of individual chars
  - Return only those chars that return true: (/[a-z]/gi).test(char)

2. Get length of filteredArr
  - filteredArr.length

3. Filter filteredArr for upperCase arrs
  - Filter filteredArr
  - Return char === char.toUpperCase();

4. If upperCaseArr.length < filteredArr.length -> return false

OR

1. Convert string to array of chars

2. Loop through charsArr -> ask if every char.toUpperCase === char

3. If all return true, then function returns true; otherwise returns false

**DELETE VOWELS**

INSTRUCTIONS/RULES:
- Arg: array of strings

- Returns: array of same string values but with vowels removed

- If string element consists entirely of vowels, return empty string

ASSUMPTIONS:
- Return a new array
- Will always be given an array argument
- Arr arg will always contain string elements (at least 1)

INPUT: array containing string elements

OUTPUT: array containings string elements

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- Transformation 
- Filtering

BIG PICTURE:
- Go through inputArr -> go through each element -> go through each char in each element and remove vowels 

ALGO:
1. Loop through inputArr to transform it: 
  - Return same num of elements but changed

2. Within outer loop, loop through each word in inputArr to transform it to remove the vowels:
  - split word into array of chars
  - filter through charsArr
  - return char if it doesn't equal a vowel
  - join resulting filteredCharsArr to form a string
  - Return string to outer loop

3. Transformed word included in transformed arr.

4. Return transformedArr

**LETTERCASE COUNTER**

INSTRUCTIONS/RULES:
- Arg: string

- Return: object containing 3 properties:
  - number of lowercase chars
  - number of uppercase chars
  - number of chars that are neither (i.e. non-alphanumeric chars)

- Empty string: value 0 for all 3 properties

ASSUMPTIONS:
- Will always get string input

INPUT: string

OUTPUT: object

DATA STRUCTURE:
- Loop through string
- Add results to object

TYPE OF PROBLEM:
- count and store
- iteration

BIG PICTURE:
- Loop through the string and count number of uppercase, lowercase and neither chars

ALGO:
1. SET resultsObj to { lowercase: 0, uppercase: 0, neither: 0}

2. Loop through string -> to end, to count char type occurences
   - if ((/[a-z]/g).test(char)) -> resultsObj.lowercase += 1
   - if ((/[A-Z]/g).test(char)) -> resultsObj.uppercase += 1
   - Otherwise neither += 1

3. Return resultsObj

**CAPITALIZE WORDS**

INSTRUCTIONS/RULES:
- Arg: string

- Returns: string with first char of every word capitalized and all subsequent chars lowercase

- Assume word = sequence of non-whitespace chars

- first char includes non-alpha chars, e.g. punctuation, numbers etc.

ASSUMPTIONS:
- Will always get string input
- If char is uppercase anyway, return char as is

INPUT: stirng

OUTPUT: string

DATA STRUCTURE:
- Array -> easy to separate into separate words
- Can transform wordsarray

TYPE OF PROBLEM:
- Transformation problem
- Extraction problem

BIG PICTURE:
- Want to loop through each word in the string, find the first char, and return the first char to uppercase and rest of chars to lowercase 

ALGO:
1. Convert string into array of words

2. Loop through wordsArr and transform each word -> so that first char is toUpperCase and rest are to lower case
  - SET first char to word[0].toUpperCase()
  - SET remainder to word.slice(1).toLowerCase()
  - Return firstChar + remainder

3. Convert transformed wordsArr back into string

4. Return string

**SWAP CASE**

INSTRUCTIONS/RULES:
- Arg: string

- Return: string with char case swapped

ASSUMPTIONS:

INPUT: string

OUTPUT: string

DATA STRUCTURE:
- Array to use transformation

TYPE OF PROBLEM:
- Transformation problem

BIG PICTURE:
- Go through each string char -> swap the case of each char

ALGO:
1. Convert string into array of chars

2. Loop through charsArr to transform it -> so that each uppercase char becomes lowercase and vice versa
 - Loop through charsArr to end
 - IF char.toUpperCase() === char, return char.toLowerCase()
 - OTHERWISE return char.toUpperCase()

3. Convert transformedArr into string

4. Return string

**STAGGERED CAPS**

INSTRUCTIONS/RULES:
- Arg: string

- Returns: string with staggered capitalization scheme
  - Every otehr char (from char 1) capitalised
  - Next char => lowercase or non-alphabetic char

- Now ignore non-alpha chars in determining if something should be UC or LC

ASSUMPTIONS:

INPUT: string

OUTPUT: string 

DATA STRUCTURE:
- Array -> can use transformation method

TYPE OF PROBLEM:
- Transformation

BIG PICTURE:
- Want to go through each char in string -> if count is odd transform to uppercase, otherwise to lowercase; increase count each time if char is alphabetic

ALGO:
1. Convert string into arr of chars

1A. SET count to 0;

2. Loop through charsArr and transform chars
  - go thrugh each char
  - If char is alphabetic -> increase count by 1
  - If count % 2 === 1, return char.toUpperCase()
  - Otherwise return char.toLowerCase()

3. Convert transformed charsArr into string

4. Return string

**HOW LONG**

INSTRUCTIONS/RULES:
- Arg: string

- Return: array that contains every word from string
 - Each word followed by word length in string

- If arg = empty string OR if no arg passed, return empty arr
  e.g. wordLengths('') -> []
       wordLenghts() -> []

ASSUMPTIONS:

INPUT: string

OUTPUT: array containing string elements 

DATA STRUCTURE:
- Array 
- Transform array

TYPE OF PROBLEM:
- Count
- Transformation

BIG PICTURE:
- Go through string, count the length of each word, return an array that contains a string consisting of (i) word and (ii) length

ALGO:

1A. if str.length is a falsy value, then return []

1. Convert string into array of words

2. Loop through wordsArr and transform each word so that it is replaced by 'word length'
  - Take each word and get its length 
  - Concat word + space + length to form new string
  - Return concatenated string

3. Return transformed arr

**SEARCH WORD**
INSTRUCTIONS/RULES:
- Arg: word, string (text)

- Return: integer -> number of times word appears in text

ASSUMPTIONS:

INPUT: 2 strings 

OUTPUT: number

DATA STRUCTURE:
- String

TYPE OF PROBLEM:
- Search
- Count

BIG PICTURE:
- Filter text for 'sed' 
- Return number of occurences

ALGO:
1. Create new regex pattern => 'word'

2. Generate array containing occurences of 'word' in text

3. Return length of array

OR

1. Convert text into array of words

2. Filter for words that === 'word' (or 'Word')

3. Count length of returned arr

**SEARCH WORD 2**

INSTRUCTIONS/RULES:
- Arg: stringsx2 (word, text)

- Return: text with every instance of word highlighted
  - **WORD**

ASSUMPTIONS:

INPUT: 2 strings

OUTPUT: 1 string

DATA STRUCTURE: 
- Array
- Can make use of transform

OR 

- String
- ReplaceAll

TYPE OF PROBLEM:
- Search 
- Transform

BIG PICTURE:

ALGO:
1. ReplaceAll instances of 'word' with `**${word.toUpperCase}**`

OR 

1. Turn string into array of words

2. Loop through wordsArr and transform words that === 'word'

3. ...
