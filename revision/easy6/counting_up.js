//See MD notes

/*
- Create empty array - resultArr
- Create a loop -> which continues while NUM > 1
- Inside the loop:
  - Add num to resultArr
  - Decrement num by 1
- Return resultArr
*/

function sequence(num) {
  let resultArr = [];

  while (num >= 1) {
    resultArr.unshift(num);
    num -= 1;
  }
  return resultArr;
}

/*
console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
*/

//LS solution

function sequence2(limit) {
  let result = [];

  for (let num = 1; num <= limit; i++) {
    result.push(num);
  }
  return result;
}

//Creates for loop
//Initialises counter (num) as 1
//Loops until the counter is as great as the num limit
//Adds counter to array

//Using map

function sequence3(num) {
  let result = Array(num).fill(0);
  return result.map((_, indx) => indx + 1);
}

//Create an array of the length specified by the num limit
//Fill that array with 0
//Call map on the 0s array and return indx of each element + 1 (so 1, 2 etc.)

//Using forEach
function sequence4(num) {
  let result = Array(num).fill(0);
  result.forEach((_, indx) => result[indx] = indx + 1);
  return result;
}

console.log(sequence4(5));
console.log(sequence4(3));
console.log(sequence4(1));
