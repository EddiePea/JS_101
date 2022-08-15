//See MD notes

/*
- SET resultsStr
- Loop through STR
- If char is UC -> convert char to LC and add to resultStr
- If char is LC -> convert char to UC and add to resultStr
- If char is neither -> add to resultsStr
*/

//Using for loop and regex
function swapCase(inputStr) {
  let resultStr = '';

  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];

    if ((/[a-z]/).test(char)) {
      resultStr += char.toUpperCase();

    } else if ((/[A-Z]/).test(char)) {
      resultStr += char.toLowerCase();

    } else {
      resultStr += char;
    }
  }
  return resultStr;
}

//Using forEach, regex and switch statement
function swapCase2(inputStr) {
  let resultStr = '';

  [...inputStr].forEach(char => {
    switch (true) {
      case (/[a-z]/).test(char):
        resultStr += char.toUpperCase();
        break;
      case (/[A-Z]/).test(char):
        resultStr += char.toLowerCase();
        break;
      default:
        resultStr += char;
    }
  });
  return resultStr;
}

//Using map, regex and switch statement
function swapCase3(inputStr) {
  return [...inputStr].map(char => {
    switch (true) {
      case (/[a-z]/).test(char):
        return char.toUpperCase();
      case (/[A-Z]/).test(char):
        return char.toLowerCase();
      default:
        return char;
    }
  }).join('');
}

//Using map and taking advantage of the fact that non-alpha chars
//will be the same toUC as toLC
function swapCase4(inputStr) {
  return [...inputStr].map(char => {
    return char === char.toUpperCase() ?
      char.toLowerCase() : char.toUpperCase();
  }).join('');
}

console.log(swapCase4('CamelCase'));              // "cAMELcASE"
console.log(swapCase4('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"