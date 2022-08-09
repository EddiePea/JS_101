//See MD notes

/*
- Find string length
- If STR.length is odd
  - Divide string length by 2
  - Round down to lowest integer -> gives RESULT
  - Return char at index position string[RESULT]
- If STR.length is even
  - Divide str.length by 2 -> RESULT
  - Return char at index position string[RESULT - 1] + char
  at index position string[RESULT]
*/

function centerOf(inputStr) {
  let midpoint = (inputStr.length / 2);

  if (inputStr.length % 2 === 1) {
    return inputStr[Math.floor(midpoint)];
  } else {
    return inputStr[midpoint - 1] + inputStr[midpoint];
  }
}

//Refactored to use ternary operator
function centerOf2(str) {
  let midpoint = (str.length / 2);

  return str.length % 2 === 1 ?
    str[Math.floor(midpoint)] : str[midpoint - 1] + str[midpoint];

}


console.log(centerOf2('I Love Javascript'));
console.log(centerOf2('Launch School'));
console.log(centerOf2('Launch'));
console.log(centerOf2('Launchschool'));
console.log(centerOf2('x'));