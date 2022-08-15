//See MD notes

/*
- Convert NUM into string (numStr)
- Convert numStr into an array of separate characters (numArr)
- Select digit to move by reference to COUNT
  - Access element at (numArr.length -1 - COUNT)
  - If that element === '.' - access element at numArr.length -2 - COUNT
- Remove that element
  - Maybe use slice? -> returns extract
  - OR use splice(start, delete count 1) -> returns array
  containing deleted elements
- Add element to the end of the numArr - concat?
- Join and return transformed numArr

*/

function rotateDigits(num, count) {
  let numArr = [...String(num)];
  let indx = numArr.length - count;

  if (numArr[indx] === '.') {
    indx -= 1;
  }

  numArr.push(numArr.splice(indx, 1));
  return Number(numArr.flat().join(''));
}

function rotateDigits2(num, count) {
  let numArr = [...String(num)];
  let digit = numArr.splice(numArr.length - count, 1);
  return Number(numArr.concat(digit).join(''));
}

//LS solution
function rotateDigits3(num, count) {
  let numString = String(num);
  let firstHalf = numString.slice(0, numString.length - count);
  let secondHalf = numString.slice(numString.length - count);
  let resultString = firstHalf + rotateString(secondHalf);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}

console.log(rotateDigits2(735291, 1));
console.log(rotateDigits2(735291, 2));
console.log(rotateDigits2(735291, 3));
console.log(rotateDigits2(735291, 4));
console.log(rotateDigits2(735.291, 4));
console.log(rotateDigits2(735291, 5));
console.log(rotateDigits2(0, 6));