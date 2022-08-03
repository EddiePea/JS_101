//See MD notes

/*

- Create empty string - numStr
- Create do...while loop:
    - Add '10' pattern to numStr on each iteration
    - While numStr.length <= INT
- If numStr.length > INT - return numStr minus last char
- Otherwise return numStr

*/

function stringy(num) {
  let numStr = '';

  do {
    numStr += '10';
  } while (numStr.length < num);

  if (numStr.length > num) {
    numStr = numStr.slice(0, numStr.length - 1);
  }
  return numStr;
}

//LS solution
function stringy2(size) {
  let result = '';
  for (let i = 0; i < size; i++) {
    let num = ((i % 2) === 0) ? 1 : 0;
    result += num;
  }
  return result;
}

//TESTS
console.log(stringy(6));    // "101010"
console.log(stringy(9));     // "101010101"
console.log(stringy(4));   // "1010"
console.log(stringy(7));    // "1010101"
