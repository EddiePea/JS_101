/*
1. Convert num into string
  - String(num)

2. Convert numString into array of string digits
  - split('');

3. Transform numArr so that the string digits are now numbers
  - map and Number

4. Sum each number in numArr to produce total
 - reduce

5. Return total
*/

function sum(num) {
  return String(num)
    .split('')
    .reduce((a, b) => a + Number(b), 0);
}


/*
1. SET array of English words for numbers in order
- So that zero is at indx position 0 and so on

2. Create a copy of the wordsArr

3. Reorder wordsArrCopy based on alphabetic order

4. Loop through inputArr copy and transform it: (or add to resultsArr)
- find out which element is in wordsArr at the index position of the inputArr element
  e.g. num 2 -> indx 2 -> you get 'two'
  - Then find out index position in wordsArrCopy of element 'two'
  - Return that index position

4A. Transform copy of arr so that it is now an array of written nums

5. Return copy of inputArr

*/

function alphabeticNumberSort(arr) {

  const WORDS_ARR = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen'];

  return arr.slice().sort((a, b) => {
    if (WORDS_ARR[a] > WORDS_ARR[b]) {
      return 1;
    } else if (WORDS_ARR[a] < WORDS_ARR[b]) {
      return -1;
    } else return 0;
  });

}

/*
1. SET resultsArr to []

2. Loop through arr1

3. Inside that loop, loop through arr2 and multiply the current arr1 element by each arr2 element
  - e.g. currentNum = 2
  2 * arr2[0] (4) -> 8
  2 * arr2[1] (3) -> 6 etc.

4. Each time, add the product to resultsArr

5. Order resultsArr numerically 

6. Return sorted resultsArr

*/

function multiplyAllPairs(arr1, arr2) {
  let resultsArr = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      resultsArr.push(num1 * num2);
    });
  });
  return resultsArr.sort((a, b) => a - b);
}

/*
1. SET resultsArr to []

2. Create a loop which runs str.length times

3. Create extract of the string which takes 1st element, then 1st and 2nd etc.
  - str.slice(0, indx + 1)

4. Add extract to resultsArr

5. Return resultsArr

*/

function leadingSubstrings(str) {
  let resultsArr = [];

  for (let endIndx = 1; endIndx <= str.length; endIndx += 1) {
    let subStr = str.slice(0, endIndx);
    resultsArr.push(subStr);
  }
  return resultsArr;
}

/*
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
*/

function substrings(str) {
  let subStrings = [];

  for (let i = 0; i < str.length; i += 1) {
    let extract = str.slice(i);

    for (let length = 1; length <= extract.length; length += 1) {
      let subStr = extract.slice(0, length);
      subStrings.push(subStr);
    }
  }
  return subStrings;
}

/*
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
*/

function generateSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    let extract = str.slice(i);

    for (let length = 1; length <= extract.length; length++) {
      let substring = extract.slice(0, length);
      substrings.push(substring);
    }
  }
  return substrings;
}

function isPal(str) {
  let reverseStr = [...str].reverse().join('');
  return (str === reverseStr && str.length > 1);
}

function palindromes(str) {
  let substrings = generateSubstrings(str);

  return substrings.filter(word => {
    return isPal(word);
  });
}

/*
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

*/

function sumOfSums(arr) {
  let transformedArr = arr.map((_, indx) => {
    let extract = arr.slice(0, indx + 1);
    return extract.reduce((a, b) => a + b, 0);
  });

  return transformedArr.reduce((a, b) => a + b, 0);
}

/*
1. Loop through the 2D array and transform each element so that instead of a subArr we have the name string repeated num times

  - Assign the elements of each subArr to variable names
    e.g. [fruit, num] = subArr;
  
  - SET returnArr to [];

  - while num > 0
    - add 'fruit' to []
    - Take 1 from num each loop
  
  e.g. ['apple', 3] -> ['apple', 'apple', 'apple']

  - Return returnArr

2. Return the flattened transformed array
*/

function buyFruit(arr) {
  return arr.flatMap(subArr => {
    let [ fruit, num ] = subArr;
    let returnArr = [];

    while (num > 0) {
      returnArr.push(fruit);
      num -= 1;
    }
    return returnArr;
  });
}

/*
1. Loop through inputArr to filter it

2. Return object element if transactions[id] === 'ID'

3. Return filtered array
*/

function transactionsFor(id, transactions) {
  return transactions.filter(obj => {
    return obj['id'] === id;
  });
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  {id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

/*
  1. Filter the transactionsArr for those with the right ID num

  2. SET totalQuantity to 0
  
  3. Loop through filtered transactionsArr to access movement and quantity properties: 
    - IF movement === 'in'
      - increase totalQ by quantity
    - Otherwise
      - reduce totalQ by quantity
    
  4. Return TRUE if quantity ends up > 0; false otherwise
*/

function isItemAvailable(id, transactions) {
  let filteredTransactions = transactionsFor(id, transactions);
  let totalQuantity = 0;

  filteredTransactions.forEach(obj => {
    if (obj.movement === 'in') {
      totalQuantity += obj.quantity;
    } else {
      totalQuantity -= obj.quantity;
    }
  });

  return totalQuantity > 0;
}

