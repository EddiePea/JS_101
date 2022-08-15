//See MD notes

/*
- Turn NUM into array of digits (numArr)
- Create a loop that runs (NUM.length - 1) times
- Loop through numbers in numArr -> looping through indices
  - Move the digit at progressively greater index nums to the end
  - e.g. digit at 0 moved to end -> next digit at 1 moved to end etc.
- Join and return transformed numArr
*/


function rotateDigits(num, count) {
  let numArr = [...String(num)];
  let digit = numArr.splice(numArr.length - count, 1);
  return Number(numArr.concat(digit).join(''));
}

//Using arrays
function maxRotation(num) {
  let numArr = [...String(num)];
  let count = numArr.length;

  while (count > 0) {
    num = rotateDigits(num, count);
    count -= 1;
  }
  return num;
}

//Refactored to make this more efficient
function maxRotation1b(num) {
  let numArr = [...String(num)];
  numArr.forEach((_, indx) => {
    numArr.push(numArr.splice(indx, 1));
  });
  return Number(numArr.join(''));
}

//Using strings
function rotateDigits2(num, count) {
  let numString = String(num);
  let firstHalf = numString.slice(0, numString.length - count);
  let secondHalf = numString.slice(numString.length - count);
  let rotatedHalf = secondHalf.slice(1) + secondHalf[0];

  return Number(firstHalf + rotatedHalf);
}

function maxRotation2(num) {
  let numString = String(num);

  for (let count = numString.length; count > 1; count -= 1) {
    num = rotateDigits2(num, count);
  }
  return num;
}

function maxRotation3(num) {
  let arr = [...String(num)];
  for (let indx = 0; indx < arr.length; indx++) {
    arr.push(arr.splice(indx, 1));
  }
  return Number(arr.join(''));
}

//Creates an array of digits in num
//Creates a for loop
//Pushes to the end of the array the return value
//Of extracting the element from the array at progressively increasing
//index numbers

//TESTS
console.log(maxRotation1b(735291));
console.log(maxRotation1b(3));
console.log(maxRotation1b(35));
console.log(maxRotation1b(105));
console.log(maxRotation1b(8703529146));

console.log(maxRotation1b(735291, 6)); // 352917

