//See MD notes

/*
- SET newARr
- Loop through num
  - Take the remainder of dividing num by 10 - add to newArr
  - Divide num by 10 and round down to nearest integer
- Repeat until num = 0
- Return newArr
*/

function digitList(num) {
  let resultsArr = [];

  if (num === 0) {
    resultsArr.push(num);

  } else {

    while (num > 0) {
      let remainder = num % 10;
      resultsArr.push(remainder);
      num = Math.floor(num / 10);
    }
  }
  console.log(resultsArr.reverse());
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
console.log(digitList(0));

function digitList2(num) {
  let resultsArr = [];

  if (num === 0) {
    resultsArr.push(num);

  } else {

    while (num > 0) {
      let remainder = num % 10;
      resultsArr.unshift(remainder);
      num = Math.floor(num / 10);
    }
  }
  console.log(resultsArr);
}

digitList2(12345);       // [1, 2, 3, 4, 5]
digitList2(7);           // [7]
digitList2(375290);      // [3, 7, 5, 2, 9, 0]
digitList2(444);         // [4, 4, 4]
digitList2(0);

//Again, I tried to reinvent the wheel - JUST CREATE A STRING

//LS solution

function digitList3(num) {
  let numStringArr = String(num).split('');
  let numArr = [];

  numStringArr.forEach(value => {
    let digit = parseInt(value, 10);
    numArr.push(digit);
  });
  console.log(numArr);
}

digitList3(12345);       // [1, 2, 3, 4, 5]
digitList3(7);           // [7]
digitList3(375290);      // [3, 7, 5, 2, 9, 0]
digitList3(444);         // [4, 4, 4]
digitList3(0);

//Refactored to use map

function digitList4(num) {
  let numStringArr = String(num).split('');
  return numStringArr.map(value => parseInt(value, 10));
}

console.log(digitList4(12345));       // [1, 2, 3, 4, 5]
digitList4(7);           // [7]
digitList4(375290);      // [3, 7, 5, 2, 9, 0]
digitList4(444);         // [4, 4, 4]
digitList4(0);
