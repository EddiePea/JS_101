//See MD notes

function isPalNum(num) {
  let stringNum = String(Math.abs(num));
  return stringNum === stringNum.split('').reverse().join('');
}

console.log(isPalNum(22));

//Unnecessarily detailed
//Forgot that I could just convert it into a string
//Tried to reinvent the wheel
function isPalindromicNumber(num) {
  num = Math.abs(num);

  if (num === 0) return true;

  let numArr = [];

  while (num > 0) {
    let remainder = num % 10;
    numArr.push(remainder);
    num = Math.floor(num / 10);
  }

  console.log(numArr.join('') === numArr.reverse().join(''));
}

//TESTS
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
isPalindromicNumber(0);            // true
isPalindromicNumber(-101);     // true (?)


