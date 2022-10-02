**DOUBLE CHAR**

INSTRUCTIONS/RULES:
- Arg: string

- Return: new string with each char doubled

- Every char doubled, regardless of type, e.g. letter, special char (including whitespace)

- Case sensitive: so if char is 'H' output is 'HH'

- Empty string input -> empty string output

ASSUMPTIONS:

INPUT: string

OUTPUT: new string

DATA STRUCTURE:
- Array to transform chars
- Loop, transform, store problem

ALGO:
*Overall* double each char in the input string

1. Turn inputStr into array of individual chars
  - e.g. could use split('') or [...str] 

2. Loop through charsArr and transform individual chars into duplicate
  - e.g. could use map 
  e.g. if currentChar = 'e' return 'currentChar'.repeat(2); or currentChar + currentChar

3. Join transformed charsArr to form a string
  - transformedArr.join('');

4. Return string

**DOUBLE CHAR 2**

INSTRUCTIONS/RULES:
- Arg: string

- Return: new string where every consonent is doubled

- Vowels, digits, punctuation and whitespace should remain the same

ASSUMPTIONS:

INPUT: string

OUTPUT: string

DATA STRUCTURE:
- string 
- For loop

OR 
- Array
- map and filter

ALGO 1:
1. SET resultStr to ''

2. Loop through inputStr to duplicate letter chars:
  - If currentChar is [/a-z/gi] a letter -> add letter duplicated to resultStr
  - Otherwise add currentChar only to resultStr

3. Return resultStr

ALGO 2: 
1. Transform string into array of chars

2. Loop through charsArr and transform: 
  - Taking each char in turn
  - If char is a letter -> return duplicated char
  - Otherwise -> return char

3. Join transformed array into string 

4. Return string

**REVERSE NUM**
INSTRUCTIONS/RULES:
- Arg: positive integer
- Returns: num with digits reversed

- If num ends in zeros -> reverse drops zeros

ASSUMPTIONS:

INPUT: number

OUTPUT: number

DATA STRUCTURE:
- Array to make use of reverse built in method

ALGO:
**Overall** Trying to reverse the order of the digits in the input num and return that reversed num

1. Convert num into string 
  e.g. 12345 -> '12345'

2. Convert numStr into array of individual numeric chars
  e.g. '123' -> ['1', '2', '3']

3. Reverse numArr
  e.g. ['3', '2', '1']

4. Join numArr to string
  e.g. '321'

5. Convert reversedNumStr into number
  e.g. 321

6. Return number

**MIDDLE CHAR**
INSTRUCTIONS/RULES:
- Arg: non-empty string

- Return: middle char of string

- Char returned can include all char types, e.g. whitepsace, nums

- If str.length % 2 === 1 -> return 1 char
- Otherwise, return 2 chars

- If str.length === 1 -> return str

ASSUMPTIONS:

INPUT: string

OUTPUT: string

DATA STRUCTURE:
- String -> can use string element reference to access relevant chars

ALGO:
*Overall* Trying to find and return middle char or chars of the string

1. Get length of string

2. Get midpoint of the string 

3. If string length is even:
  - Return char at Math.floor midpoint AND
  - Return char at Math.ceil midpoint

4. If string length is odd: 
  - Return char at midpoint

**RETURN NEG**
INSTRUCTIONS/RULES:
- Arg: num

- Return: 
  - If arg is positive num, return negative version 
  - Otherwise return as is

- If arg is zero, returns -0
- If arg is -0 return -0

ASSUMPTIONS:
- Will only get nums as args
- Arg can be floating point
- Number won't include Infinity

INPUT: number

OUTPUT: number

DATA STRUCTURE:
- Just using numbers

- Computational problem

ALGO:
*Overall* Return input num as negative version of that num

1. Find out if num is positive or negative
 - Use Math.sign(num)
 - Will return 1 for positive, 0 for 0, -1 for negative

2. If num is positive make it negative
  - If result of calling Math.sign is 1 or 0
  - Multiply num by -1
  - Otherwise, return num

3. Return negative num

**COUNTING UP**
INSTRUCTIONS/RULES:
- Arg: integer (num)

- Returns: array containing all integers between 1 and num ascending

- Num = positive
- Num won't be 0

- If num = 1, return [1]

ASSUMPTIONS:

INPUT: number

OUTPUT: array of numbers

DATA STRUCTURE:
- Array

num -> array
3 -> [1, 2, 3]

*Count and store problem

ALGO:
*big picture* Creating an array of nums between 1 and num (ascending order)

1. SET resultArr to []

2. SET count to 1

3. Create a loop which runs until count > num
- On each loop, push count to resultArr
- Increment count by 1

  e.g. num = 3
      start -> count = 0
      iteration 1:
        - [1]
        - count = 2
      iteration 2: 
        - [1, 2]
        - count = 3
      iteration 3:
        - [1, 2, 3]
        - count = 4
        Loop ends

