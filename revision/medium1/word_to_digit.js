//See MD notes

/*
- SET array of number words (0-9) whose value corresponds to
their index number, e.g. "zero" at index position 0 (numArr)
- Convert sentence to array of individual words (i.e. consecutive
  chars separated by whitespace) (wordsArr)
- Loop through wordsArr
  - Loop through numArr
    - If the current numArr element includes the current wordsArr element
      - replace current wordsArr element with numArr index number
- Convert wordsArr back into a string with whitespace between each
wordsArr element
- Return string
*/

//Didn't need double loop -> just need to loop through one
function wordToDigit(sentence) {
  let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return sentence.split(' ').map(word => {
    numArr.forEach((num, indx) => {
      let numPattern = new RegExp(`\\b${num}\\b`, 'i');
      if (numPattern.test(word)) {
        word = word.replace(numPattern, indx);
      }
    });
    return word;
  }).join(' ');
}

//Watch out -> if you use replaceAll and exclude the global flag, get error
function wordToDigit1b(sentence) {
  let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  numArr.forEach((num, indx) => {
    let numPattern = new RegExp(`\\b${num}\\b`, 'gi');
    sentence = sentence.replaceAll(numPattern, indx);
  });
  return sentence;
}


//LS solution
const NUMBERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

function wordToDigit2(sentence) {
  Object.keys(NUMBERS).forEach(numKey => {
    let numPattern = new RegExp(`\\b${numKey}\\b`, 'gi');
    sentence = sentence.replace(numPattern, NUMBERS[numKey]);
  });
  return sentence;
}

//Other users' solutions

function wordToDigit3(sentence) {
  let numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let value of numArr) {
    sentence = sentence.replaceAll(value, numArr.indexOf(value));
  }
  return sentence;
}


function wordToDigit4(sentence) {
  return sentence.replace(/\b\w+\b/gi, (match) => 
    NUMBERS[match] ? NUMBERS[match] : match);
}

function replacer(match) {
  return NUMBERS[match.toLowerCase()];
}

function wordToDigit5(sentence) {
  let numbers = Object.keys(NUMBERS).join('|');
  let pattern = new RegExp(`\\b${numbers}\\w+\\b`, 'gi');

  return sentence.replaceAll(pattern, replacer);
}

function wordToDigit6(sentence) {
  let numbers = Object.keys(NUMBERS).join('|');
  let pattern = new RegExp(`\\b${numbers}\\b`, 'gi');

  return sentence.replaceAll(pattern, (match) => {
    return NUMBERS[match.toLowerCase()];
  });
}

//TEST
console.log(wordToDigit6('Please call me at five five five one two three weight four weight. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."