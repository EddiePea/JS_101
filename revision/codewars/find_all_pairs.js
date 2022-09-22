/*
INSTRUCTIONS/RULES:
- Function:
- Arg: array of integers (ARR)
- Return: count => count all pairs
  - pairs => 2 of the same number

- If ARR.length < 2 => return 0
- If there are multiple pairs of same num (e.g. 0, 0, 0, 0)
count each pair only once

ASSUMPTIONS:
- Integers include negative nums
- No validation necessary

INPUT:
Array of integers

OUTPUT:
- number (= number of pairs in ARR)

EXAMPLES:
[1, 2, 5, 6, 5, 2]  -->  2
[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4

DATA STRUCTURE:
- Array
- Loop through

ALGO:
- set pairsArr to []

- Set pairsObj to {}

- Create copyARR

- Loop through copyARR -> to find pairs of nums
  - i = current element
  - if pairsObj[i] it has a value -> add 1 otherwise value === 1

- Loop through pairsObj
  - if pairsObj[i] % 2 === 0
  - push [i] to pairsARR

- Return pairsArr.length

*/

/*
function duplicates(arr) {
  let pairsArr = [];

  let copyArr = arr.slice().sort((a, b) => a - b);

  copyArr.forEach((num, indx) => {
    let subArr = copyArr.slice(indx + 1);

    if (subArr.includes(num)) {
      pairsArr.push(num);
    }
  });
  console.log(pairsArr);
}
*/

function duplicates(arr) {
  let pairs = 0;
  let pairsObj = {};

  arr.slice().forEach(num => {
    if (pairsObj[num]) {
      pairsObj[num] = 0;
      pairs += 1;
    } else {
      pairsObj[num] = 1;
    }
  });

  return pairs;
}


console.log(duplicates([1, 2, 5, 6, 5, 2]));