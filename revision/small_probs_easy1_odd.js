//See MD notes

function isOdd(num) {
  console.log(num % 2);
  return (num % 2 === 1) || (num % 2 === -1);
}

//Tests

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

/*
NOTES
Don't forget that the % operator will return a negative num
When dividing by a neg num
*/

//LS SOLUTION

function isOdd2(num) {
  return Math.abs(num) % 2 === 1;
}

//The remainder operator returns negative result if LH operand is neg
//Math.abs function => convert to a positive value