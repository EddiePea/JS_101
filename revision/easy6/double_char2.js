//See MD notes

/*
- Create function that returns true if arg = non-vowel char
  - Take advantage of UTF-16 code order of vowels
  - Use includes + vowels
- Convert string to array of chars
- Loop through array and transform certain elements
  - If nonVowelChar function returns true -> return double char
  - OTHERWISE return char
- Join new array to output string
*/

function isNonVowelChar(char) {
  char = char.toLowerCase();
  let vowels = 'aeiou';
  return ((char >= 'a') && (char < 'z') && (!vowels.includes(char)));
}

function doubleConsonants(inputStr) {
  let strArr = inputStr.split('');

  return strArr.map(char => {
    if (isNonVowelChar(char)) {
      return char.repeat(2);
    } else return char;
  }).join('');
}

//TESTS
console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""