/* eslint-disable max-len */
/*
1. Convert string into array

2. SET lowerCaseLetterNum to the number of lowercase letters in the array
  - Filter array for lowercase letters only 
  - Return lenght of filtered array

3. SET upperCaseLetterNum to the number of uppercase letters in the array

4. SET neither to the difference between arr.length and (lowerCaseNum + upperCase) etc.

5. Create helper function to calculate percentage of each char type in sentence
  - (count / arr.length) * 100 -> to 2dp

6. Populate Object with results

*/

function letterPercentages(str) {
  let strArr = [...str];
  let lowerCaseLetterCount = strArr.filter(char => (/[a-z]/g).test(char)).length || 0;
  let upperCaseLetterCount = strArr.filter(char => (/[A-Z]/g).test(char)).length || 0;
  let nonLetterCount = strArr.length - (lowerCaseLetterCount + upperCaseLetterCount);

  return {
    lowercase: calculatePercentage(strArr, lowerCaseLetterCount),
    uppercase: calculatePercentage(strArr, upperCaseLetterCount),
    neither: calculatePercentage(strArr, nonLetterCount),
  };

}

function calculatePercentage(arr, count) {
  return ((count / arr.length) * 100).toFixed(2);
}

/*
console.log(letterPercentages('abCdef 123'));
console.log(letterPercentages('AbCd +Ef'));
console.log(letterPercentages('123'));

console.log(calculatePercentage([1, 2, 3, 4], 3));
*/

/*
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
*/

function isIsos(side1, side2, side3) {
  return ((side1 === side2) && (side2 !== side3)) ||
    ((side2 === side3) && (side1 !== side3));
}

function isEquilat(side1, side2, side3) {
  return (side1 === side2) && (side2 === side3);
}

function isScalene(side1, side2, side3) {
  return (side1 !== side2) && (side2 !== side3) && (side3 !== side1);
}

function isValidTriangle(side1, side2, side3) {
  let totalLength = [...arguments].reduce((a, b) => a + b);
  let maxLength = Math.max(...arguments);

  return (side1 > 0 || side2 > 0 || side3 > 0) &&
    ((totalLength - maxLength) > maxLength);
}


function triangle(side1, side2, side3) {
  if (!isValidTriangle(side1, side2, side3)) return 'invalid';

  switch (true) {
    case isIsos(side1, side2, side3):
      return 'isosceles';
    case isEquilat(side1, side2, side3):
      return 'equilateral';
    case (isScalene(side1, side2, side3)):
      return 'scalene';
    default: return 'invalid';
  }
}

/*
console.log(triangle(3, 3, 3));
console.log(triangle(3, 3, 1.5));
console.log(triangle(3, 4, 5));
console.log(triangle(0, 3, 3));
console.log(triangle(3, 1, 1));
*/

/*
1. Create valid triangle helper function

2. Sort angle sizes into order: small to large

3. If invalid triangle -> return invalid

4. Create logic flow to classify triangle: 
  - If biggest > 90 -> obtuse
  - If biggest === 90 -> right angle
  - Otherwise acute
*/

function triangle(angle1, angle2, angle3) {
  if (!isValid(...arguments)) return 'invalid';

  let [ small, medium, large ] = [...arguments].sort((a, b) => a - b);

  switch (true) {
    case large > 90: return 'obtuse';
    case large === 90: return 'right angle';
    default: return 'acute';
  }
}

function isValid(angle1, angle2, angle3) {
  return [...arguments].reduce((a, b) => a + b) === 180 &&
    [...arguments].every(angle => angle > 0);
}

/*
console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));
console.log(triangle(120, 50, 10));
console.log(triangle(50, 50, 50));
console.log(triangle(0, 90, 90));

triangle(120, 50, 10);
*/

/*
1. SET num to 1

2. Generate an array of nums from 1 to count (inclusive):
  - new arr = new Array(count).map((_, indx) => return indx + 1);

3. SET squareOfSum to (i) array elements added together and (ii) then squared

4. SET sumOfSquares to (i) array elements transformed so that each is now a square of the last and (ii) added

5. Return squareOfSum - sumOfSquares
*/

function sumSquareDifference(count) {
  let arr = new Array(count).fill(1).map((_, indx) => indx + 1);
  let squareOfSum = Math.pow(arr.reduce((a, b) => a + b), 2);
  let sumOfSquares = arr.map(num => Math.pow(num, 2)).reduce((a, b) => a + b);
  
  return squareOfSum - sumOfSquares;
}

/*
console.log(sumSquareDifference(3));   
console.log(sumSquareDifference(10));     
console.log(sumSquareDifference(1));     
console.log(sumSquareDifference(100));     
*/

/*
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
*/

function createSentences(text) {
  let sentencesArr = [];
  let startingIndx = 0;
  let endingIndx;

  [...text].forEach((char, indx) => {
  
    if (char === '!' || char === '.' || char === '?') {
      endingIndx = indx + 1;
      let sentence = text.slice(startingIndx, endingIndx);
      sentencesArr.push(sentence.trimStart());
      startingIndx = endingIndx;
    }
  });
  return sentencesArr;
}

function longestSentence(text) {
  let sentencesArr = createSentences(text);
  let lengthsArr = sentencesArr.map(sentence => sentence.split(' ').length);
  let largestLength = Math.max(...lengthsArr);
  let indexOfLargest = lengthsArr.indexOf(largestLength);

  console.log(`${sentencesArr[indexOfLargest]}\nThe longest sentence has ${largestLength} words.`);  
}


