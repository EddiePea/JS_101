// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

/*
INPUT: array of integers (arr)
OUTPUT: index number (n); alternatively -1

RULES:
- Take arr and return index num (n) where the sum of the
integers to the left of n = sum of integers to right of n

- Otherwise if no index returns required output, return -1

- Arr can include negative integers

- Where the integers to one side of [n] add up to 0,
[n] can have no integers to the other side, e.g. n is 0, n = [arr.length - 1]

ASSUMPTIONS:
- Return first instance of [n] where the test above is satisfied

DATA STRUCTURE:
- array of integers -> index number
- array

ALGORITHM:
- Loop through array until:
  - EITHER [n] is returned OR until the end of the array
- Sum integers (not including current element) to the left
of the current element
  - Save sum to variable leftHandSide
  - If there are no elements to the lefthand side, sum is 0
- Sum integers (not including current element) to the right of
the current element
  - Save sum to variable rightHandSide
  - If there are no elements to the righthand side, sum is 0
- If leftHandSide === rightHandSide
  - Return index number of current element
- If this condition is never met, then return -1

*/

//Test Cases
function calculate(array) {
  let sum = array.reduce((acc, val) => acc + val, 0);
  return sum;
}
//calculate([1, 2, 3])

function findEvenIndex(array) {
  for (let index = 0; index < array.length; index += 1) {
    let left = array.slice(0, index);
    let right = array.slice(index + 1);

    if (calculate(left) === calculate(right)) {
      return index;
    }
  }
  return -1;
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true


function accum2(string) {
  let returnStr = '';

  for (let indx = 0; indx < string.length; indx += 1) {
    let currentChar = (string[indx]).toLowerCase();
    let newStr = currentChar.toUpperCase() + currentChar.repeat(indx);
    returnStr += newStr;

    if (indx < string.length - 1) {
      returnStr += '-';
    }
  }
  return returnStr;
}

console.log(accum('aBDd'));


// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"
/*
Problem:

input: string
output: string

return value: A string that represents the argument
  - Where each character is multiplied by the position its in
  - Every character should be separated by a '-'
  - Each set of characters separated by these - should be capitalized at the first character
  EX: position 3 >> Ccc
  - Subsequent characters should be lowercased
  - the argument is limited to alphabetic characters from a-z (either lower or upper)

Data structure:

- string: 'abc'
- modify to an array
- ouput to string: 'A-Bb-Ccc'

['a','b','c']
['A', 'Bb, 'Ccc']
'A-Bb-Ccc'

Algorithm:

Helper function
1. arguments would be (the letter, position number)
  - position number would be the current index of that letter + 1
2. Declare a count variable and initialize it to 1
3. Declare a string variable initialized to the letter
4. Create a loop that concatenates the letter to that string from step 2
  - The loop ends wnen the count = to the position number
5. Return the strings 0'th index upper cased, concatentated to the substring from the string from index 1 >> the end

1. Declare a copy of that string that is actually split into an array by each character
2. Iterate over that array, for each element in the array (I have transformation in mind)
  a. Invoke the helper function with the arguments (the current element, current index - 1)
3. Coerce the array into a string by joining them with a '-'
4. Return that value
*/

function accum(string) {
  let charsArr = string.split('');

  let transformedArr = charsArr.map((char, indx) => {
    let currentChar = char.toLowerCase();
    return currentChar.toUpperCase() + currentChar.repeat(indx);
  });

  return transformedArr.join('-');
}


/*
function helper(letter, index) {
  let string = letter

  for (let count = 1; count < index; count += 1) {
    string += letter
  }
  let cap_string = string[0].toUpperCase() + string.slice(1)

  return cap_string
}
*/

/*
function accum(string) {
  string_array = string.split('')

  string_array.map() 
}
*/

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"
