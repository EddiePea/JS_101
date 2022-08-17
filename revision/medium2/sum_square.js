//See MD notes

/*
**Numbers*
- Function to compute A => sum square
  - SET sum = 0;
  - SET count = num;

  - Create a loop which runs while count > 0
    - sum += count; (?) //CHECK THIS
    - count -= 1;
  - return (sum ** 2)

- Function to compute B => square sum
  - SET sum = 0;
  - SET count = num;

  - Create loop which runs while count > 0;
    - sum += count ^^ 2;
    - count -= 1;
  - Return sum

- Difference function:
  return sumSquare(num) - squareSum(num);
*/

function computeSumSquare(num) {
  let sum = 0;

  while (num > 0) {
    sum += num;
    num -= 1;
  }
  return sum ** 2;
}

function computeSquareSum(num) {
  let sum = 0;

  while (num > 0) {
    sum += (num ** 2);
    num -= 1;
  }
  return sum;
}

function sumSquareDifference(num) {
  console.log(computeSumSquare(num) - computeSquareSum(num));
}

//Combining these functions
function sumSquareDifference1b(num) {
  let sum = 0;
  let sumOfSquares = 0;

  while (num > 0) {
    sum += num;
    sumOfSquares += (num ** 2);
    num -= 1;
  }
  return (sum ** 2) - sumOfSquares;
}

//TESTS

sumSquareDifference1b(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference1b(10);     // 2640
sumSquareDifference1b(1);      // 0
sumSquareDifference1b(100);    // 25164150


/*
**Arrays*
- Function to create array of nums from 1 to num
  - let arr = [];
  - create a loop which runs while arr.length < num
  - Inside the loop:
    - Add num to the array
    - Decrement num by 1

- Function to compute A:
  - Call function to create array of nums
  - Compute sum of all nums in array 
  - Return square of sum

- Function to compute B:
  - Call function to create array of nums
  - Transform array of nums so that each element is converted into its square
  - Compute the sum of the transformed array elements
  - Return the sum

- Diff function:
  - funcA - funcB
*/

function createArray(num) {
  return Array(num).fill().map((_, indx) => indx + 1);
}

function computeSumSquare2(num) {
  return (createArray(num).reduce((num1, num2) => num1 + num2) ** 2);
}

function computeSquareSum2(num) {
  return createArray(num)
    .map((number => number ** 2))
    .reduce((num1, num2) => num1 + num2);
}

function sumSquareDifference2(num) {
  console.log(computeSumSquare2(num) - computeSquareSum2(num));
}

//The above combined
function sumSquareDifference2b(num) {
  let digitsArr = Array(num).fill().map((_, indx) => indx + 1);
  let sumSquare = digitsArr.reduce((num1, num2) => num1 + num2) ** 2;
  let squareSum = digitsArr.reduce((num1, num2) => num1 + (num2 ** 2));

  return sumSquare - squareSum;
}

//TEST 2
sumSquareDifference2b(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference2b(10);     // 2640
sumSquareDifference2b(1);      // 0
sumSquareDifference2b(100);    // 25164150


//A longer winded version of createArr
function createArray2(num) {
  let arr = [];
  let maxLength = num;

  while (arr.length < maxLength) {
    arr.push(num);
    num -= 1;
  }
  return arr;
}

//Combined function
//LS solution using for loop
function sumSquareDifference3(count) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let number = 1; number <= count; number++) {
    sum += number;
    sumOfSquares += Math.pow(number, 2);
  }
  return Math.pow(sum, 2) - sumOfSquares;
}

//Separated function where array is created more seamlessly
//squareOfSums and sumOfSquares are helper functions
function sumSquareDifference4(num) {
  let counterArr = [num];
  for (let counter = num - 1; counter > 0; counter -= 1) {
    counterArr.unshift(counter);
  }
  return squareOfSums(counterArr) - sumOfSquares(counterArr);
}
