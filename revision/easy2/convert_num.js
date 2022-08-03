//See MD notes

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  if (Math.sign(num) < 0) {
    num = Math.abs(num);
  }

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}


function signedIntegerToString(num) {
  let signValue;

  switch (Math.sign(num)) {
    case 1:
      signValue = '+';
      break;
    case -1:
      signValue = '-';
      break;
    default:
      signValue = '';
  }
  return signValue + integerToString(num);
}

//TESTS
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));              // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));    // "1234567890"
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

//LS solution

function signedInt(num) {
  switch (Math.sign(num)) {
    case -1:
      return `-${integerToString(-num)}`;
    case +1:
      return `+${integerToString(num)}`;
    default:
      return integerToString(num);
  }
}