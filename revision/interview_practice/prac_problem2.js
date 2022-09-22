/*
INSTRUCTIONS/RULES:
- Function
- One arg: array of integers (ARR)
  - includes negative nums
- Return:
  - Minimum sum of 5 consecutive nums in ARR
  - OR null (if array contains fewer than 5 elements)

ASSUMPTIONS:

INPUT: array of integers (positive or negative)

OUTPUT:
- null -> if arr.length < 5
- number -> smallest number which represents the sum of 5 consecutive
number elements in arr

EXAMPLES:

DATA STRUCTURE:
- [1, 2, 3, 4, 5, -5] -> 9
- Allows use of reduce method to produce sum of elements
- Extact 5 elements of arr at a time -> consider slice()

ALGO:
- Set resultsArr to []
- Iterate through arr -> use for loop to return early (i.e. without iterating
  through all arr elements)

- Extract set of 5 elements from arr at a time starting from indx 0 and moving
through till the last element is end of arr
  - [1, 2, 3, 4, 5, -5] -> 6 elements -> ends at indx [1]
  - [55, 2, 6, 5, 1, [2], 9, 3, 5, 100] -> 10 elements -> ends indx 5
  - [-1, -5, -3, 0, -1, 2, -4] -> 7 elemtns -> ends at indx 2

  - arr.length - 5 => stopping indx

  - Loop one: slice(i, 5 + i);
  - Loop two: slice(i, 5 + i);

- Find the sum of the extracted elements
  - Add sums to a resultsArr
- Return the smallest number of resultsArr

*/

function minimumSum(arr) {
  if (arr.length < 5) return null;

  let sumsArr = [];

  for (let i = 0; i <= arr.length - 5; i += 1) {
    let sumArrOf5 = arr.slice(i, 5 + i).reduce((acc, curr) => acc + curr, 0);
    sumsArr.push(sumArrOf5);
  }
  return Math.min(...sumsArr);
}

console.log(minimumSum([1, 2, 3, 4]) === null);
console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

