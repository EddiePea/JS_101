//See MD notes

function stringToInteger(numStr) {
  return +numStr;
}

//LS solution

function stringToInteger2(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrOfDigits = str.split('').map(char => DIGITS[char]);
  let value = 0;
  arrOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

//TESTS
console.log(stringToInteger2("4321") === 4321); // logs true
console.log(stringToInteger2("570") === 570); // logs true
console.log(stringToInteger2("1000") === 1000); // logs true

//hexadecimalToInteger function
//Converts string representing a hex num to its integer value
//Hex nums -> use base 16 (not 10) AND chars A, B, C, D, E, F (and lc)
//These correspond to decimal values 10-15

// eslint-disable-next-line max-lines-per-function
function hexadecimalToInteger(hexNum) {
  const HEX_BASE = 16;
  const HEX_NUMS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let hexNumArr = hexNum.split('').map(char => HEX_NUMS[char.toUpperCase()]).reverse();
  let decimalValue = 0;

  hexNumArr.forEach((num, indx) => {
    decimalValue += num * (HEX_BASE ** indx);
  });

  return decimalValue;
}

console.log(hexadecimalToInteger('5bc'));

//[4, 13, 9, 15]
//19871

