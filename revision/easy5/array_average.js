//See MD notes

/*
- Loop through ARR
- Add each successive element to the next to get SUM
- Divide SUM by ARR.length -> to get AVERAGE
- Round AVERAGE down to nearest whole num
- Return NUM
*/

function average(arr) {
  let sum = arr.reduce((num1, num2) => num1 + num2);
  return Math.floor(sum / arr.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

//Refactored to use for loop

function average2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return Math.floor(sum / arr.length);
}

console.log(average2([1, 5, 87, 45, 8, 8]));       // 25
console.log(average2([9, 47, 23, 95, 16, 52]));    // 40

//Refactored to use forEach

function average3(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  });
  return Math.floor(sum / arr.length);
}

console.log(average3([1, 5, 87, 45, 8, 8]));       // 25
console.log(average3([9, 47, 23, 95, 16, 52]));    // 40
