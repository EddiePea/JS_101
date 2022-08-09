//See MD notes

/*
- Check if NUM === double num:

  - NUM % 2 === 0
  - Turn NUM into string
  - Turn string into array of separate numeric chars
  - Get length of arr / 2 [split point]
  - Half1 variable => add array elements from index 0 up to indx splitpoint - 1
  - Half2 variable => add array elements from splitpoint to end
  - Join half1 and half 2 variables to create strings
  - If half1 string === half2 string return TRUE

- If YES -> return NUM
- If NO -> return NUM * 2

*/

function twice(num) {

  if (isDoubleNum2(num)) {
    return num;

  } else {
    return num * 2;
  }
}

//First go
function isDoubleNum(num) {
  let numArr = (String(num)).split('');

  if (numArr.length % 2 !== 0) return false;

  let splitPoint = numArr.length / 2;
  let firstHalf = [];
  let secondHalf = [];

  numArr.forEach((elem, indx) => {

    if (indx < splitPoint) {
      firstHalf.push(elem);

    } else {
      secondHalf.push(elem);
    }
  });

  return firstHalf.join('') === secondHalf.join('');
}

//Second go -> refactored
function isDoubleNum2(num) {
  let numStr = String(num);

  if (numStr.length % 2 !== 0) return false;

  let splitPoint = numStr.length / 2;
  let rightHandNum = numStr.slice(0, splitPoint);
  let leftHandNum = numStr.slice(splitPoint);

  return rightHandNum === leftHandNum;
}

//TEST

console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));

//LS solution

function isDoubleNumber(num) {
  let stringNum = String(num);
  let center = Math.floor(stringNum.length / 2);
  let leftNum = stringNum.slice(0, center);
  let rightNum = stringNum.slice(center);

  return leftNum === rightNum;
}