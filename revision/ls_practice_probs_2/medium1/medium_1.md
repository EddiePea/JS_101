**ROTATION 1**

INSTRUCTIONS/RULES:
- Arg: array

- Return -> new array
  - Rotates array by moving first elem to end of array
  e.g. ['a', 'b', 'c'] -> ['b', 'c', 'a']

- If input !== array -> return undefined
- If arr.length === 0 => return []

- If arr.length === 1 -> return arr as is

- Array elements can be of any type, including nestedArr

ASSUMPTIONS:

INPUT: array

OUTPUT: new array -> rearranged
  - OR undefined if input !== array
  - OR [] if arr.length === 0

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- Array manipulation

BIG PICTURE:
- Make copy of input array and move the first element to the end of the array

ALGO:
1. If the input is not an array, return undefined

2. If arr.length is 0, return []

3. Make a copy of the array

4. SET firstElem to return value of removing last elem of copyArr

5. Add firstElem to start of copyArr 

6. Return copyArr 

**ROTATION 2**
INSTRUCTIONS/RULES:
- Arg: 2 nums -> num and numPlace to rotate

- Return: new num -> rotated

ASSUMPTIONS:

INPUT: number

OUTPUT: number

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- Array manipulation

BIG PICTURE:
- Take the numPlace number in num and move it to the end of the number

ALGO:
1. Convert num into string

2. Convert string into array of numeric chars

3. Find and store char at indx position length - place
  e.g. 735291, 3
      let numToMove = digitsArr[digitsArr.length - place]

4. Remove that char -> can store at the same time 
    let numToMove = digitsArr.splice(digitsArr.length - place, 1);

5. Add that char to the end of numsArr
    digitsArr.concat(numToMove);

6. Join arr to string

7. Convert string to num

**ROTATION 3**
INSTRUCTIONS/RULES:
- Take num: 
  - Rotate one digit to left -> move first digit to last
  - Rotate what is now the second digit to the end
  - Rotate what is now the third digit to the end etc.
  - Do this for digits.length - 1 times

ASSUMPTIONS:

INPUT: num 

OUTPUT: rotated num

DATA STRUCTURE:
- Array

TYPE OF PROBLEM:
- Array manipulation

BIG PICTURE:

ALGO:
1. Convert num into string 

2. Convert string into array of separate numeric strings

3. Create loop that loops through each numArr and starts at indx position 0, then 1 etc. 

  - Loop lasts while indx < arr.length - 2

  - Inside loop create extract of arr that starts from indx + 1 and continues to end of arr

  - Join (i) extract and (ii) currentElem -> this is now arr

**WORD TO DIGIT**

INSTRUCTIONS/RULES:
- Arg: string (sentence)

- Returns: string with every occurence of numeric word converted to corresponding digit char

ASSUMPTIONS:
- All numeric words will be between 0 and 9
- All numeric words will be free standing, i.e. not separated by hyphens, e.g. not five-zero etc.
- Expect only string input
- If no number strings, return string as is

INPUT: string

OUTPUT: string

DATA STRUCTURE:
- Array -> make use of index numbers
- Allows for transformation

TYPE OF PROBLEM:
- Transformation
- Selection -> finding something in a string

BIG PICTURE:
- Find number words in string
- Change number words for digit equivalent
- Return transformed string

ALGO:

1A. SET array of number words, where number word string corresponds with index num, e.g. ['zero', 'one' etc.]

1. Convert string into array of words

2. Loop through words array and transform number words into numbers

    - Take each word in turn
    - Remove punctuation to work out if it's a numberWord
      - Convert word into array of chars
      - Filter chars for alphabetic chars
      - Join into string (wordStr)

    - Return index of wordStr in numArr
      - If -1 (becuase it's not there) -> return word as is
      - Otherwise, return word with wordStr part replaced with indx (thus preserving punctation) 

3. Convert transformed array back into string 

4. Return string

WATCH OUT: 
- Punctuation after number words

**RECURSION**

INSTRUCTIONS/RULES:
- Arg: num (sequence number)

- Returns: the numth fib number

- Fib sequence:
  nth num = (num at sequence position n - 1) + (num at sequence position n - 2)

ASSUMPTIONS:
- Will only be passed positive integer

INPUT: number

OUTPUT: number

TYPE OF PROBLEM:
- Recursion 
- Computation 
- Number relationships 

DATA STRUCTURE:
- numbers
- recursive functions

BIG PICTURE:
- When passed the position in the fib sequence, I want to find the fib number at that position

e.g. passed (4) I want to return 3 because the fib sequence goes: 

1: 1
2: 1
3: 2
4: 3
5: 4 etc.

WATCH OUT:
- 1 and 2 both return 1

ALGO:
1. If num < 3, return 1

2. Otherwise, return fib(num - 1) + fib(num - 2)

WITHOUT RECURSION
- Will probably use a loop which runs while num > 2
- Trying to get each branch to return 1s and build up from there
- Compute all fib numbers from 1 up to numth and return the numth

1A. If num < 3 -> return 1

1. SET fibArr which contains [1, 1] (as 1 and 2 of sequence)

2. SET loop which runs while count <= num -> inside the loop, generate the next fib num and add it to fibArr
  - SET count to 2
  - SET nextNum to fibArr[count - 1] + fibArr[count - 2]
  - ADD nextNum to end of fibArr 

3. After loop, return last num of fibArr
  - Return fibArr[fibArr.length - 1]
