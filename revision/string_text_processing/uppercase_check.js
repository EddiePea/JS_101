//See MD notes

/*
- Create function that checks if a char === alphabetic
  - Make use of comparison operator's lexicographci comp of chars
  using UTF-16 code points
- Loop through STR
  - If char is not alphabetic -> continue
  - Otherwise if (!char === char.toUpperCase()) return false
- Return true if not already returned false

OR

- Convert string to array
- Filter array for non-alpha chars
- Check if every char in the array === char.toUpperCase()
  - return false if not

*/

function isAlphaChar(char) {
  return !!((char.toLowerCase() >= 'a') && (char.toLowerCase() <= 'z'));
}


//Using for loop
function isUppercase(str) {
  for (let i = 0; i < str.length; i++) {
    if (!isAlphaChar(str[i])) continue;
    if (!(str[i] === str[i].toUpperCase())) return false;
  }
  return true;
}

//Using every
function isUppercase2(str) {
  return [...str].filter(char => isAlphaChar(char)).
    every(char => char === char.toUpperCase());
}

//LS solution
//So simple
function isUpperCase3(str) {
  return str.toUpperCase() === str;
}

//TESTS
console.log(isUppercase2('t'));               // false
console.log(isUppercase2('T'));               // true
console.log(isUppercase2('Four Score'));      // false
console.log(isUppercase2('FOUR SCORE'));      // true
console.log(isUppercase2('4SCORE!'));         // true
console.log(isUppercase2(''));                // true

