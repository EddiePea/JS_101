//See MD notes

/*
- Loop through ARR
- Add each element in turn to the sum of the previous elements in ARR
  - Create running total variable -> set to 0
  - Add current element to runningTotal
  - Push running total to emptyArr
  - Reduce emptyArr to create single number of summed numbers
- Return total
*/

//Using forEach and reduce
function sumOfSums(arr) {
  let runningTotal = 0;
  let runningTotalArr = [];

  arr.forEach(num => {
    runningTotal = num + runningTotal;
    runningTotalArr.push(runningTotal);
  });
  return runningTotalArr.reduce((num1, num2) => num1 + num2, 0);
}

//Using forEach and reduce -> refactored
function sumOfSums1b(arr) {
  let runningTotal = 0;

  arr.forEach((_, indx) => {
    runningTotal += arr.slice(0, (indx + 1))
      .reduce((num1, num2) => num1 + num2);
  });
  return runningTotal;
}


//Using a for loop, slice and reduce

function sumOfSums2(arr) {
  let resultsArr = [];

  for (let i = 1; i <= arr.length; i += 1) {
    let substring = arr.slice(0, i);
    resultsArr.push(substring.reduce((num1, num2) => num1 + num2, 0));
  }
  return resultsArr.reduce((num1, num2) => num1 + num2, 0);
}

//Refactored
function sumOfSums2b(arr) {
  let runningTotal = 0;

  for (let i = 1; i <= arr.length; i += 1) {
    runningTotal += arr.slice(0, i).reduce((num1, num2) => num1 + num2);
  }
  return runningTotal;
}

console.log(sumOfSums2b([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums2b([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums2b([4]));              // 4
console.log(sumOfSums2b([1, 2, 3, 4, 5]));  // 35

//LS solution

function sumOfSums3(numbers) {
  let sumTotal = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumTotal += numbers.slice(0, i).reduce((acc, num) => acc + num);
  }
  return sumTotal;
}

//Initialise sumTotal variable with 0
//Create for loop
//Inside reassign sumTotal value of taking a section of the array
//Then calling reduce on that section and adding the result to sumTotal
//Returning the sumTotal number

//LS solution2

function sumOfSums4(numbers) {
  return numbers.map((_, indx) => numbers.slice(0, indx + 1)
    .reduce((sum, value) => sum + value))
    .reduce((sum, value) => sum + value);
}

//Call map method on numbers arr
//Create subarrays by slicing different sizes using the index param
//This creates progressively longer subArrs
//Call the reduce method on each subArr -> that is then passed to map
//Map returns the sum of each subArr ending with the current Val
//Then reduce is called on that mapped arr, to produce a single value