/*
INSTRUCTIONS/RULES:
- Function
- Arguments: 2 strings (str1, str2)
- Return: boolean
  - TRUE if: substring appears in str1 and str2
  - FALSE otherwise

- substring.length > 1 -> return false
- If str1 or str2 === '' -> return false
- Case insensitive
- Strings can include any chars (e.g. numbers)

ASSUMPTIONS:

INPUT: two strings (containing any types of chars)

OUTPUT: boolean

EXAMPLES:

DATA STRUCTURE:
- Use array -> allow me to create an array of substrings and iterate over them

ALGO:
- If str1 OR str2 === '' -> return false;
- Find shortest string out of str1 and str2 (shortStr)

- Create array of possible substrings (of length > 1) from shortStr:
  - Convert shortStr into array and iterate over it (shortStrArr)
  - Takes substrings of length > 1 up to end of string
  - At each point, starts at a progressively greater index number
  - Adds substrings to an array

  - FIRST: e.g. hello
    - Get string of length 2 starting from indx 0 -> 'he'
    - Get string of length 3 starting from idnx 0 -> 'hel'
    etc.
  - SECOND:
    - Get string of length 2 starting from indx 1 -> 'el'
    etc.

- Iterate over shortStrArr to see if any of them are included in str1
  - If any one of them is included -> return true otherwise return false
  (consider using 'some')

*/

function createSubstrings(str) {
  let subStrings = [];

  [...str].forEach((_, indx) => {
    for (let maxInx = indx + 2; maxInx < str.length + 1; maxInx += 1) {
      let subString = str.slice(indx, maxInx);
      subStrings.push(subString);
    }
  });
  return subStrings;
}

function substringTest(str1, str2) {
  if (str1 === '' || str2 === '') return false;

  let shortest = (str1.length > str2.length ? str2 : str1).toLowerCase();
  let longest = (shortest === str1 ? str2 : str1).toLowerCase();

  let subStrings = createSubstrings(shortest);

  return subStrings.some(subString => {
    return longest.includes(subString);
  });
}

console.log(substringTest('Something', 'Fun'));
console.log(substringTest('BANANA', 'banana'));
console.log(substringTest('test', 'est'));
console.log(substringTest('', 'Fun'));