5. Return resultArr

**NAME SWAP**
INSTRUCTIONS/RULES:
- Arg: string -> first name, space, last name

- Return: new string -> last name, comma, space, first name

- Each name separated by space, consecutive chars

ASSUMPTIONS:

INPUT: string

OUTPUT: string

DATA STRUCTURE:
- Array -> makes swapping order easier
  - Can use reverse or reassignment

- String manipulation

ALGO:
*Big picture* Swap the order of the two parts of the string and separate them with a comma

1. Convert string into array of separate words

2. Rerverse wordsArr

3. Join wordsArr to produce a string, using ', ' separator

**SEQUENCE COUNT**
INSTRUCTIONS/RULES:
- Args: 2 integers 
  - First: count
  - Second: starting num of sequence to be created

- Return: array containing count elements
  - elems = multiple of startingNum

- Count >= 0 -> always positive integer
- startingNum = any integer (positive or negative)

- If count = 0, return []
- If starting num = 0, return array of count length populated by 0s

ASSUMPTIONS:

INPUT: 2 integers

OUTPUT: array of integers or empty array

DATA STRUCTURE:
- Array
- Can create a loop that runs up to count and can add elements to the array on each iteration

- Count and store problem

ALGO:
*Big Picture* Output an array of [count] length where the elements are multiples of startingNum (starting from startingNum)

1. SET resultsArr to [].

2. SET multiplier to 1

3. Create a loop which runs while resultsArr.length < count -> adding multiples of startingNum to resultsArr:
- starting num * multiplier
- add result to resultsArr
- multiplier incremented by 1

4. Return resultsArr

**REVERSE IT**

INSTRUCTIONS/RULES:
- Arg: string

- Returns: new string containing words from str in reverse order
  e.g. 'Hello World' -> 'World Hello'

- empty string input returns empty string

- word = consecutive sequence of chars separated by whitespace

ASSUMPTIONS:

INPUT: string

OUTPUT: new string

DATA STRUCTURE:
- Array -> can use the reverse method and separate words by whitespace easily
- BUT beware of mutating array! Doesn't matter = not an input

ALGO:
*Big picture* Reversing the order of words in an input string

1. Convert string into array of words

2. Reverse wordsArr

3. Join wordsArr and return string

**REVERSE IT 2**
INSTRUCTIONS/RULES:
- Arg: string - contains 1+ words
  - Only letters and spaces
  - Words separated by single space

- Returns: new string containing words of STR
  - All 5+ letter words have letters in reverse order
  - words of length 5 or more

ASSUMPTIONS:

INPUT: string

OUTPUT: new string

DATA STRUCTURE:
- Array -> can make use of reverse and filtering methods

- String manipulation problem

ALGO:
*Big picture* Work out which words have a lenght of 5+ and reverse the chars in those words

1. Convert string into array of words (separated by spaces)

2. Loop through wordsArr and transform the elements -> so that words which have 5+ chars are reversed and otherwise words are returned as is
  - Loop through all words in arr
  - If word.length > 4, transform it: 
    - Split word into individual charsArr
    - Reverse charsArr
    - Join charsArr to form string
    - Return string 
  - Otherwise, return word

3. Join the transformed wordsArr to produce a string

4. Return string

**REVERSED ARRAYS**

INSTRUCTIONS/RULES:
- Arg: array

- Returns: reverses ARR's elements in place
  - i.e. Mutate arr 
  - Return the same array object

- Cannot use reverse

ASSUMPTIONS:

INPUT: array

OUTPUT: same array, elements reversed

DATA STRUCTURE:
[1, 2, 3] -> [3, 2, 1]
- Use array
- Loop through and add/remove elements

- Array manipulation problem
- Iteration problem

ALGO:
*Big picture* Mutate the input array by reversing the order of its elements without using the reverse method

1. Create a loop which runs arr.length times

2. Inside the loop -> remove the last element of the array and add it to the front of the array
  - SET element to the return value of removing the last element of the arr
  - Add element to the front of the array
  - Repeat arr.length times

3. Return the reversed array

**MISSING PARENTHESES**
INSTRUCTIONS/RULES:
- Arg: string

- Return: boolean
  - True if all parentheses in the string are 'properly balanced'
  - False otherwise

- properly balanced: parentheses must occur in matching '(' and ')' patterns

ASSUMPTIONS:

INPUT: string

OUTPUT: boolean

DATA STRUCTURE:
- Filtering problem 
- Can use array to use inbuilt filter method

ALGO:
*Big picture* Trying to work out if the array contains matching pairs of parentheses

1. SET parensCount to 0

2. Loop through string and change count depending on whether the currentChar is '(' or ')'
- If char === '(' add one to parensCount
- If char === closing brackets, minus 1 from parensCount
- Inside the loop, if parensCount is ever less than zero, return false

3. If parentsCount = 0, return true; otherwise return false













