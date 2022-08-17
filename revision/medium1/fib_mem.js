//See MD notes

//Using an array
let numVals = [0, 1, 1];

function fib2(num) {

  if (numVals[num]) return numVals[num];

  numVals[num] = fib2(num - 1) + fib2(num - 2);
  return numVals[num];
}


//LS solution
let memo = {};

function fib(num) {
  if (num <= 2) {
    return 1;

  } else if (memo[num]) {
    return memo[num];

  } else {
    memo[num] = fib(num - 1) + fib(num - 2);
    return memo[num];
  }
}

console.log(fib2(7));

//Create empty object to store results -> to act as a 'memory' bank
//First stage of conditional -> if the num is less than 3, return 1
//As the first 2 nums in the fib sequence are F(1) = 1, F(2) = 1
//Otherwise, if the nth number has been added to the memo object
//That is, if it's got a truthy value, then return that value
//Otherwise, assign the value of the num key in memo to recursively
//calling the fib function on num-1 added to the same call to num-2
//Then return memo[num]

//So for fib(6):
//Goes to third clause -> and assigns the value of memo[6] to the
//Return value of adding calls to the fib function on 5 and 4
//So it starts with [5] and goes back to the start
//Again, it goes all the way down and requires calls to fib 4 and fib 3
//Then it requires calls to fib 3 and fib 2
//Then it requires calls to fib 2 and fib 1
//Those calls are then answered by the first part of the if/else statement
//So fib(2) is stored in the object as value 1
//And fib(1) is stored in the object as value 1
//Then it works back up and stores fib(3) to fib(5)
//Then to compute fib(6) it works down the other branch - fib(4) (n - 2)
//It finds those values already stored and so computes values from mem object