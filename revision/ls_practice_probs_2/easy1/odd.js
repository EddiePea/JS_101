/*
INSTRUCTIONS/RULES:
- Arg: one integer (positive, negative or 0) (num)
- Return: boolean
  - True if num's absolute value === odd
  - False otherwise
- Arg = valid integer value -> no need to verify

ASSUMPTIONS:
- Absolute value === value regardless of sign

INPUT: number (integer)

OUTPUT: boolean

EXAMPLES:

DATA STRUCTURE:
- numbers

ALGO:
- Find out if num is odd
  - Asking if there is any remainder from dividing num by 2
  - If yes, return true
- Return true if it is

*/

function isOdd(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true