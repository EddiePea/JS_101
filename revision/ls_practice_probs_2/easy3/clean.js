/*
INSTRUCTIONS/RULES:
- Function:
  - Arg: string -> [words] and non-alphabetic chars
  - Return: string with all non-alphabetic chars replaced by whitespace
    - If 2+ non-alpha chars in a row -> replace with 1 whitespace only

ASSUMPTIONS:
- Only going to get string input -> no need for validation
- words = consecutive alphabetic chars separated by whitespace
- existing whitespace isn't affected

INPUT: string

OUTPUT: string

EXAMPLES:

DATA STRUCTURE:
- Array - fewer problems with restoring whitespace after

ALGO:
- Overall -> trying to go through the string characters and replace
all non-alphabetic chars or sequence with a single whitespace
  - Type of problem:
    - Filtering
    - Conditionals
    - Storing result -> if char meets certain conditions

- Convert string into array of 'words', i.e. consecutive char groups separated
by whitespace

- Loop through stringArr to transform each word:
  - Turn each word into array of chars

  - Loop through charsArr
    - If char is letter -> return char
    - Otherwise if char doesn't equal a-z or A-Z AND the char at indx + 1
    isn't whitespace then return ' '
    - Otherwise return empty string

  - For each word -> return filtered word

- Join the returned array

*/


function cleanUp(str) {
  let wordsArr = str.split(' ');

  return wordsArr.map(word => {

    if (!word.match(/[a-z]/gi)) {
      return '';
    }

    return [...word].map((char, indx, arr) => {
      if (isLetter(char)) {
        return char;

      } else if (isLetter(arr[indx + 1])) {
        return ' ';

      } else {
        return '';
      }
    }).join('');
  }).join(' ');
}


function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}


function cleanUp2(str) {
  let resultStr = '';

  for (let i = 0; i < str.length; i += 1) {
    if (isLetter(str[i])) {
      resultStr += str[i];

    } else if (resultStr[resultStr.length - 1] !== ' ') {
      resultStr += ' ';
    }
  }
  return resultStr;
}

console.log(cleanUp2("---what's my +*& line?"));


/*
- SET result str to ''

- Loop through inputStr:
  - If char is a letter, add to resultStr
  - If char is NOT a letter, BUT it's a whitespace AND the following char is
  a letter, add whitespace to resultStr
  - If char is NOT a letter, BUT it's a whitespace BUT the following char is NOT
  a letter, add empty string OR continue
  - Otherwise, add whitespace

- Return resultStr

*/

