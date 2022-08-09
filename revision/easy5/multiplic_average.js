//See MD notes

/*
- Multiply all integers in ARR by each other to get RESULT
  - Loop through array
  - Multiply ARR[i] by ARR[i+1] and so on until a single number results
  - e.g. could use reduce
- Divide RESULT by ARR.length to get RESULT_AV
- Convert RESULT_AV into string with 3dp -> to get ROUNDED_RESULT
  - Could use .toFixed(3) -> converts to string automatically
- Return ROUNDED_RESULT
*/

function multiplicativeAverage(arr) {
  let product = arr.reduce((num1, num2) => num1 * num2);
  let average = product / arr.length;
  return average.toFixed(3);
}

//TESTS

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"


//LS solution

function multipAv2(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i += 1) {
    product *= arr[i];
  }
  return (product / arr.length).toFixed(3);
}

console.log(multipAv2([3, 5]));                   // "7.500"
console.log(multipAv2([2, 5, 7, 11, 13, 17]));    // "28361.667"

