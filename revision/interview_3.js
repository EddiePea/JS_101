/*
INSTRUCTIONS/RULES:
- Function
- Argument: non-empty string (STR)
  - Only lowercase English letters
- Returns: Boolean
  - True: if STR can be [constructed] by taking a substring and
  appending multiple copies of the substring together
  - i.e. is STR made up of a repeated substring pattern

ASSUMPTIONS:
- If STR.length < 2 -> return false
- If STR.length === true and STR consists of 2 of the same chars -> return true
- STR itself cannot be a repeated pattern, i.e. the pattern must appear more
than once

INPUT:
- STR - non-empty string made up of lowercase letters

OUTPUT:
- Boolean

EXAMPLES:
console.log(repeatedSubstringPattern('a') === false) // true
console.log(repeatedSubstringPattern('aa') === true) // true

DATA STRUCTURE:
- Example: 'abab' -> go from string to true
  - Use strings and arrays
  - Use array structure to generate patterns of substrings
  - Use strings (as elements) to use 'repeat' method

ALGO:
Helper function: subStringPatterns(str)
- Set patternsArr to empty array
- Loop through str
- Take substrings of increasing length (from 1 up to str.length)
  - Add each substring to the patternsArr
- Return patternsArr

Main function: repeatedSubstringPattern(inputStr)
- Generate patternsArr
- Loop through patternsArr - as if at least one of the patternsArr is
a substring pattern that makes up inputStr (consider using some method)
  - Generate a new string by repeating the current pattern until it has
  the same length as inputStr
  - Return boolean depending on whether newStr === inputStr
- Return boolean if at least one of the elements of patternsArr can be used
to generate inputStr
*/

function subStringPatterns(str) {
  let patternsArr = [];

  for (let i = 0; i < str.length - 1; i += 1) {
    let subStr = str.slice(0, i + 1);
    patternsArr.push(subStr);
  }
  return patternsArr;
}

function repeatedSubstringPattern(str) {
  return subStringPatterns(str).some(subStr => {
    let newStr = subStr.padStart(str.length, subStr);
    return newStr === str;
  });
}

console.log(repeatedSubstringPattern('aa'));