/*
INSTRUCTIONS/RULES:
- Arg: number
- Computes sum of all nums between 1 and num (inclusive) where
those numbers are multiples of 3 or 5
- assume num > 1

ASSUMPTIONS:
- Integers

INPUT: 1 number (stopping num)

OUTPUT: sum of all multiples of 3 or 5 between 1 and stopping num (inc)

EXAMPLES:

DATA STRUCTURE:
- array -> reduce method

ALGO:
- Set numbersArr to []
- Create loop -> runs while count <= num
- Ask if num can be divded by 3 or by 5 with no remainder
  - if YES -> push num to numsArr
  - if NO -> continue

- get sum of nums in numsArr
- return sum

*/

function multisum(num) {
  let numsArr = [];

  for (let count = 1; count <= num; count += 1) {
    if (count % 3 === 0 || count % 5 === 0) {
      numsArr.push(count);
    }
  }
  return numsArr.reduce((acc, curr) => acc + curr, 0);
}

console.log(multisum(5));
console.log(multisum(10));
console.log(multisum(3));
console.log(multisum(1000));