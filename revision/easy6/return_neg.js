//See MD notes

/*
- If num < 0 -> return num
- Else return -1 * num;
*/

function negative(num) {
  return num < 0 ? num : -1 * num;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
console.log(negative(Infinity));

//LS solution

function negative2(num) {
  return Math.abs(num) * -1;
}