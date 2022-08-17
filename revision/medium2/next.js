//See MD notes

/*
- Create isFeatured helper function -> returns true if: 
  - num % 2 === 1
  - num % 7 === 0
  - There are no repeated digits: 
    - num turned into array of separate digits 
    - loop through digitsArr
    - if num is NOT included in the array extracted from right after num 

- Create featured function:
  - Takes num as argument
  - If Math.abs(num) >= [greatest_possible] return error
  - SET counter to num + 1
  - SET nextFeatured = 0;

  - Run loop while nextFeatured = 0
    - if passing counter to the isFeatured function is true 
      - nextFeatured += counter;
      - break;
    - else
      - counter is increased by 1
  - Return nextFeatured;
*/


function featured(num) {
  const GREATEST = 9876543201;
  let counter = num + 1;
  let nextFeatured = 0;

  if (Math.abs(num) >= GREATEST) {
    return 'There is no possible number that fulfills those requirements.';
  }

  while (nextFeatured === 0) {

    if (isFeatured(counter)) {
      nextFeatured += counter;

    } else {
      counter += 1;
    }
  }
  return nextFeatured;
}

function isFeatured(num) {
  let digitArr = [...String(num)];

  let repeatedDigits = digitArr.some((digit, indx) => {
    let restOfArr = digitArr.slice(indx + 1);
    return restOfArr.includes(digit);
  });

  return !!((Math.abs(num) % 2 === 1) && (Math.abs(num) % 7 === 0)
   && (!repeatedDigits));
}


function featured1a(num) {
  const GREATEST = 9876543201;

  if (Math.abs(num) >= GREATEST) {
    return 'There is no possible number that fulfills those requirements.';
  }

  while (true) {
    num += 1;
    if (Math.abs(num) % 2 !== 1) continue;
    if (Math.abs(num) % 7 !== 0) continue;
    if (hasRepeatedDigits(num)) continue;
    break;
  }
  return num;
}

function hasRepeatedDigits(num) {

  let digitArr = [...String(num)];

  return digitArr.some((digit, indx) => {
    let restOfArr = digitArr.slice(indx + 1);
    return restOfArr.includes(digit);
  });

}


//LS solution
function featured2(num) {
  const MAX = 9876543201;
  let featuredNum = nextOddMultipleOf7(num);

  do {
    if (uniqueDigits(featuredNum)) {
      return featuredNum;
    }
    featuredNum += 14;
  } while (featuredNum <= MAX);

  return 'There is no possible num that fulfils those requirements';
}

function nextOddMultipleOf7(num) {
  do {
    num += 1;
  } while (num % 2 === 0 || num % 7 !== 0);

  return num;
}

function uniqueDigits(num) {
  let digits = String(num).split('');
  let seen = {};

  for (let i = 0; i < digits.length; i++) {
    if (seen[digits[i]]) return false;
    seen[digits[i]] = true;
  }
  return true;
}

console.log(featured1a(12));
console.log(featured1a(20));
console.log(featured1a(21));
console.log(featured1a(997));
console.log(featured1a(1029));
console.log(featured1a(999999));
console.log(featured1a(999999987));
console.log(featured1a(9876543186));
console.log(featured1a(9876543200));
console.log(featured1a(9876543201));
console.log((featured1a(-12)));


//13455
//Asks if [1] is included in [3, 4, 5, 5] -> no -> returns false
//Asks if [3] is included in 455 -> no -> returns false
//Asks if [4] is included in 55 => no returns false
//Asks if [5] is included in 5 => yes -> returns true