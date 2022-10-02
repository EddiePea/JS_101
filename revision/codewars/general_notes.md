**LONGEST VOWEL CHAIN**

INSTRUCTIONS/RULES:
- Arg: lowercase string with alphabetic chars and no spaces

- Return: length of longest vowel substring
  - vowel substring = any consecutive vowels (a, e, i, o, u)

ASSUMPTIONS:
- Will only get a string containing alpha chars with no spaces

INPUT: string

OUTPUT: number

TYPE OF PROBLEM:
- Filtering -> finding vowels
- Extracting -> creating extracts of strings
- Counting and store

DATA STRUCTURE:
- Array -> store vowel substrings in an array

BIG PICTURE:
- Find all the vowel substrings in a string
- Transform substrings arr into lengths
- Return longest

WATCH OUT:

ALGO:

1. Loop through string and create extracts of substrings:
  - Convert string into an array separated by non-vowel chars

2. Transform substrings Arr into corresponding lengths of each substring
  - lengthsArr = substrings.map(substring => substring.lenght);

3. Return greatest length
  - return Math.max(...lengthsArr)

**NON-EVEN SUBSTRING**

INSTRUCTIONS/RULES:
- Arg: string of integers

- Return: number of odd numbered substrings
e.g. '1341' -> 1, 13, 1341, 3, 341, 41, 1

- Can have repeated substrings -> not all unique substrings

ASSUMPTIONS:

INPUT: numeric string

OUTPUT: number

TYPE OF PROBLEM:
- Filtering -> looking for odd nums
- Extraction -> creating substrings from string
- Count and store

DATA STRUCTURE:
- String -> loop through
- Array -> store results

BIG PICTURE:
- Generating all substrings from string
- Filtering for odd substrings
- Counting number

WATCH OUT:
- Not unique substrings!
- Make sure entire number is included

ALGO:
1. SET substringsArr to []

2. Loop through each char of string -> generate substrings starting from indx 0, then indx 1 etc. 

  - Create inner loop -> create extracts starting from outer loop current element

  - SET extract to part of string starting from current indx, then adding one char until the end of the string
    e.g. '1341'
          let count = 1;
          currentChar = '1'
          currentIndx = 0
          extract = str.slice(currentIndx, currentIndx + count)
          Increment count by 1

  - On each inner loop, add extract to substringsArr

3. Filter substringsArr for strings which, when turned into numbers, divide by 2 unevenly

4. Count length of filteredArr

**REPEATED SUBSTRING**
INSTRUCTIONS/RULES:
- Arg: non-empty string

- Return: array: ['longest substring', number of times it repeats to make string]
 - maximum substring (t) and maximum num (k) -> string = 't' repeated 'k' times

ASSUMPTIONS:

INPUT: string

OUTPUT: array with string and number element

TYPE OF PROBLEM:
- Extracting -> create substrings 
- Patterns
- Counting and storing

DATA STRUCTURE:
- String and loop for extraction 
- Array for storing

BIG PICTURE:

WATCH OUT:

ALGO:
1. Get length of input string -> this is longest possible length of a single substring pattern

2. Generate all leading substrings -> because pattern has to start with indx[0] each time
  - Loop through string
  - Create extract starting from indx 0 each time and adding on 1 new char each time until the end of the string 

3. Loop through substrings and ask if you create a string by taking the substring and repeating it so that the end result is the maxLength -> does it equal the input string
  - If it does, add it to a substring patterns array

4. Loop through substring patterns arr and transform it to create an array of the lengths of each substring

5. Get index num of greatest substring in lengthsArr - indexNum

6. Return array containing (i) substring at substringPattersnsArr[index Num] and (ii) greatest substring lenght from lengthsArr

**PANGRAM**
INSTRUCTIONS/RULES:
- Arg: string

- Return: boolean: 
  - TRUE if string === pangram
  - FALSE otherwise

- Pangram: sentence containing every single letter of alphabet AT LEAST once (can be reapeated)

- Case insensitive
- Ignore numbers and punctuation

ASSUMPTIONS:

INPUT: string

OUTPUT: boolean

TYPE OF PROBLEM:
- Matching
- Checking

DATA STRUCTURE:
- String -> can loop through 

BIG PICTURE:
- Create string of alphabetical chars
- Loop through alpha string and ask if each char is included in the input string (in lowercase)
- If it's not -> return false
- Otherwise return true after the loop 

WATCH OUT:
- Does punctuation change things?
- Cases

ALGO:
1. SET string of alphabetic chars in lowercase a-z

2. Loop through the alphaString -> ask if each char is included in the input string
  - IF NO -> function returns false

3. If loop ends and all chars included -> return true

**SCRAMBLIES**
INSTRUCTIONS/RULES:
- Arg: strings x2
  - Only lowercase
  - Only letters -> no punctuation or numbers

- Returns: boolean
  - TRUE if SOME string1 chars can be rearranged to match str2

ASSUMPTIONS:

INPUT: strings x2

OUTPUT: boolean

TYPE OF PROBLEM:
- Filter
- Check if x includes
- Looping

DATA STRUCTURE:
- Array -> can use the 'every' method

