//See MD notes

/*
- Create helper function that returns true if char = vowel
- Loop through each ARR element
- Convert each ARR element into an array of chars (charArr)
- Call filter on each charArr -> return array of non-vowel chars -> join result
- Add result to newArr and return newArr
*/

//Helper function
function isVowel(char) {
  return 'aeiou'.includes(char.toLowerCase());
}

//Using map
function removeVowels(wordsArr) {
  return wordsArr.map(word => {
    return [...word].filter(char => !isVowel(char)).join('');
  });
}

//Using for loop
function removeVowels2(wordsArr) {
  let resultsArr = [];

  for (let i = 0; i < wordsArr.length; i++) {
    let resultStr = '';

    for (let j = 0; j < wordsArr[i].length; j++) {
      if (!isVowel(wordsArr[i][j])) {
        resultStr += wordsArr[i][j];
      }
    }
    resultsArr.push(resultStr);
  }
  return resultsArr;
}

//Using map, replace and regex -> copying LS solution
function removeVowels1b(wordsArr) {
  return wordsArr.map(word => word.replace(/[aeiou]/gi, ""));
}

//LS solution 1
function removeVowels3(wordsArr) {
  return wordsArr.map(string => string.replace(/[aeiou]/gi, ''));
}

//Call map method on wordsArr
//Pass each string to CBF
//Call replace method on each string
//Pass regex to replace with global flat and 'i' flag (case insensitive)
//Replace vowels with empty string
//Modified strings returned to replace -> and returned in turn to map

//LS solution 2
function removeVowels4(wordsArr) {
  return wordsArr.map(string => {
    let chars = string.split('');
    let removedVowels = deleteVowels(chars);
    return removedVowels.join('');
  });
}

//Call map function on array arg
//Divide each word string into chars
//Get the arr with vowels removed
//Return joined arr (no vowels) -> to the map function

function deleteVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return array.map(char => {
    if (VOWELS.indexOf(char) >= 0) {
      return '';
    } else {
      return char;
    }
  });
}

//Helper function
//Creates vowels constant array
//Calls map method on array arg
//If the char is a vowel (i.e. the index is not -1 because it's in vowels arr)
//then return empty string
//Otherwise return char

console.log(removeVowels1b(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels1b(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels1b(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]