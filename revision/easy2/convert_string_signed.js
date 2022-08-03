//See MD notes

// eslint-disable-next-line max-lines-per-function
function stringToSignedInteger(numStr) {
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
  let sign = 0;

  switch (numStr[0]) {
    case '-':
      sign -= 1;
      break;
    case '+':
      sign += 1;
      break;
    default:
      sign += 1;
  }

  let strArr = numStr.split('').map(char => {
    if (char === '+' || char === '-') return 0;
    return DIGITS[char];
  });

  let value = 0;
  strArr.forEach(num => {
    value = (10 * value) + num;
  });
  return value * sign;
}

//LS solution
//Break down into functions
//Use stringToInt helper function

function stringToSigned(str) {
  switch (str[0]) {
    case '-':
      return -stringToInteger(str.slice(1, str.length));
    case '+':
      return stringToInteger(str.slice(1, str.length));
    default:
      return stringToInteger(str);
  }
}

//TESTS
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true