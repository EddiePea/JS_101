/*
1. Turn inputStr into array of individual chars
  - e.g. could use split('') or [...str] 

2. Loop through charsArr and transform individual chars into duplicate
  - e.g. could use map 
  e.g. if currentChar = 'e' return 'currentChar'.repeat(2); or currentChar + currentChar

3. Join transformed charsArr to form a string
  - transformedArr.join('');

4. Return string
*/

function repeater(str) {
  return [...str].map(char => char.repeat(2)).join('');
}


/*
1. Transform string into array of chars

2. Loop through charsArr and transform: 
  - Taking each char in turn
  - If char is a letter -> return duplicated char
  - Otherwise -> return char

3. Join transformed array into string 

4. Return string

*/

function doubleConsonants(str) {
  return [...str].map(char => {
    if ((/[a-z]/gi).test(char)) {
      return char + char;
    } else {
      return char;
    }
  }).join('');
}


/*
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
*/

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

/*
1. Get length of string

2. Get midpoint of the string 

3. If string length is even:
  - Return char at Math.floor midpoint AND
  - Return char at Math.ceil midpoint

4. If string length is odd:
  - Return char at midpoint
*/

function centerOf(str) {
  let midpoint = str.length / 2;

  if (str.length % 2 === 0) {
    return str[midpoint - 1] + str[midpoint];
  } else {
    return str[Math.floor(midpoint)];
  }
}

/*
1. Find out if num is positive or negative
 - Use Math.sign(num)
 - Will return 1 for positive, 0 for 0, -1 for negative

2. If num is positive make it negative
  - If result of calling Math.sign is 1 or 0
  - Multiply num by -1
  - Otherwise, return num

3. Return negative num

*/

function negative(num) {
  return num < 0 ? num : -1 * num;
}

/*
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
*/

function sequence(num) {
  let resultsArr = [];

  for (let count = 1; count <= num; count += 1) {
    resultsArr.push(count);
  }

  console.log(resultsArr);
}

function sequence2(num) {
  let arr = new Array(num).fill(num);

  console.log(arr.map((_, indx) => indx + 1));
}

/*
1. Convert string into array of separate words

2. Move last word to front
  - Create new array containing just the last element
    e.g. could pop off last word and save it in variable

  - This leaves the mutated wordsArr
  - Join wordsArr to create string of words separated by whitespace
  - Add to new Arr

  - Add last word string to start of array
    e.g. use unshift

3. Join wordsArr and use separator (', ') to create string
*/

function swapName(str) {
  let resultsArr = [];
  let wordsArr = str.split(' ');
  let lastName = wordsArr.pop();
  let remainingNamesStr = wordsArr.join(' ');

  resultsArr.push(lastName, remainingNamesStr);
  return resultsArr.join(', ');
}

/*

1. SET resultsArr to [].

2. SET multiplier to 1

3. Create a loop which runs while resultsArr.length < count -> adding multiples of startingNum to resultsArr:
- starting num * multiplier
- add result to resultsArr
- multiplier incremented by 1

4. Return resultsArr

*/

function sequence3(count, startingNum) {
  let resultsArr = [];

  for (let multiplier = 1; multiplier <= count; multiplier += 1) {
    resultsArr.push(startingNum * multiplier);
  }
  return resultsArr;
}

/*
1. Convert string into array of words

2. Reverse wordsArr

3. Join wordsArr and return string

*/

function reverseSentence(str) {
  return str.split(' ').reverse().join(' ');
}

/*
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
*/

function reverseWords(str) {
  let wordsArr = str.split(' ');

  return wordsArr.map(word => {
    if (word.length > 4) {
      return [...word].reverse().join('');
    } else {
      return word;
    }
  }).join(' ');
}

/*
1. Create a loop which runs arr.length times

2. Inside the loop -> remove the last element of the array and add it to the front of the array
  - SET element to the return value of removing the last element of the arr
  - Add element to the front of the array
  - Repeat arr.length times

3. Return the reversed array

*/

function reverse(arr) {
  for (let count = 1; count <= arr.length; count += 1) {
    let lastElem = arr.pop();
    arr.unshift(lastElem);
  }
  return arr;
}
