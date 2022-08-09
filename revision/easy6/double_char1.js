//See MD notes

/*
- SET results string
- Loop over input string
  - repeat the char
  - add repeated char to results string
- Return results string
*/

function repeater(inputStr) {
  let resultStr = '';

  for (let i = 0; i < inputStr.length; i += 1) {
    resultStr += inputStr[i].repeat(2);
  }
  console.log(resultStr);
}

//TESTS
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

//Refactored to use array methods

function repeater2(inputStr) {
  let charsArr = inputStr.split('');
  return charsArr.map(char => char + char).join('');
}

console.log(repeater2('hoodie'));

//LS solution

function repeater2(string) {
  let strArr = [];

  for (let i = 0; i < string.length; i += 1) {
    strArr.push(string[i], string[i])
  }
  return strArr.join('');
}