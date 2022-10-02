/*
INSTRUCTIONS/RULES:
- Arg: string
- Return: Boolean
  - TRUE if str === palindrome
  - FALSE otherwise

- Palindrome: reads the same forwards as backwards
  e.g. madam === true
      Madam === false

- Case and all chars matter
    e.g. madam i'm adam -> false - all chars (including apostr)

ASSUMPTIONS:
- Going to get string input

INPUT: string

OUTPUT: boolean

DATA STRUCTURE:
- string (so can compare)
- array -> to reverse the string chars

ALGO:
1. Filter inputStr for non-alpha chars
  - Turn inputStr into array of chars
  - Loop through -> filter through chars which are alphanumeric OR whitespace
    use helper function here
  - Return filtered array
  - Convert filtered array back into string and return

1A. Check if char is alphanuemric or whitespace
  - Return true if char.test(/[a-z]/gi)
  - Return true if char.test(/[0-9]/g)
  - Return true if char === ' '

2. Convert inputStr to lowercase

3. Reverse inputString
  - Convert inputStr to array of chars
  - Reverse charsArr
  - Join charsArr to produce string

4. Compare reversedStr to inputStr
  - If they are the same -> return TRUE
  - Otherwise return false

*/

function isPal(str) {
  let reversedStr = [...str].reverse().join('');
  console.log(reversedStr);
  return !!(reversedStr === str);
}

//console.log(isPal(''));

function isValidChar(char) {
  return ((/[a-z]/gi).test(char) ||
    (/[0-9]/gi).test(char));
}

function isRealPalindrome(str) {
  if (str === '') return false;

  let cleanStr = [...str].filter(char => isValidChar(char)).join('').toLowerCase();
  console.log(cleanStr);
  console.log(isPal(cleanStr));
}


isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
