/*
INSTRUCTIONS/RULES:
- Function:
- Arg: array of integers (ARR)
- Return: number (NUM )=> min sum of 5 consecutive numbers in ARR
  OR null if ARR.length < 5

ASSUMPTIONS:
- ARR can contain negative integers
- NUM < 0
- No need to verify input
- NUM can === 0

INPUT: array of integers (positive or neg)

OUTPUT: number OR null (if ARR.lengh < 5)

EXAMPLES:

DATA STRUCTURE:
- Array of integers to single integer

[1, 2, 3, 4, 5, -5] => 9
Array -> reduce (sum); loop through

ALGO:
- Set sumArr to []
- Loop through ARR -> get sum of 5 consecutive elements starting from indx
0 onwards

- 6 -> 2 sets -> last loop at indx 1
- 10 -> 6 sets -> last loop indx 5
- 7 -> 3 sets -> indx 2

length - 5 -> stop loop at ARR.length - 5

  - Loop through ARR until ARR.length - 5
  - Extract part of ARR from currentElem (starting from 0) until
  indx + 4
 - Get sum of elemnets in that extract
 - Push sum to sumArr

- Find and return smallest sum:
  - Get smallest num from sumArr -> consider using Math.min

*/

function minimumSum(arr) {

  if (arr.length < 5) return null;

  let sumArr = [];

  for (let i = 0; i < arr.length - 4; i += 1) {
    let sum = arr.slice(i, 5 + i).reduce((acc, curr) => acc + curr, 0);
    sumArr.push(sum);
  }
  return Math.min(...sumArr);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

