/* eslint-disable max-len */
/*
ALGO:

1. Loop through string and create extracts of substrings:
  - Convert string into an array separated by non-vowel chars

2. Transform substrings Arr into corresponding lengths of each substring
  - lengthsArr = substrings.map(substring => substring.lenght);

3. Return greatest length
  - return Math.max(...lengthsArr)

*/

function solve(str) {
  let vowelSubstrings = str.split(/[^aeiou]/gi).filter(char => char !== '');
  let lengthsArr = vowelSubstrings.map(subArr => subArr.length);
  return Math.max(...lengthsArr);
}

/*
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
*/

function nonEvenSubstrings(str) {
  let substringsArr = [];

  for (let indx = 0; indx < str.length; indx += 1) {
    for (let count = 1; count <= str.length - indx; count += 1) {
      let substring = str.slice(indx, indx + count);
      substringsArr.push(substring);
    }
  }
  return substringsArr.filter(digit => Number(digit) % 2 === 1).length;
}


/*
1A. Get length of input string -> this is longest possible length of a single substring pattern - not necessary 

2. Generate all leading substrings -> because pattern has to start with indx[0] each time
  - Loop through string
  - Create extract starting from indx 0 each time and adding on 1 new char each time until the end of the string 

3. Loop through substrings and ask if you create a string by taking the substring and repeating it so that the end result is the maxLength -> does it equal the input string
  - If it does, add it to a substring patterns array

4. Loop through substring patterns arr and transform it to create an array of the lengths of each substring

5. Get index num of shortest substring in lengthsArr - indexNum

6. Return array containing (i) substring at substringPattersnsArr[index Num] and (ii) greatest substring lenght from lengthsArr
*/

function leadingSubstrings(str) {
  let substrings = [];

  for (let indx = 0; indx < str.length; indx++) {
    let substring = str.slice(0, indx + 1);
    substrings.push(substring);
  }
  return substrings;
}

function substringPattern(str, substring) {
  let substringPattern = '';

  while (substringPattern.length < str.length) {
    substringPattern += substring;
  }
  return substringPattern === str;
}

function repeatedSubstrings(str) {
  let substrings = leadingSubstrings(str);
  let substringPatterns = substrings.filter(substring => substringPattern(str, substring));
  let lengths = substringPatterns.map(pattern => pattern.length);
  let shortest = Math.min(...lengths);
  let indx = lengths.indexOf(shortest);
  let substr = substringPatterns[indx];
  let compStr = '';
  let count = 0;

  while (compStr.length < str.length) {
    compStr += substr;
    count += 1;
  }

  return [substr, count];
}


/*
1. SET string of alphabetic chars in lowercase a-z

2. Loop through the alphaString -> ask if each char is included in the input string
  - IF NO -> function returns false

3. If loop ends and all chars included -> return true
*/

function isPangram(str) {
  const alphaString = 'abcdefghijklmnopqrstuvwxyz';

  str = [...str].filter(char => (/[a-z]/gi).test(char)).join('').toLowerCase();

  for (let indx = 0; indx < alphaString.length; indx++) {
    if (!(str.includes(alphaString[indx].toLowerCase()))) {
      console.log(alphaString[indx].toLowerCase());
      return false;
    }
  }
  return true;
}

/*
1. Turn str2 into an array of chars

2. Loop through str2 chars and check if every one is included in str1
  - e.g. str1 => rkqodlw
         str2 => 'world'

         str2 -> [w, o, r, l, d]
         str2.every(char => str1.includes(char))

  - Inside the loop, check for duplication:
    - filter the charArr for char -> get an array of the same char
    - count length of arr
    - If it's greater than 1 -> filter str1 for char and count arr
      - if filteredArrStr2.length > filteredArr.string1.length -> return false

*/

function scramble(str1, str2) {
  return [...str2].every(char => {
    let str2Duplicates = [...str2].filter(match => match === char).length;
    let str1Duplicates = [...str1].filter(match => match === char).length;

    if (str2Duplicates > 1) {
      return (str2Duplicates === str1Duplicates) && (str1.includes(char));
    } else {
      return str1.includes(char);
    }
  });
}

/*
console.log(scramble('rkqodlw', 'world')); // ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars')); //==> True
console.log(scramble('katas', 'steak')); //==> False
console.log(scramble('scriptjavx','javascript'));
console.log(scramble('scriptingjava','javascript'));
console.log(scramble('scriptsjava','javascripts'));
console.log(scramble('javscripts','javascript'));
console.log(scramble('jscripts','javascript'));
console.log(scramble('aabbcamaomsccdd','commas'));
console.log(scramble('commas','commas'));
console.log(scramble('sammoc','commas'));
*/

/*
1. SET multiplesArr to [];

2. Create loop which starts from 3 and runs while count < num
  - IF count % 3 === 0 || count % 5 === 0
  multiplesArr.push(count);
  count += 1

3. Get sum of all nums in multiples arr
*/

function solution(num) {
  let multiples = [];
  for (let count = 3; count < num; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      multiples.push(count);
    }
  }
  return multiples.reduce((a, b) => a + b, 0);
}

/*

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
*/

function greatestProduct(numStr) {
  let substrings = [];

  for (let indx = 0; indx < numStr.length - 4; indx++) {
    let substring = numStr.slice(indx, indx + 5);
    substrings.push(substring);
  }

  let products = substrings.map(substring => {
    return [...substring].reduce((a, b) => a * b);
  });

  return Math.max(...products);
}

