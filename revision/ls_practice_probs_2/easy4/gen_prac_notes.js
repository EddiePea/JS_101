/*
1. Convert string into arr of individual words
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

*/

function wordSizes(str) {
  let resultsObj = {};
  if (str === '') return resultsObj;

  let wordsArr = str.split(' ').map(word => {
    return [...word].filter(char => {
      return (/[a-z]/gi).test(char);
    });
  });
  console.log(wordsArr);

  wordsArr.forEach(word => {
    let wordLength = word.length;
    if (resultsObj[wordLength]) {
      resultsObj[wordLength] += 1;
    } else {
      resultsObj[wordLength] = 1;
    }
  });
  return resultsObj;
}

/*
ALGO:
1. Convert inputStr into array of words (i.e. space separated consecutive groups of chars)

2. Loop through each word and transform it, returning an array of transformed words.
  - Convert each word into array of chars
  - Reassign first and last chars to equal each other
  - Convert mutated charsArr back into string
  - Return transformed string

3. Convert transformed wordsArr into a string of words (separated by whitespaces)

4. Return string

*/

function swap(str) {
  let wordsArr = str.split(' ');

  let transformedWordsArr = wordsArr.map(word => {
    let charsArr = [...word];
    let firstChar = charsArr[0];
    let lastChar = charsArr[charsArr.length - 1];

    charsArr[0] = lastChar;
    charsArr[charsArr.length - 1] = firstChar;

    return charsArr.join('');
  });

  return transformedWordsArr.join(' ');
}

/*
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
*/

function dms(num) {
  let degrees = Math.floor(num);
  let minutesWithRem = (num - degrees) * 60;
  let minutes = Math.floor(minutesWithRem);
  let seconds = Math.floor((minutesWithRem - minutes) * 60);

  console.log(`${degrees}°${addZero(minutes)}'${addZero(seconds)}"`);
}

function addZero(num) {
  let stringNum = String(num);

  while (stringNum.length < 2) {
    stringNum = '0' + stringNum;
  }
  return stringNum;
}

/*
1. Join the two input arrs to create a new joinedArr

2. Filter joinedArr to remove duplicates
- Loop through joinedArr
- Create subArr of elements from currentIndx + 1 to end
- If current element is included in subArr -> do not return it and otherwise return it to be included in filteredArr

3. Return filteredArr
*/

function union(arr1, arr2) {
  let joinedArr = arr1.concat(arr2);

  let filteredArr = joinedArr.filter((elem, indx, arr) => {
    let subArr = arr.slice(indx + 1);
    return !(subArr.includes(elem));
  });

  return filteredArr.sort((a, b) => a - b);
}

/*

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
*/

function halvsies(arr) {
  let resultsArr = [[], []];
  let midPoint = Math.ceil(arr.length / 2);

  for (let count = 0; count < arr.length; count += 1) {
    if (count < midPoint) {
      resultsArr[0].push(arr[count]);
    } else {
      resultsArr[1].push(arr[count]);
    }
  }

  console.log(resultsArr);
}

/*
1. Loop through arr to (i) repeated elem OR (ii) end
  - Use for loop - can break out 

2. Create subArr of elements from currentElem indx + 1

3. Ask if currentElem is included in subArr:
  - If YES, return currentElem
  - If NO, continue loop
*/

function findDup(arr) {

  for (let i = 0; i < arr.length; i += 1) {
    let subArr = arr.slice(i + 1);

    if (subArr.includes(arr[i])) {
      return arr[i];
    }
  }
}

/*
1. SET empty array resultsArr

2. Create loop that runs while resultsArr.length < arr1.length * 2
  - SET count to 0
  - Add arr1[count] to resultsArr
  - then add arr2[count] to resultsArr
  - Increment count by 1

3. Return resultsArr
*/

function interleave(arr1, arr2) {
  let resultsArr = [];

  arr1.forEach((elem, indx) => {
    resultsArr.push(elem, arr2[indx]);
  });

  return resultsArr;
}

/*
1. Multiply all integers together
- Loop through arr
- Starting from first num multiply one by the next, then the next by the result and so on 

2. Divide result by length of arr

3. Convert result to 3 dp and return as string
  - Consider using toFixed(3) -> this converts into a string anyway
*/

function multiplicativeAverage(arr) {
  let multiplied = arr.reduce((accum, curr) => accum * curr, 1);
  let divided = multiplied / arr.length;

  console.log(divided.toFixed(3));
}

/*
1. Convert num into string

2. Convert numStr into array of string digits

3. Transform digitsArr into array of numbers
  - Consider using map

4. Return transformed digitsArr
*/

function digitList(num) {
  if (num === 0) return [0];
  return String(num).split('').map(digit => Number(digit));
}

/*
1. SET countObj to {}

2. Loop through arr till the end:
  - Find out how many times each elem appears in the array and add that to count Obj
  - if countObj[elem] exists -> add one to its value
  - Otherwise, value set to 1

3. Loop through countObj and for each key, print key and number of occurences value

*/

function countOccurences(arr) {
  let countObj = {};

  arr.forEach(elem => {
    elem = elem.toLowerCase();
    if (countObj[elem]) {
      countObj[elem] += 1;
    } else {
      countObj[elem] = 1;
    }
  });

  for (let key in countObj) {
    console.log(`${key} => ${countObj[key]}`);
  }
}

/*
1. Get average of array nums
 - (A) Get sum of all nums in array (e.g. reduce) and divide by arr.length
 - (B) Use Math.Average(arr)

2. Round down average to nearest lowest whole num
  - Use Math.floor()
*/

function average(arr) {
  return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
}

/*
1. Work out how many minutes in a day -> SET minsInDay
  - 24 * 60 = 1440

2. Divide num by minsInDay -> works out how many days we're dealing with
and get left over mins (remainingMins) will indicate time
  e.g. 3000 / 1440 =>
    remainder 120
    3

3. Work out hours and mins
  - (remainder / 60) = hours -> take integer and make that hours
  - get remainder of that calculation and multiply it by 60 and
  make that minutes

4. If num is positive:
  - hours = hours
  - mins = mins (make sure to add 0)

5. If num is negative:
  - hours = 24 - hours (24 - (remainder / 60))
  - mins = 60 - mins... (60 - 57 = 3)
*/

function timeOfDay(num) {
  const HOURS_IN_DAY = 24;
  const MINS_IN_HOUR = 60;
  const MINS_IN_DAY = MINS_IN_HOUR * HOURS_IN_DAY;

  let totalMins = num % MINS_IN_DAY;
  let totalHours = totalMins / MINS_IN_HOUR;
  let hours = Math.floor(totalHours);
  let mins = totalMins % MINS_IN_HOUR;

  if (num < 0) {
    hours = Math.floor(HOURS_IN_DAY - Math.abs(totalHours));
    mins = MINS_IN_HOUR - Math.abs(mins);
  }

  console.log(`${addZero(hours)}:${addZero(mins)}`);
}

timeOfDay(0);

function addZero(num) {
  let numString = String(num);
  
  while (numString.length < 2) {
    numString = '0' + numString;
  }
  return numString;
}