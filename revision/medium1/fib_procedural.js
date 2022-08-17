//See MD notes

/*
- If num num >= 2 -> return 1;
- SET num1 to 1
- SET num2 to 1
- SET fibNumber to 0
- SET counter to 3

- Create loop -> runs while counter <= num
 - fibNum is reassigned to num1 + num2
 - num1 is reassigned to num2
 - num2 is reassigned to fibNum
- Return fibNum
*/

function fibonacci(num) {
  if (num <= 2) return 1;

  let num1 = 1;
  let num2 = 1;
  let fibNum = 0;

  for (let counter = 3; counter <= num; counter += 1) {
    fibNum = num1 + num2;
    num1 = num2;
    num2 = fibNum;
  }
  return fibNum;
}

//LS solution
function fib2(num) {
  let previousTwo = [1, 1];

  for (let counter = 3; counter <= num; counter++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }
  return previousTwo[1];
}

//Creates array of num1 and num2 of fib sequence
//Creates for loop which runs until counter === num
//Inside the loop, the array is reasigned to new values
//First value becomes the 2nd element of the previous array
//Second value becomes result of adding the two values in the previous arr

//TESTS
console.log(fibonacci(20));
console.log(fibonacci(50));
console.log(fibonacci(75));