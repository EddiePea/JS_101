//See MD notes

/*
- Convert STR into arr of words
- Loop through words array
  - For each word -> turn word into array of chars
    - SET first letter = last letter (charArr.length - 1)
    - SET last letter = first letter (charArr[0])
  - Join word to create string
  - Add to newArr
- Join newArr to create string
- Return string
*/

function swap(text) {
  let wordsArr = text.split(' ');
  let swappedWordsArr = [];

  wordsArr.forEach(word => {
    let wordArr = word.split('');
    let firstLetter = wordArr[0];
    let lastLetter = wordArr[wordArr.length - 1];

    wordArr[0] = lastLetter;
    wordArr[wordArr.length - 1] = firstLetter;
    swappedWordsArr.push(wordArr.join(''));
  });
  console.log(swappedWordsArr.join(' '));
}

//TESTS
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

//LS solution

function swap2(words) {
  let wordsArr = words.split(' ');

  for (let i = 0; i < wordsArr.length; i += 1) {
    wordsArr[i] = swapFirstLastChars(wordsArr[i]);
  }
  return wordsArr.join(' ');
}

function swapFirstLastChars(word) {
  if (word.length === 1) return word;

  return word[word.length - 1] + word.slice(1, -1) + word[0];

}

//Refactored to use the map method

function swap3(text) {
  let wordsArr = text.split(' ');

  let swappedWordsArr = wordsArr.map(word => {
    if (word.length === 1) return word;

    let swappedWord = word.slice(-1) + word.slice(1, -1) + word[0];
    return swappedWord;
  });

  return swappedWordsArr.join(' ');
}


//TESTS
console.log(swap3('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap3('Abcde'));                          // "ebcdA"
console.log(swap3('a'));                              // "a"