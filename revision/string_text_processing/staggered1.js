//See MD notes

/*
- Convert STR into array of individual chars
(including all chars, e.g. whitespace) (charsArr)
- Loop through charsArr
- If index num of char is 0 or even -> convert char to uppercase
- If index num of char is odd -> convert char to lowercase
  - This should deal with non-alpha chars (where, e.g.
    ('!').toUpperCase === ('!').toLowerCase());
- Return transformed charsArr
- Convert transformed charsArr to switchedString
- Return switchedString
*/

//Using map and if statement
function staggeredCase(text) {
  return [...text].map((char, indx) => {
    if (indx % 2 === 0) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  }).join('');
}

//Using map and switch statement
function staggeredCase2(text) {
  return [...text].map((char, indx) => {
    switch (true) {
      case (indx % 2 === 0):
        return char.toUpperCase();
      default:
        return char.toLowerCase();
    }
  }).join('');
}

//Using ternary expression
function staggeredCase3(text) {
  return [...text].map((char, indx) => {
    return indx % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

console.log(staggeredCase2('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase2('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"