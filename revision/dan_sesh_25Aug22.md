/*
**PROBLEM 1**

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 
*/

//TESTS

console.log(palindrome(6,4));
// [11,22,33,44]
console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"

**solution 1**
function palindrome(num, s) {
  let resultsArr = [];

  if (isInvalid(num) || isInvalid(s)) {
    return 'Not valid';
  }

  while (resultsArr.length < s) {
    if (isPalindrome(num)) {
      resultsArr.push(num);
    }
    num += 1;
  }
  return resultsArr;
}

function isInvalid(arg) {
  return !!(typeof arg !== 'number' || isNaN(arg) || arg < 0);
}

function isPalindrome(num) {
  let forwardStr = String(num);
  let backwardStr = forwardStr.split('').reverse().join('');

  if (forwardStr.length < 2) return false;
  return (forwardStr === backwardStr);
}

/*
**PROBLEM 2**
/*
// Given the string of alphabetic characters limited to a-z, do as in the sample cases.

// Each character in the string argument should appear in the returned string.
// The original character should be repeated as many times as its original position in the string argument. (index 0 being position 1, index 1 being position 2...)
// The repeated sequences of a character should be separated by a hyphen in the returned string.
// In the repeated sequences of a character included in the returned string, the first instance of the character should be upper-case.  Subsequent instances of the character should be lowercase.
*/

// Test Cases
console.log(accum("abcd"));   // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));   // "C-Ww-Aaa-Tttt"

**solution 2**
function accum(string) {
  let charsArr = string.split('');

  let transformedArr = charsArr.map((char, indx) => {
    let currentChar = char.toLowerCase();
    return currentChar.toUpperCase() + currentChar.repeat(indx);
  });

  return transformedArr.join('-');
}

**PROBLEM 3**
/*
// You are going to be given an array of integers.
// Your job is to take that array and find an index N where the sum
// of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.
*/

//TESTS
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3); // true
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1); // true
console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1); // true
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3); // true
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0); // true
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6); // true
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3); // true

**Solution 3**

function calculate(array) {
  let sum = array.reduce((num1, num2) => num1 + num2);
  return sum;
}

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


**QUESTION FROM DAN**