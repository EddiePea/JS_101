**LETTERCASE PERCENTAGE**

INSTRUCTIONS/RULES:
- Arg: string

- Return: object containing: 
  (i) percentage of string chars that are lowercase letters
  (ii) percentage of chars that are uppercase letters
  (iii) percentage of chars that are neither

- StR will always contain at least one char

ASSUMPTIONS:
- Whitespace counts as 'neither' char

INPUT: string

OUTPUT: object

TYPE OF PROBLEM:
- Filtering/selection
- Counting
- Identifying
- Storing
- Computation

DATA STRUCTURE:
- Array
- Object

BIG PICTURE:
- Going through each string char
- Categorising each string char as uppercase, lowercase or non-letter
- Calculating total percentage of each type of char in sentence
- Storing results in object

Two ways: 
- Use array -> filter array, count length of resulting array
- Use string -> increase count 

WATCH OUT:
- If you change a non-letter char to upper or lower case, it will equal itself still (no change)
- Numbers in object are (i) 2 dp and (ii) strings

ALGO:
1. Convert string into array

2. SET lowerCaseLetterNum to the number of lowercase letters in the array
  - Filter array for lowercase letters only 
  - Return lenght of filtered array

3. SET upperCaseLetterNum to the number of uppercase letters in the array

4. SET neither to the difference between arr.length and (lowerCaseNum + upperCase) etc.

5. Create helper function to calculate percentage of each char type in sentence
  - (arr.length / [chartypenum]) * 100 -> to 2dp

6. Populate Object with results

**TRIANGLE SIDES**
INSTRUCTIONS/RULES:
- arg: 3 lenghts of triangle numbers

- returns: classification (string)

- Type: 
  - Equilateral - 3 sides are equal
  - Isos - 2 sides equal, 1 side different
  - Scalene - all 3 sides diff

- Can get floating point nums

- If any side length === 0, invalid

ASSUMPTIONS:
- Will only get positive numbers (or zero) as args
- Will always get 3 args

INPUT: numbers x3

OUTPUT: string

TYPE OF PROBLEM:
- Logic flow problem -> if x then a, otherwise if y then b etc.
- Trying to work out the most efficient logic flow

DATA STRUCTURE:
- Conditional structure

BIG PICTURE:
- Trying to work out what type of triangle it is based on its side lengths, when given some logical rules about triangle types and their relation to side lengths 

WATCH OUT:
- Lengths can === 0 (but invalid)

ALGO:
1. If any of the args < 1 -> return invalid

2. Create 'isIsos' function -> returns boolean
  - takes 3 args -> nums, sides
  - return TRUE if:
    - side1 === side2 & side2 !== side3
    - side2 === side3 & side1 !== side3

3. Create 'is equil' function -> returns boolean
  - returns TRUE if: 
    - side1 === side2 && side2 === side 3

4. Create 'isScalene' function -> returns boolean
  - returns TRUE if: 
    - side1 !== side2 && side2 !== side3 && side3 !== side1

5. In main function, create switch statement:
  - where main case is (true)
  - Use 3 funcs above
  - Default: 'invalid'


**TRI-ANGLES**

INSTRUCTIONS/RULES:
- Args: numbers x 3 (angles of triangle)

- Returns: string (classification of triangle type, based on angle sizes)

- All angles have integer values

- Valid triangle: 
  - sum of angles === 180 
  - each angle > 0

- Right: 
  - 1 angle === 90

- Obtuse: 
  - 1 angle > 90

- Actue:
  - all angles < 90

ASSUMPTIONS:
- All angles are positive

INPUT: 3 numbers

OUTPUT: string

TYPE OF PROBLEM:
- Conditional logic flow

DATA STRUCTURE:
- conditional logic
- Numbers

BIG PICTURE:
- Trying to classify the type of triangle based on its angle sizes

WATCH OUT:
- Need to validate triangle first

ALGO:
1. Create valid triangle helper function

2. Sort angle sizes into order: small to large

3. If invalid triangle -> return invalid

4. Create logic flow to classify triangle: 
  - If biggest > 90 -> obtuse
  - If biggest === 90 -> right angle
  - Otherwise acute

**UNLUCKY DAYS**

INSTRUCTIONS/RULES:
- Arg: number (year)

- Return: number (number of friday 13ths in that year)

- year > 1752

ASSUMPTIONS:

INPUT: number

OUTPUT: number

TYPE OF PROBLEM:
- Computation problem
- Date generation problem -> using the Date object
- Count and store problem

DATA STRUCTURE:
- Number -> count
- Array -> for months

BIG PICTURE:
- For each month in the year -> get the day on which the 13th fell
- If it's a Friday, then add 1 to the count

