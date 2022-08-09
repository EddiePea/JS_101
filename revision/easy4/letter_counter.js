//See MD notes

/*
- Convert STR ARG to array of words (i.e. any sequence of
  chars separated by spaces)
  - Could use split(' ');
- Transform wordsArr into array of word lengths, e.g [3, 4, 5, 2]
- SET resultsObject
- LOOP through lengthsArr
  - IF resultsObj[lengthsArr[i]] (TRUTHY, i.e. not 0 or not
    present, so undefined)
  - THEN resultsObj[lengthsArr[i]] += 1;
  - OTHERWISE resultsObj[lengthsArr[i]] = 1;
- Return resultsObject

*/

function wordSizes(text) {
  let wordLengths = text.trim().split(' ').map(word => word.length);
  let resultsObj = {};

  if (wordLengths[0] === 0) return resultsObj;

  wordLengths.forEach(length => {
    if (resultsObj[length]) {
      resultsObj[length] += 1;
    } else {
      resultsObj[length] = 1;
    }
  });
  return resultsObj;
}

//TESTS
console.log(wordSizes(''));
console.log(wordSizes(' '));
console.log(wordSizes('Hello there'));
console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

//Refactor to exclude non-letter chars

/*
- Create array of words
- Loop through with map to transform to word lengths
- Inside map function:
  - Transform each word to array of chars
  - Filter chars array for letters
  - Join filtered arr to create word
  - Return word.length to map
*/

function isLetter(char) {
  return !!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z'));
}

function wordSizes2(text) {
  let wordLengths = text
    .trim()
    .split(' ')
    .map(word => {
      let filteredWord = word
        .split('')
        .filter(char => isLetter(char))
        .join('');
      return filteredWord.length;
    });

  let resultsObj = {};

  wordLengths.forEach(length => {
    if (length > 0) {
      resultsObj[length] = resultsObj[length] || 0;
      resultsObj[length] += 1;
    }
  });
  return resultsObj;
}

//TESTS
console.log(wordSizes2('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle !'));  // { "3": 5, "6": 3 }
wordSizes2("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes2('');                                            // {}
