**When will I retire**

INSTRUCTIONS/RULES:
- Logs when user will retire
- Logs how many more years user has to work till retirement

TYPE OF PROBLEM:
- Getting input from user
- Computation with numbers
- Printing to console

ASSUMPTIONS:
- Years in integers
- No need to deal with half years or months

INPUT: numeric strings from user

OUTPUT: strings

DATA STRUCTURE:
- numbers
- strings

ALGO:
1. Get age from user
  - require('readline-sync')
  - 2 separate functions: getAge() and getRetirementAge()

2. Get retirement age from user
  - See above

3. Work out how many years of work left
  - RetiremnetAge - age = yearsLeft

4. Work out retirement year
  - Current year => const
  - Current year + yearsLeft = retirementYear

5. Print results to console 
  - Invoke getAge()
  - Invoke getRetirementAge()
  

**PALINDROMIC NUMS**
/*
INSTRUCTIONS/RULES:
- Arg: integer (num)
- Returns: boolean
  - TRUE if palindrome
  - FALSE otherwise

- Palindrome = same forwards as backwards
  e.g. 22 = TRUE
  - Inclues single digit nums

ASSUMPTIONS:
- Will always get integer (no need to check for decimals or non-numbers)
- This includes not getting Infinity or NaN
- Will not be passed negative numbers OR can ignore signs?

INPUT: number

OUTPUT: boolean

DATA STRUCTURE:
- Array - to reverse the number (via string conversion)

ALGO:
1. Convert number into string and set as 'numForward' variable
2. Convert string into array of separate digits
3. Reverse array, convert back into string and set as 'numBack' variable
4. Ask if numForward === numBack
   - If YES return true
   - If NO return false


e.g.

function isPalNum(num) {
  let numForward = String(num);
  let numBackward = [...numForward].reverse().join('');

  return numForward === numBackward;
}

*******

**RUNNING TOTALS**

INSTRUCTIONS/RULES:
- Arg: array of nums (ARR)
- Return: arr with same number of elements 
  - Each element value = running total from ARR

- If ARR = [], return []
- If ARR contains a single element => return arr with single element

ASSUMPTIONS:
- If ARR = [0] retturn [0]
- nums = integers (no floating point nums)
  - Can include negative nums

INPUT: array of nums

OUTPUT: array of nums

DATA STRUCTURE:
- Array -> transformation method
- Count and store problem

ALGO:
1A. If ARR.length === 0; return [];

1. Set count to 0 

2. Loop through inputArr transforming each element in turn
  - Count is reassigned the value of adding the currentElem to it
  - Return count

3. Return transformed array 

**LETTER COUNTER**

INSTRUCTIONS/RULES:
- Arg: string -> 0+ space separated words 
- Returns: object -> shows number of words of different sizes
  - Key value pairs where key === length of word and value === frequency of occurence

- Word === sequence of non-space chars
  e.g. can include punctuation, special chars, nums

- inputStr can === '' -> returns {}

ASSUMPTIONS:
- Order of the pairs doesn't matter => because putting them into an object

INPUT: string

OUTPUT: object

DATA STRUCTURE:
- Array -> separate out indvidual words
- iterate through -> get length and add to object

ALGO:
1. Convert string into arr of individual words

1A. Loop through wordsArr and filter for non-letter chars in each word
- Loop through each word to transform the word into one with no non-letter chars
- Loop through each letter of each word -> to filter out non=letter chars
 - Use regex (/[a-z]/gi).test(char) -. returns boolean

2. Set resultsObject to {}

3A. Iterate through arr and transform -> so that each word is now changed to its length
  - Iterate through lengths Arr
  - If currentLength is contained in resultsObj -> increase resultsObj[currentLength] value by 1
  - Otherwise, assign it the value 1

3B. Iterate through arr
  - Get length of each word
  - If resultsObj[length] exists, then increase value by 1
  - Otherwise assign value of 1

4. Return resultsObj

*********

**LETTER SWAP**

INSTRUCTIONS/RULES:
- Arg: string of words separated by spaces
- Returns: string
  - With first and last letters of each word swapped

- Every word contains at least one letter
- inputStr.length > 0
- inputStr -> contains only words and spaces (no leading, trailing or repeated) 

ASSUMPTIONS:

INPUT: string

OUTPUT: string

DATA STRUCTURE:
- Array -> easy to separate into individual words
- Transform each word -> consider using map

ALGO:
1. Convert inputStr into array of words (i.e. space separated consecutive groups of chars)

2. Loop through each word and transform it, returning an array of transformed words.
  - Convert each word into array of chars
  - Reassign first and last chars to equal each other
  - Convert mutated charsArr back into string
  - Return transformed string

3. Convert transformed wordsArr into a string of words (separated by whitespaces)

4. Return string

**CUTE ANGLES**

INSTRUCTIONS/RULES:
- ARG: floating point num -> represents angle between 0 and 360
- Returns: string
  - Represents angle in degrees, mins, seconds
  - Use degree symbol, single quote and double wuote

- 360 input -> can return 0°00'00" or 360°00'00"

- num = in degrees -> so take whole degrees for degree number
  - Take remaining degrees and divide by 60 to get minutes
  - Take remaining minutes and divide by 60 to get seconds

- 1 place for degrees is fine
- Always 2 spaces for mins and seconds, e.g. fill with 0s at start if 1 digit long

ASSUMPTIONS:

INPUT: number

OUTPUT: string

DATA STRUCTURE:
- numbers and strings
- Template literal

- 76.73 -> 
  degrees -> 76
  minutes -> (76.73 - 76 = .73) / 60 (save and ignore remainder)
  seconds -> remainder / 60

ALGO:
1. SET degrees to degrees number
  - degrees = Math.floor(num);

2. SET minutes to minutes number
  - minutesWithRem = (num - degrees) / 60 
  - minutes = Math.floor(minutesWithRem) 

3. SET seconds to seconds number
  - (minutesWithRem - minutes) / 60

4. Ask if mins/seconds number has more than one digit
  - Convert num into string and get length
  - While length < 2, add 0 to start of string
  - Return lengthened string

5. Add variables to template literal and return string

**COMBINING ARRAYS**

INSTRUCTIONS/RULES:
- Args: 2 arrays (always arrays)

- Returns: array -> union of values of the two inputArrs

- Return arr -> remove all duplicates between and within original arrs

ASSUMPTIONS:
- Don't mutate original arrays -> return new array
- Arrays can contain elements of any data type
  - If elements === objects, they are not the same objects, so duplicated object elements possible (as they are not part of the same object)
- Order doesn't matter?

INPUT: 2 arrays

OUTPUT: 1 array

DATA STRUCTURE:
- Arrays
- [1, 3, 5] [ 3, 6, 9] -> [1, 3, 5, 6, 9]

- Join the arrays -> concat
- Filter arrays for duplicates

ALGO:
1. Join the two input arrs to create a new joinedArr

2. Filter joinedArr to remove duplicates
- Loop through joinedArr
- Create subArr of elements from currentIndx + 1 to end
- If current element is included in subArr -> do not return it and otherwise return it to be included in filteredArr

3. Return filteredArr

**HALVSIES**
INSTRUCTIONS/RULES:
- ARG: Array
- Returns: array with 2 subarray elements
  - Put first half of Arr elements into first subArr
  - Put second half in second subArr
  - If arr.length % 2 === 1 -> put middle element in first subArr

- If arr === [] -> return ([], [])
- If arr === [1] -> return ([1], [])

ASSUMPTIONS:
- Always going to receive an array argument -> no need to cater for non-array arguments

INPUT: array

OUTPUT: array containing 2 subarrays

DATA STRUCTURE:
- Arrays
[1, 2, 3] => [1, 2], [3]
- Array manipulation

ALGO:
1. SET resultsArr to [[], []]

2. SET midPoint to midpoint of Arr
  - Divide by 2 and round up
    e.g. if 5 -> midpoint is 3
         if 4 -> midpoint is 2

3. Loop through arr until end and add elements to resultsArr:
  - SET count to 1
  - If count <= midpoint, add element to resultsArr[0]
  - Otherwise, add element to resultsArr[1]
  - Increment count by 1

4. Return resultsArr

**FIND DUPLICATE**
INSTRUCTIONS/RULES:
- ARG: unordered arr
  - exactly one value in arr occurs twice and others once

- Return: determine which value occurs twice

ASSUMPTIONS:
- Array can contain numbers and strings
- If elems = strings, case sensitive
- Array doesn't contain objects -> not exactly the same

INPUT: array

OUTPUT: number

DATA STRUCTURE: 
- Array

[1, 5, 3, 1] -> 1

ALGO:
**Overall Problem* Search through input array and return the repeated element

1. Loop through arr to (i) repeated elem OR (ii) end
  - Use for loop - can break out 

2. Create subArr of elements from currentElem indx + 1

3. Ask if currentElem is included in subArr:
  - If YES, return currentElem
  - If NO, continue loop

**COMBINE**

INSTRUCTIONS/RULES:
- ARGS: two arrs

- RETURN: new arr -> contains all ements from arrs with each element alternated

- Both arrs = non-empty 
- Both arrs have same num of elements

ASSUMPTIONS:
- First element in new arr = arr1[0] (i.e. the first element argument)

INPUT: 2 arrs (same length, non-empty)

OUTPUT: new arr

DATA STRUCTURE:
- Array
- [1, 2, 3] ['a', 'b', 'c'] -> [1, 'a', 2, 'b', 3, 'c']

- Array manipulation

ALGO:
1. SET empty array resultsArr

2. Create loop that runs while resultsArr.length < arr1.length * 2
  - SET count to 0
  - Add arr1[count] to resultsArr
  - then add arr2[count] to resultsArr
  - Increment count by 1

3. Return resultsArr

**MULTIP AVERAGE**

INSTRUCTIONS/RULES:
- Arg: array of integers

- Returns: string -> 
  - Multiplies integers
  - Divides result by num of elements in arr
  - Returns result as string value rounded to 3 dp

ASSUMPTIONS:
- Can be negative integers
- Can include 0?

INPUT: array of integers

OUTPUT: numeric string

DATA STRUCTURE:
- [3, 5] -> '7.500'
- Use arrays to get num -> can make use of reduce

- Computation 

ALGO:
1. Multiply all integers together
- Loop through arr
- Starting from first num multiply one by the next, then the next by the result and so on 

2. Divide result by length of arr

3. Convert result to 3 dp and return as string
  - Consider using toFixed(3) -> this converts into a string anyway

**LIST OF DIGITS**
INSTRUCTIONS/RULES:
- Arg: positive integer
- Returns: list of digits in num (arr form)

ASSUMPTIONS:

INPUT: number (positive integer)

OUTPUT: array of numbers

DATA STRUCTURE:
- Array

num -> array of nums

ALGO:
Overall -> take a number, separate it into digits, add to an array

1. Convert num into string

2. Convert numStr into array of string digits

3. Transform digitsArr into array of numbers
  - Consider using map

4. Return transformed digitsArr

**HOW MANY**

INSTRUCTIONS/RULES:
- ARG: array of elements
- Return: strings
  - count number of occurences of each elemn in ARR
  - Once counted log each elem plus occurences num

- Strings in arr -> case sensitive

ASSUMPTIONS:
- Arr will only contain numbers or strings

INPUT: array

OUTPUT: strings -> containing numbers

DATA STRUCTURE:
['car', 'car', 'truck' etc] -> car = 4 etc.
Object => count and store exercise

ALGO:
1. SET countObj to {}

2. Loop through arr till the end:
  - Find out how many times each elem appears in the array and add that to count Obj
  - if countObj[elem] exists -> add one to its value
  - Otherwise, value set to 1

3. Loop through countObj and for each key, print key and number of occurences value

**ARRAY AVERAGE**

INSTRUCTIONS/RULES:
- Arg: array of integers
  - Never empty
  - Positive integers

- Returns: average of integers, rounded [down] to the integer component of the average (i.e. nearest, lowest integer)

ASSUMPTIONS:
- Positive integer does not include 0

INPUT: array of positive integers

OUTPUT: number

DATA STRUCTURE:
- Use array to make use of built in functions

- Computation problem

ALGO:
**Overall* => Find and return average (rounded down) of nums in an array

1. Get average of array nums
 - (A) Get sum of all nums in array (e.g. reduce) and divide by arr.length
 - (B) Use Math.Average(arr)

2. Round down average to nearest lowest whole num
  - Use Math.floor()


**AFTER MIDNIGHT**
INSTRUCTIONS/RULES:
- TOD => num of mins before or after midnight
  - If positive -> after midnight
  - If negative -> before

- arg - integer (positive or negative)
- returns - numeric string representing time 

ASSUMPTIONS:
- Will only get integer
- Will get integer of a size that JS can deal with (e.g. not 20 digits long)
- Time zones are irrelevant

INPUT: number -> integer (positive or negative)

OUTPUT: string representing digital time

DATA STRUCTURE:
- Number to string 

- Computational problem

ALGO:
*Overall* Take a num which indicates mins before or after midnight and work out what time it represents and return that time in 24 hr format

1. Work out how many minutes in a day -> SET minsInDay
  - 24 * 60 = 1440

2. Divide num by minsInDay -> works out how many days we're dealing with and get left over mins (remainingMins) will indicate time
  e.g. 3000 / 1440 => 
    remainder 120

    3

3. Work out hours and mins
  - (remainder / 60) = hours -> take integer and make that hours
  - get remainder of that calculation and multiply it by 60 and make that minutes

4. If num is positive:
  - hours = hours
  - mins = mins (make sure to add 0) 

5. If num is negative:
  - hours = 24 - hours (24 - (remainder / 60))
  - mins = 60 - mins... (60 - 57 = 3)


