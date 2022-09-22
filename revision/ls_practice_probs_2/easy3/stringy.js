/*
INSTRUCTIONS/RULES:
- Arg: positive integer
- Returns: string
  - Alternating '1's and '0's starting with '1'
  - str.length === num

ASSUMPTIONS:

INPUT: number

OUTPUT: numeric string

EXAMPLES:

DATA STRUCTURE:
- Odds and evens question
- Count and retain question

ALGO:
- SET count variable to 0
- SET numStr to ''
- Create a loop which runs num times
  - If count / 2 leaves no remainder -> add '1' to numStr
  - Otherwise add '0' to numStr
  - Add 1 to count

- Return numStr

*/

function stringy(num) {
  let numStr = '';

  for (let count = 0; count < num; count += 1) {
    if (count % 2 === 0) {
      numStr += '1';
    } else {
      numStr += '0';
    }
  }
  return numStr;
}

console.log(stringy(10));