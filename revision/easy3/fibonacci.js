//See MD notes

/*
- While loop
  - Generate fib sequence
  - Add each num to array
- CONTINUE until length of last num in sequence (converted into string) === num arg
- GET index num of last string generated
- Add one to that index num
- Return

*/

function findFibonacciIndexByLength(numLength) {
  let fibArr = [1, 1];

  while (String(fibArr[fibArr.length - 1]).length < numLength) {
    let indx = fibArr.length;
    fibArr[indx] = fibArr[indx - 2] + fibArr[indx - 1];
    indx += 1;
  }
  return fibArr.indexOf(fibArr[fibArr.length - 1]) + 1;
}

console.log(findFibonacciIndexByLength(2) === 7);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3) === 12);
console.log(findFibonacciIndexByLength(10) === 45);
console.log(findFibonacciIndexByLength(16) === 74);

//LS solution

function findFibIndx(length) {
  let first = 1;
  let second = 1;
  let count = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}