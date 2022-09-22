/*
INSTRUCTIONS/RULES:
- Args: array of integers (ARR)
  - Can include negative numbers
- Return:
  - index (n) where the sum of the integers to the left of
  n === sum of integers to right of n
  - OR -1 if there is no index that would make this happen
- Empty arrays === 0 here
- To the left side of index 0 = empty array

ASSUMPTIONS:
- To the right side of index arr.length-1 = empty array
- If it could be 2 indices, return the first one

INPUT:
- Array of integers (positive or negative)

OUTPUT:
- Number -> index position OR -1

EXAMPLES:

DATA STRUCTURE:
- Array to number
Example:
[1, 2, 3, 4, 3, 2, 1] => 3
Use array methods to extract parts of the array and sum
its elements and produce the relevant index num
- To extract - might want to use slice
- To sum - might want to use reduce

ALGO:
- Loop through ARR
- Starts with currentVal indx
- Extract array from currentVal indx + 1 up to end of ARR ->
creates right hand side and sum values
  - If returned arr.length === 0; return 0
- Extract array from 0 to currentVal indx (exclusive) -> creates
left hand side and sum values
   - If returned arr.length === 0, return 0

- If RH sum === LH sum -> return currentVal
- Otherwise, return -1

*/

function calculateArr(arr) {
  return arr.reduce((a, b) => a + b, 0);
}


function findEvenIndex(arr) {

  for (let i = 0; i < arr.length; i += 1) {
    let rightSide = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    let leftSide = arr.slice(0, i).reduce((a, b) => a + b, 0);

    if (rightSide === leftSide) return i;
  }
  return -1;
}


console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]));
console.log(calculateArr([]));