/*
INSTRUCTIONS/RULES:
- Input: triangle of consecutive odd numbers
- Calculate sum of numbers in nth row (starting at index 1)
  - 1 -> 1
  - 2 -> 3 + 5

ASSUMPTIONS:

INPUT: "triangle" of odd numbers

OUTPUT: number (integer)

EXAMPLES:

DATA STRUCTURE:
- Conceptualise "triangle" as nested array
  [[1], [3, 5], [7, 9, 11] etc.]
- Relationship between row lines and number of elements in nest:
  - line 1 -> one element
  - line 2 -> two elements
  - line 3 -> three elements etc.

ALGO:
- Create the "triangle" -> nested arrays - until it has n rows
  - Take the [n]th row number as the stopping point
  - Create a loop which continues until the stopping point has exceeded 'n'
  - Set an empty array to contain the nested arrays (triangleArr)
  - Set oddNum variable to 1

    - Loop 1 -> internal loop which runs rowNum times
      -> add oddNum to triangleArr in an array
      -> increment oddNum by 2 (now 3)
      -> increment rowNum by 1 (now 2)

    - Loop 2:
      -> add oddNum to triangleArr -> internal loop which runs rowNumTimes
      -> increment oddNum by 2 (now 5)
      -> add oddNum to triangleArr
      -> increment oddNum by 2 (now 7)
      -> increment rowNum by 1 (now 3) etc.

- Take the largest row and sum its elements
  - Use reduce
  - To find largest row -> rowNum - 1 for index

*/

function createTriangle(rows) {
  let triangle = [];
  let oddNum = 1;

  for (let row = 1; row <= rows; row += 1) {
    let count = 0;
    let rowNums = [];

    while (count < row) {
      rowNums.push(oddNum);
      count += 1;
      oddNum += 2;
    }
    triangle.push(rowNums);
  }
  return triangle;
}

function sumOfNums(row) {
  let triangle = createTriangle(row);
  let nthRow = triangle[row - 1];
  let sum = nthRow.reduce((accum, curr) => accum + curr, 0);

  return sum;
}

console.log(sumOfNums(1));