WATCH OUT:

ALGO:
1. SET array of months

2. Create helper function which works if a given date is a Friday
  - return [date].getDay() === 5;

3. SET count to 0

3. Loop through monthsArr and for each month, and if '13 [month] [year]' is Friday add 1 to count
 - use forEach
- let date = new Date(`13 ${month} ${year}`)
- if (isFriday13(date)) {
  count += 1
}

4. Return count

**NEXT FEATURED**

INSTRUCTIONS/RULES:
- Arg: integer (num)

- Returns: integer -> next 'featured num' > num

- Featured num: 
  - Odd num
  - multiple of 7
  - each digits occurs just once each

- If no next featured num, return error

- Largest poss = 9876543201

ASSUMPTIONS:
- Will only get positive integer
- Will only get number arg

INPUT: number

OUTPUT: number

TYPE OF PROBLEM:
- Validation -> logic flows and 'checking' if things are included
- Computation 
- Counting and storing

DATA STRUCTURE:
- Array -> to check if digits occur just once
- Numbers -> count and store and loop

BIG PICTURE:
- Want to create a function that checks for featured nums
- Start count at num+ 1 and create a loop which runs until (i) largest num reached OR (ii) next featured num is returned

WATCH OUT:
- Set largest num to const -> avoid magic nums
- Will want loop I can break out of

ALGO:
1. Create 'isFeaturedNum' helper function -> it returns true if the num argument passed is a featured num
  - num % 2 === 1;
  - num % 7 === 0;
  - digits only appear once

1. A. helper function -> digits appear once: 
  - num -> string -> array of chars
  - Loop through each char: (every)
    - let extract = arr.slice(indx + 1);
    - return !extract.includes(char);

2. Create a loop which runs while num < MAX_NUM => inside the loop:
  - Increment num by 1
  - Ask if num === featuredNum -> if YES -> return num
  - Otherwise, continue...

3. Otherwise, return error message

**SUM SQUARE**
INSTRUCTIONS/RULES:
- Arg: count

- Returns: difference between (i) square of sum of first [count] positive integers and (ii) sum of squares of first [count] positive integers

ASSUMPTIONS:

INPUT: number

OUTPUT: number

TYPE OF PROBLEM:
- Computate and store
- Count -> loop

DATA STRUCTURE:
- Arrays - can make use of reduce

BIG PICTURE:
- Get list of all integers from 1 to count (inclusive)
- Use list to generate sum and then square it
- Use list to generate list of squares of each num, then add results
- Add 2 results

WATCH OUT:

ALGO:
1. SET num to 1

2. Generate an array of nums from 1 to count (inclusive):
  - new arr = new Array(count).map((_, indx) => return indx + 1);

3. SET squareOfSum to (i) array elements added together and (ii) then squared

4. SET sumOfSquares to (i) array elements transformed so that each is now a square of the last and (ii) added

5. Return squareOfSum + sumOfSquares

**LONGEST SENTENCE**
INSTRUCTIONS/RULES:
- Arg: string (text)

- Return: prints longest sentence in a string
  - Longest: based on number of words in sentence
  - Log (i) longest sentence AND (ii) wordcount in a string

- Sentence can end with grammar marks (., ! or ?)

- Any sequence of non-space or non-sentence ending chars = word, e.g. -- === word

- Preserve punctuation from end of sentence

ASSUMPTIONS:
- If same length sentences -> return first longest

INPUT: string

OUTPUT: string

TYPE OF PROBLEM:
- String manipluation
- Working out what counts as a word within a string (i.e. identifying patterns within a string)
- Counting and storing

DATA STRUCTURE:
- Array -> allows for easy separation of sentences AND words by sentence

BIG PICTURE:
- Split the input string into sentences -> need to work out where to split
- Split each sentence into words -> work out where to split into words
- Count num of words in each sentence
- Return longest

WATCH OUT:

ALGO:
1. SET sentences array to [].

2. Loop through input string and create a sentence extract which is added to the sentencesArr
  - SET starting indx to 0 to start
  - SET ending indx;
  - Loop through chars in string from starting indx => if char === ending punctuation, endingindx === indx of char + 1
  - SET sentence to str.slice(startingIndx, endingIndx)
  - ADD sentence to sentencesArr
  - Reassign starting index to endingIndx

3. Loop through sentencesArr and for transform each sentence, returning a new arry containing the lenghts of each sentence
  - Use map(sentence => return sentence.split(' ').length

4. Get the largest of the lengths in the lenghtsArr
  - Math.max(...lengthsArr)

5. Find the index num of the largest length 

6. Log: the sentence at the index num of largest length in the sentencesArr AND largest length in a template literal




