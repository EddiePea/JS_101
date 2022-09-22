/*
INSTRUCTIONS/RULES:
- Arg: array of integers
- Returns: two numbers closest in value
  - i.e. num1 - num2 (or otherway round) => smallest num
- num1 and num2 can be any numbers in the array in any order (not necessarily
  consecutive)
- Output array -> always 2 nums (unless empty array or
  single element array passed in)
- If the difference between the nums is the same -> return the first set

ASSUMPTIONS:
- Integers can include negative numbers
- Can include 0
- If arr = empty -> return empty array
- If arr.length === 1 -> return empty array
- Return new array NOT mutating old array

FLAGS:
- When getting difference want to neutralise negatives: Math.abs()

INPUT: array of integers

OUTPUT: array of 2 integers OR empty array

EXAMPLES:
console.log(closestNumbers([])) // []
console.log(closestNumbers([3])) // []

DATA STRUCTURE:
- [12, 7, 17] -> [12, 7]
- Going from one array to (usually smaller) new array -> selecting certain
elements => consider using a selection method, e.g. filter OR similar approach

ALGO:
1. If arr.length < 2 => return []
- Create empty parentArr
2. Loop through arr -> produce an array with nested arrs of every possible pair
of numbers.
  - Create empty childArr

  - Create newArr which starts from ([i] + 1)
  - Loop through newArr and push currentNum and newArr[0] and so on into it
  - Push newArr to parentArr
  [[12, 7], [12, 17]]

3. Loop through nestedArr and find difference between each pair
  - Transform => take difference and use Math.abs to negate negatives
  [5, 5]

4. Find the smallest difference
  - Math.min...
  - Index of result in differencesArr

5. Return the corresponding subArray
 - Return parentArr[indx]

*/

function createPairs(arr) {
  if (arr.length < 2) return [];

  let pairsArr = [];

  arr.forEach((num1, indx) => {
    let slicedArr = arr.slice(indx + 1);

    slicedArr.forEach(num2 => {
      pairsArr.push([num1, num2]);
    });
  });
  return pairsArr;
}

function closestNumbers(arr) {
  let pairsArr = createPairs(arr);

  let differences = pairsArr.map(pair => {
    return Math.abs(pair.reduce((acc, curr) => acc - curr));
  });

  let smallestDiff = Math.min(...differences);
  let smallestIndx = differences.indexOf(smallestDiff);

  return pairsArr[smallestIndx];
}

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]
