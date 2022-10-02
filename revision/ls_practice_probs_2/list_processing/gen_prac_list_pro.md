**SUM OF DIGITS**
INSTRUCTIONS/RULES:
- Arg: positive integer

- Returns: sum of num's digits

- Do not use for, while or do...while loop -> use series of methods

ASSUMPTIONS:
- Only going to get positive integer input
- 0 input returns 0

INPUT: number

OUTPUT: number

DATA STRUCTURE:
- Array -> can use reduce method
- Computation and array manipulation problem

ALGO:
*Big picture* 

1. Convert num into string 
  - String(num)

2. Convert numString into array of string digits
  - split('');

3. Transform numArr so that the string digits are now numbers
  - map and Number

4. Sum each number in numArr to produce total
 - reduce

5. Return total

**ALPHA NUMS**
INSTRUCTIONS/RULES:
- Arg - array of integers between 0 and 19

- Returns: array of integers sorted based on English word for each number

ASSUMPTIONS:
- return a new array

INPUT: array of integers

OUTPUT: array -> sorted

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- Array manipulation problem
- Transformation problem and sorting problem

BIG PICTURE:
- Rearrange an array of numbers based on the English word for each number

ALGO:
1. SET array of English words for numbers in order
- So that zero is at indx position 0 and so on

2. Create copy of input Arr and sort it based on the position of the numbers in the wordsArr
 - If wordsArr[num] > wordsArr[a] > wordsArr[b] return 1; otherway round, return -1; otherwise return 0 

3. Return copy of inputArr

**MULTIPLY PAIRS**

INSTRUCTIONS/RULES:
- Arg: 2 arrays
  - Each contains list of nums
  - Always a filled array

- Return: new array -> contains products of all combinations of num pairs between the two arrays

- Sort returned array in ascending numerical order

- Input arrays can be different lengths 

- OutputArr.length = arr1.length * arr2.length

ASSUMPTIONS:
- Input arrays can include negative nums
- Input arrayss will always include numbers

INPUT: 2 arrays

OUTPUT: 1 new array

DATA STRUCTURE:
- Arrays

TYPE OF PROBLEM:
- Computation
- Looping
- Compute and store

BIG PICTURE:
- Loop through one input array and multiply each of its elements by each of the elements in the other input array.
- Store the products in a new array
- Order new array numerically

ALGO:
1. SET resultsArr to []

2. Loop through arr1

3. Inside that loop, loop through arr2 and multiply the current arr1 element by each arr2 element
  - e.g. currentNum = 2
  2 * arr2[0] (4) -> 8
  2 * arr2[1] (3) -> 6 etc.

4. Each time, add the product to resultsArr

5. Order resultsArr numerically 

6. Return sorted resultsArr

**LEADING SUBSTRINGS**

INSTRUCTIONS/RULES:
- Arg: string

- Returns: list of substrings of str

- Each substring begins with first letter of str

- List ordered from shortest to longest

- If str.length = 1, return str

ASSUMPTIONS:
- Always expect string
- If empty string -> return string

INPUT: string

OUTPUT: array with string elements

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- string manipulation
- looping
- extracting parts of string and storing

BIG PICTURE:
- Create all possible leading substrings of the input string 

ALGO:
1. SET resultsArr to []

2. Create a loop which runs str.length times

3. Create extract of the string which takes 1st element, then 1st and 2nd etc.
  - str.slice(0, indx + 1)

4. Add extract to resultsArr

5. Return resultsArr

**ALL SUBSTRINGS**

INSTRUCTIONS/RULES:
- Arg: string

- Return: all substrings of string
  - Order returned list by where in the string the substring begins
  - So all substrings starting with indx 0 come first, then all that start at indx 1 etc.
  - Return each set from shortest to longest

ASSUMPTIONS:

INPUT: string

OUTPUT: array of substrings

DATA STRUCTURE: array

TYPE OF PROBLEM:
- substring extraction
- looping and storing

BIG PICTURE:
- Get all possible substrings from the input string working through each char in the string in order

ALGO:
1A. SET resultsArr to []

1. Loop through each char in the string

2. Inside that loop, create a loop which loops through an extract of the string starting from currentChar
 - e.g. starting 'a'
- create extract 'abcde'

- starting from 'b'
- create extract 'bcde'

- starting from 'c' 
- create extract cde' etc.

3. Inside that inner loop, extract part of the extractString from currentChar onwards adding one char to the substring each time
 - extract abcde
 - subStr1 = 'a'
 - then subStr2 = 'ab' etc.

4. Add that substring to resultsArr

**PALINDROMIC SUBSTRINGS**
INSTRUCTIONS/RULES:
- Arg: string

- Return: list of all palindromic substrings of STR
  - each substring must be sequence of chars that reads the same forwards and back
  - Sort substrings by order of appearance in input string, i.e. substring starting from indx 0 before substring starting from indx 1 etc.

- Consider all chars 

- Case sensitive, e,g, 'AcbcA' = pal, 'Abcba' not, 'Abc-bA' not

- single chars are NOT pals 

- If no pals -> return empty arr

ASSUMPTIONS:

INPUT: string

OUTPUT: array of strings

DATA STRUCTURE: array

TYPE OF PROBLEM:
- Palindrome
- Substring extraction
- Looping

