/*
INSTRUCTIONS/RULES:
- Given array of numbers (ARR)
- For each number -> find out how many nums in ARR are smaller than it
- Only count unique values (i.e. if num occurs multiple times, only count once)
- returnArray.length always === inputArr.length (even if elements duplicated)
- if inputArr.length === 1 => returnArr[0] === 0

ASSUMPTIONS:
- negative nums in ARR are possible
- array of integers only?

INPUT:
- Array

OUTPUT:
- Array

EXAMPLES:

DATA STRUCTURE:
- From Array to Array of same length -> would consider transformation method
which outputs same number of elements (e.g. map)

ALGO:
- Loop through inputArr
- For each element (num):
  - Find the numbers in inputArr that are smaller than (num) -> filter out
    e.g. [1, 2, 2, 3]

    - Remove duplicate numbers from that array -> helper function
    - Set smallerArr variable to []
    - Loop through arr
    - Ask for each element whether it is included in smallerArr -> if no add
    to sumArr; if yes, continue
    - return smallerArr

- Count length of smallerArr and return it to be added to the outputArr
*/

function smallerNumbersThanCurrent(arr) {

  return arr.map(currentNum => {
    let smallerNums = arr.filter(num => num < currentNum);
    return (removeDuplicates(smallerNums)).length;
  });
}

function removeDuplicates(arr) {
  let singleNums = [];

  arr.forEach(num => {
    if (!singleNums.includes(num)) {
      singleNums.push(num);
    }
  });
  return singleNums;
}


console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent(
  [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]