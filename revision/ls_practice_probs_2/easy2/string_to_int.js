/*
INSTRUCTIONS/RULES:
- Arg: string of digits
- Returns num as integer
- Cannot use built in methods
- Don't worry about pos/neg signs
- Assume valid numeric string input

ASSUMPTIONS:

INPUT: numeric string

OUTPUT: number

EXAMPLES:

DATA STRUCTURE:
- Array -> add individual digits to it without adding them together

ALGO:
- string -> number
- Set empty arr
- Loop through string
  - for each char:
    - Create loop which runs until char == num;
     - Set count to 0
     - Ask if count == char
     - increment count by 1
    - add count to empty arr
  - return joined array

*/

function stringToInteger(str) {
  let numArr = [];

  for (let i = 0; i < str.length; i += 1) {
    let count = 0;
    let char = str[i];

    while (char != count) {
      count += 1;
    }
    numArr.push(count);
  }
  return numArr.join('');
}

console.log(stringToInteger('4321'));