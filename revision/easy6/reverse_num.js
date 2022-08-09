//See MD notes

/*
- Convert NUM into array of the separate digits [ARR]
- Reverse ARR
- Convert ARR into string of joined digits [STR]
- Convert STR into number
- Return number
*/

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

function reverseNum(num) {
  let numArr = String(num).split('').reverse();
  let reversedNum = Number(numArr.join(''));
  return reversedNum;
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1
console.log(reverseNumber(0));