BIG PICTURE:
- Searching for all of the chars in str2 in string1
- If they're all there, return true

WATCH OUT:

ALGO:
1. Turn str2 into an array of chars

2. Loop through str2 chars and check if every one is included in str1
  - e.g. str1 => rkqodlw
         str2 => 'world'

         str2 -> [w, o, r, l, d]
         str2.every(char => str1.includes(char))

**MULTIPLES OF 3 OR 5**

INSTRUCTIONS/RULES:
- Arg: num (indicates stopping point)

- Return: sum of multiples of 3 or 5 between 1 and num (exclusive)

- If num < 0 -> return 0

ASSUMPTIONS:

INPUT: number

OUTPUT: number

TYPE OF PROBLEM:
- Computation 
- Filtering 
- Counting and storing

DATA STRUCTURE:
- Array

BIG PICTURE:
- Create loop which starts at 3 and counts up to (not including) num
- Ask if current count is divisible by 3 or 5 
  - If yes -> add it to a results array
- Sum resultsArr

WATCH OUT:
- Don't duplicate - 3 and 5
- Don't forget all args of reduce!
- Check 3 is right starting point

ALGO:
1. SET multiplesArr to [];

2. Create loop which starts from 3 and runs while count < num
  - IF count % 3 === 0 || count % 5 === 0
  multiplesArr.push(count);
  count += 1

3. Get sum of all nums in multiples arr

**GREATEST PRODUCT**

INSTRUCTIONS/RULES:
- string: of digits

- returns: number
  - the greatest product of 5 consecutive digits in digitsString

ASSUMPTIONS:

INPUT:

OUTPUT:

TYPE OF PROBLEM:
- Extraction -> getting all 'substrings' of 5 consecutive digits
- Computation -> working out product of those nums
- Selection -> getting biggest product

DATA STRUCTURE:
- Array -> to store substrings and to compute

BIG PICTURE:

WATCH OUT:

ALGO:

1A. SET subStringsArr to [];

1. Get all substrings of length 5 from digitString
  - Loop through digitsString
  - Create substring of length 5-> extract string starting from current char index and ending at indx + 4
  - Add substring to Arr

2. Transform substringsArr so that each is replaced with the product of those nums
  - substringsArr.map(numString => {
    return [...numString].reduce((a, b) => a * b, 1);
  })

3. Return the largest of the productsArray

**DUPLICATE COUNT**

INSTRUCTIONS/RULES:
- Arg: string

- Return: number => count of distinct, case insensitive alphabetic chars and numeric digits that occur more than once in the input string
  - i.e. find how many different letters or numbers are repeated in a string

ASSUMPTIONS:

INPUT:

OUTPUT:

TYPE OF PROBLEM:
- count and store
- filter 

DATA STRUCTURE:
- Array to make use of filter

BIG PICTURE:

WATCH OUT:

ALGO:
1. Convert string into array of separate chars

2. Make array all lowercase

3. SET count to 0

4. Loop through charArr to see if any char is repeated:
  - filter charArr for currentChar
  - if returned array.length > 1 => count += 1

5. Return count;

**TRANSFORM TO PRIME**
INSTRUCTIONS/RULES:
- Arg: array of integers

- Return: minimum number to be added to array so that sum of all elements = closest prime num

ASSUMPTIONS:

INPUT:

OUTPUT:

TYPE OF PROBLEM:

DATA STRUCTURE:

BIG PICTURE:
- Sum all elements -> e.g. 6

- Generate next prime number after sum
  - sum += 1
  - check if prime: 
    - create loop where count starts at 2 and increases by 1:
    - if num % count === 0 {
      return false 
    } 

- Return difference between sum and next prime

WATCH OUT:

ALGO:

**FIND ODD**
INSTRUCTIONS/RULES:
- Arg: array of integers

- Return: integer 
  - One that appears an odd number of times

ASSUMPTIONS:

INPUT:

OUTPUT:

TYPE OF PROBLEM:

DATA STRUCTURE:

BIG PICTURE:

WATCH OUT:

ALGO:
1. Loop through array -> with possibility of breaking

2. Filter array for currentNum:
 - return if char === currentNum

3. Count length of filteredArr -> if odd, return currentNum

**UNIQUE**
1. Loop through array

2. Check if currentNum is repeated:
  - If you filterArr for currentNum -> is length of resulting arr greater than 1? If yes, move on

3. Otherwise stop and return currentNum

**SAME**

1. Sort both arrays in numerical order

2. Take arr1 and transform it, squaring its elements 

3. Loop through arr2 and ask if arr2[indx] === transformedArr[indx] -> if true for every single element, return TRUE otherwise return FALSE

**SUM OF PAIRS**
1. Create array of all possible pairs in order:
  - Substrings
  - Outerloop -> loop through array
    - Inner loop: while indx + count < arr.length
      - Create subArray of [indx, indx + count] indx +2 etc.

      [[11, 3], [11, 7], [11, 5]] etc.

2. Filter array for pairs that create sum of num

3. Transform array to create array of index Nums summed
  - Indx of num1 in arr
  - Indx of num2 in arr

4. Find minumum sum in indexNumsArr

5. Return pair at indexNumsum OR undefined