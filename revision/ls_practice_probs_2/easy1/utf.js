/*
INSTRUCTIONS/RULES:
- Arg: string (STR)
- Function -> determines and returns UTF-16 string value of STR
- Returns: number
  - represents summed UTF values of each char in string

ASSUMPTIONS:
- Every char is taken into account, e.g. symbols, whitespace etc.
- all types of char can be used in input string

INPUT: string

OUTPUT: number

EXAMPLES:

DATA STRUCTURE:
- array -> transformation method to swap letters for charCode
- use reduce method

ALGO:
- Convert STR into an array of individual chars
- Loop through strArr -> transform each char
  - Return UTF-16 num for corresponding char
  - Creates a new array of chars
- Sum all elements of numArr
- Return sum

*/


function utf16Value(str) {
  let numArr = [...str].map((_, indx) => {
    return str.charCodeAt(indx);
  });
  return numArr.reduce((acc, curr) => acc + curr, 0);
}


function utf16Value2(str) {
  return str.split('').reduce((accum, value) => {
    return accum + value.charCodeAt();
  }, 0);
}

console.log(utf16Value('\u03A9'));