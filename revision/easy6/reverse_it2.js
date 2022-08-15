//See MD notes

/*
- Convert string into array of words (separate words by whitespace) [wordsArr]
- If using a method like forEach or a for loop -
SET a new variable to contain transformed words.
Not necessary if using a method like map
- Loop through wordsArr
  - If word.length < 5 - return word
  - Otherwise -
    - Turn word into array of chars [charsArr]
    - Reverse charsArr
    - Convert charsArr into a string
- Convert transformed array into string 
- Return string
*/

//Using map
function reverseWords(sentence) {
  let wordsArr = sentence.split(' ');

  return wordsArr.map(word => {
    if (word.length < 5) {
      return word;
    } else {
      return word.split('').reverse().join('');
    }
  });
}

//TESTS
console.log(reverseWords('Professional'));
console.log(reverseWords('Walk around the block'));
console.log(reverseWords('Launch School'));

//Using for loop
function reverseWords2(sentence) {
  let wordsArr = sentence.split(' ');
  let transformedWordsArr = [];

  for (let i = 0; i < wordsArr.length; i += 1) {
    if (wordsArr[i].length < 5) {
      transformedWordsArr.push(wordsArr[i]);

    } else {
      let backwardsWord = wordsArr[i].split('').reverse().join('');
      transformedWordsArr.push(backwardsWord);
    }
  }
  return transformedWordsArr;
}

//TESTS
console.log(reverseWords2('Professional'));
console.log(reverseWords2('Walk around the block'));
console.log(reverseWords2('Launch School'));


//Using forEach
function reverseWords3(sentence) {
  let wordsArr = sentence.split(' ');
  let transformedArr = [];

  wordsArr.forEach(word => {
    if (word.length >= 5) {
      let backwardsWord = word.split('').reverse().join('');
      transformedArr.push(backwardsWord);
    } else {
      transformedArr.push(word);
    }
  });
  return transformedArr;
}

console.log(reverseWords3('Professional'));
console.log(reverseWords3('Walk around the block'));
console.log(reverseWords3('Launch School'));

//Refactored to use ternary expression

function reverseWords4(sentence) {
  let wordsArr = sentence.split(' ');
  return wordsArr.map(word => {
    return word.length > 4 ? word.split('').reverse().join('') : word;
  }).join(' ');
}

//Create words arr from string
//Call map method
//Return to map method, if word is greater than 4 in length:
// - reversed word
// - Otherwise, word
//Outputs map array, which join is then called on