/*
1. Convert string into array of separate chars

2. Make array all lowercase

3. SET count to 0

4. Loop through charArr to see if any char is repeated:
  - filter charArr for currentChar
  - if returned array.length > 1 => count += 1

5. Return count;
*/

function duplicateCount(str) {
  let charsArr = [...str].map(char => char.toLowerCase());

  let uniqueCharsArr = [...str].filter((char, indx) => {
    let extract = str.slice(indx + 1);
    return !extract.includes(char);
  });

  console.log(uniqueCharsArr);

  let count = 0;

  uniqueCharsArr.forEach(char => {
    let filteredArr = charsArr.filter(char2 => char === char2);
    if (filteredArr.length > 1) {
      count += 1;
    }
  });
  return count;
}

//console.log(duplicateCount('Indivisibilities'));

/*
- Sum all elements -> e.g. 6

- Generate next prime number after sum
  - sum += 1
  - check if prime: 
    - create loop where count starts at 2 and increases by 1:
    - if num % count === 0 {
      return false 
    } 

- Return difference between sum and next prime

*/

function isPrime(num) {
  let count = 2;

  while (count < num) {
    if (num % count === 0) {
      return false;
    }
    count += 1;
  }
  return true;
}


function minimumNumer(arr) {
  let sum = arr.reduce((a, b) => a + b);

  if (isPrime(sum)) return 0;

  let nextPrime = sum + 1;

  while (!isPrime(nextPrime)) {
    nextPrime += 1;
  }
  return nextPrime - sum;
}
/*
console.log(minimumNumer([3, 1, 2]));
console.log(minimumNumer([5, 2]));
console.log(minimumNumer([1, 1, 1]));
*/

/*
INSTRUCTIONS/RULES:
- Args: array of integers AND single integer (sum value)
  - Input Arr can include negative numbers
  - Input Arr can include 0
  - Input Arr can include duplicate nums

- Returns: first 2 values from array (moving from left) in order of
appearance that add up to sumVal

- If there are 2+ pairs that make sumVal, choose the pair whose
SECOND ELEMENT has the smallest indx
  - Ignore size of first indx

- If NO pairs === sumVal, return undefined

ASSUMPTIONS:
- Not going to include Infinity or -Infinity or NaN
- Do I have to validate the input? i.e. can I always expect
an array of integers and a single integer value?
- Returning a new array -> NOT mutating the old

INPUT: array of integers, and single integer

OUTPUT: array of 2 integers OR undefined

TYPE OF PROBLEM:
- Extraction problem - creating 'subArrs'
- Computation -> count and store
- Index nums -> maybe some element of transformation to
find smallest index num

DATA STRUCTURE:
- Array -> nested array

BIG PICTURE:
- Create all possible pairs - with each num followed by indx num
- Filter for pairs that add up to sumVal
- If none -> return undefined
- If multiple, select the pair where indx num of 2nd num
is smallest

WATCH OUT:
- Correct indx referencing when usign nestedArrs

ALGO:
1. HELPER FUNCTION to create all possible pairs + indx nums
  - SET pairsArr to [];
  - Loop through ARR to penultimate
  - Create inner loop which creates a pair of currentNum, indx
  and ARR[indx + count] and [indx + count]
    - Count increases by 1 each time
    - Loop ends when count gets to ARR.length - indx
  - Add nums to an array in a nestedArr

  [10, 5, 2, 3, 7, 5]
  [10, 0, 5, 1] -> add to []
  [10, 0, 2, 2]
  ...
  [7, 4, 5, 5]
  -> indx = 4
  -> nextNum in pair => 4 + 1 (count reset to 1 at start of inner loop)
    at indx 5 -> 5
  -> nextNum indx -> 5

2. Filter pairsArr for those where the actual pair (not inc index nums)
adds up to sumVal
  - pairsArr.filter(subArr => subArr[0] + subArr[2] === sumVal);

3. If length of filtered pairsArr < 1 -> return undefined

4. Otherwise, sort the filtered pairs into order -> smallest index
num first and return orderedArr [0]
  - filteredArr.sort((subArr1, subArr2) => {
    let sub1SecondIndx = subArr1[3]
    let sub1SecondIndx = subArr2[3]

    return sub1SecondIndx - sub1SecondIndx;
  });

- return filteredArr[0];
*/

/*
INSTRUCTIONS/RULES:
- Arg: array containing numbers
  - Array will contain at least 3 numbers
  - Numbers can include floating point numbers
  - Array can include 0

- Return: find the unique number in ARR
  - Return value can be a floating point number

ASSUMPTIONS:
- Numbers in ARR can be negative -> and so if unique num is negative
version of other nums in array, will be unique
e.g. [2, 2, -2, 2, 2] => -2

- Array won't include NaN (NaN !== NaN) -> number
- Array won't include Infinity or -Infinity
- Array won't include non-number elements

- Can we always expect an array input?

INPUT:
- Array of numbers

OUTPUT:
- Single number

TYPE OF PROBLEM:
- Finding / filtering
- Looping

DATA STRUCTURE:
- Array -> built in methods

BIG PICTURE:
- Find the unique number in an array of numbers

WATCH OUT:
- Exact equality

ALGO:
1. Loop through the array to find which number is not repeated
  - Start with currentNum
  - Filter inputArray -> for those nums which === currentNum
  - If resulting array.length > 1 -> continue
  - Otherwise return currentNum

2. Return non-repeated number

*/