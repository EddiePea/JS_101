/*
INSTRUCTIONS/RULES:
- Arg: string (STR)
- Returns: new string -> contains chars of STR but with
all consecutive duplicate chars collapsed into a single char
  - ddaaiillyy -> daily
  - 4444abcabccba -> 4abc etc. -> not patterns, but consecutive
  repeats of the same char
  - 'gggggg' - 'g'

- If STR = '', return ''

ASSUMPTIONS:
- case sensitive

INPUT: string

OUTPUT: string (with consecutive duplicate chars removed)

EXAMPLES:

DATA STRUCTURE:
- String -> add results to newStr
- Array -> to make use of methods that allow access to indx nums

'ddaaiillyy' -> 'daily'

ALGO:
- SET resultStr

- Loop through inputStr (until end of inputStr)
  - IF currentChar === char at indx - 1
    - THEN continue
    - OTHERWISE add currentChar to resultStr

- Return resultSTr

*/

function crunch(str) {
  let resultStr = '';

  [...str].forEach((char, indx, arr) => {
    let previousChar = arr[indx - 1];

    if (!(char === previousChar)) {
      resultStr += char;
    }
  });
  return resultStr;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""