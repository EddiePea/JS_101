/*
INSTRUCTIONS/RULES:
- Convert number to a string without using built in JS methods
- Must also take sign into account
- If number has no sign, return '+num'
- If num === 0, return '0'

ASSUMPTIONS:

INPUT:
- Number (integer)

OUTPUT:
- Numeric string (with sign)

EXAMPLES:

DATA STRUCTURE:
- Array -> make use of array index nums

ALGO:

**Number function:
- SET resultStr = '';
- SET digitsArr ['0', '1' etc.]

- Create a loop which runs while num > 0
  - Divide num by 10 and get the remainder, e.g. 123 % 10 = 3;
  - Reassign num to the rounded down result of num / 10, e.g.
  Math.floor(123 / 10) = 12
  - add the element which corresponds with the indx value of remainder
  to resultStr

- Return resultsStr

**Sign function:
- Use switch statement: case (Math.sign(num))
  - If (-1) return '-'
  - If (+1) return '+'
  - Default === ''

- Sign concatenated with num generated using number helper function

*/

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let resultStr = '';

  num = Math.abs(num);

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);
    resultStr = DIGITS[remainder] + resultStr;
  } while (num > 0);

  return resultStr;
}

function returnSign(num) {

  switch (Math.sign(num)) {
    case -1: return '-';
    case 1: return '+';
    default: return '';
  }
}

function signedIntegerToString(num) {
  return returnSign(num) + integerToString(num);
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");