BIG PICTURE:
- Trying to find all possible substrings in a given string
- Then checking if substrings are palindromes
- Returning those palindromes

ALGO:
1. Create an array of all possible substrings
  - SET subStrings arr to [];

  - Loop through input string -> until end
  - Create an extract of input string which starts at currentChar each time and includes the rest of the input string
    e.g. 'abcd' -> 'a', 'ab', 'abc' etc.
  
  - Inside loop, create a further loop which takes the extract and extracts substrings from that extract
    e.g. extract: 'abcd'
    substrings: 'a', 'ab'
    - extract substring from starting char to starting char +1, then +2 etc.
  
  - Add each substring to subStrings

  - Return subStrings

2. Create a helper function which checks if a string is a palindrome
  - Convert string into array of chars
  - Reverse array of chars
  - Join reversed array into string to create reversed string
  - Ask if string === reversed string
  - If TRUE === pal; otherwise not

3. Loop through array of substrings -> filter for those which are palindromes
  - Loop through arr of Substrings
  - If subString passed to pal helper function returns true, return it
  - Otherwise continue

4. Return filteredArr

**SUM OF SUMS**
INSTRUCTIONS/RULES:
- Arg: array of numbers
  - Will always contain at least one num

- Returns: sum of sums of each leading subsequence in ARR
  e.g. [3, 5, 2] -> (3) + (3 + 5) + (3 + 5 + 2) -> 21
  - Get sum of each possible leading 'subArr' within the array

- Num can include floating point nums, negative nums

- If arr.length = 1, return single element

ASSUMPTIONS:
- Num won't include NaN
- Num won't include infinity

INPUT: array of nums

OUTPUT: number

DATA STRUCTURE:
- Array -> make use of reduce and array splitting methods

TYPE OF PROBLEM:
- Array extraction 
- Computation

BIG PICTURE:
- Trying to get all leading 'subArrays' from arr
- Getting the sum of each subArray
- Summing each of the sums of each subArray

ALGO:
1. SET resultsArr to [] ? OR just use non-mutating method, e.g. map

2. Loop through arr until end -> generate extracts from the array starting from indx 0 each time and adding an element each time.
  - [3, 5, 2]
  arr.slice(0, indx + 1) -> [3]
  arr.slice(0, indx + 1) -> [3, 5]
  arr.slice(0, indx + 1) -> [3, 5, 2]

3. Inside the loop, get the sum of the numbers in each extract
 - extract.reduce((a, b) => a + b, 0); => 3
 - return 8
 - return 10

4. Add together each of the sums and return result 
 - TransformedArr.reduce

**GROCERY LIST**
INSTRUCTIONS/RULES:
- Arg: 2D array (grocery list)
  - Each element => fruit name + quantity num

- Return: 1D array
  - Each fruit name appears quantity times

ASSUMPTIONS:
- InputArr will always include number for quantity that is more than 0
- Fruit name and quantity will be arr[0] and [1] respectively
- Return new array?

INPUT: 2D array

OUTPUT: 1D array

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- Array transformation

BIG PICTURE:
- Loop through a nested array (where subArrs contain name and num) and return the name num times in an array

ALGO:
1. Loop through the 2D array and transform each element so that instead of a subArr we have the name string repeated num times

  - Assign the elements of each subArr to variable names
    e.g. [fruit, num] = subArr;
  
  - SET returnArr to [];

  - while num > 0
    - add 'fruit' to []
  
  e.g. ['apple', 3] -> ['apple', 'apple', 'apple']

  - Return returnArr

2. Return the flattened transformed array

**INVENTORY**

INSTRUCTIONS/RULES:
- Arg: inventory item ID and list of transactions
  - number
  - object

- Return array containing only transactions for inventoryItem
  - Array contains object elements

ASSUMPTIONS:
- Will always get (i) num and (ii) array (with object elements) args
- Object elements will always contain 'id', 'movement' and 'quantity' keys

INPUT: number and array with object elements

OUTPUT: array with object elements

DATA STRUCTURE:
- Array -> make use of filter 

TYPE OF PROBLEM:
- Array filtering problem

BIG PICTURE:
- Go through array argument looking for object elements that contain a key value pair "id: [num]"

ALGO:
1. Loop through inputArr to filter it

2. Return object element if transactions[id] === 'ID'

3. Return filtered array

**AVAILABILITY**

INSTRUCTIONS/RULES:
- Arg: number (ID) and array containing object elements

- Returns: boolean 
  - Is inventory item available? 
  - Return TRUE if sum of quantity values of item's transactions is greater than 0

- Note property movement: out decreases quanitity

ASSUMPTIONS:

INPUT:

OUTPUT:

DATA STRUCTURE:

TYPE OF PROBLEM:
- Filtering
- Count and store

BIG PICTURE:
- Trying to filter transactions for those with the right ID
- Then use the 'movement' property together with the 'quantity' property to work out if the quantity > 0 

ALGO:
1. Filter the transactionsArr for those with the right ID num

2. SET totalQuantity to 0

3. Loop through filtered transactionsArr to access movement and quantity properties: 
  - IF movement === 'in'
    - increase totalQ by quantity
  - Otherwise
    - reduce totalQ by quantity
  
4. Return TRUE if quantity ends up > 0; false otherwise













