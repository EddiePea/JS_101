//See MD notes

/*
- Convert NUM to string
- Convert string to array of individual string digits (stringArr)
- Convert string digits to numbers
- Loop through stringArr adding one num to next num to produce total
- Return total
*/

function sum(num) {
  let numArr = String(num).split('');
  return numArr.reduce((accum, digit) => accum + Number(digit), 0);
}

console.log(sum(23));
console.log(sum(496));
console.log(sum(123456789));