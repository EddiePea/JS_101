//See MD notes

/*
- Convert STR into array of individual chars
- SET counter variable to 0
- Loop through charsArr and transform chars
  - If char is alpha and counter is even or 0
    - Convert char to uppercase and return it
    - Increment counter by 1
  - If char is alpha and counter is odd
    - Convert char to lowercase and return it
    - Increment counter by 1
  - If char is not alpha -> continue OR return char (depending on structure)
- Convert transformed charsArr into string
- Return string
*/

//Using map
function staggeredCase(text) {
  let counter = 0;

  return [...text].map(char => {
    if ((/[a-z]/gi).test(char) && (counter % 2 === 0)) {
      counter += 1;
      return char.toUpperCase();

    } else if ((/[a-z]/gi).test(char) && (counter % 2 === 1)) {
      counter += 1;
      return char.toLowerCase();

    } else return char;

  }).join('');
}

//Using for loop
function staggeredCase2(text) {
  let counter = 0;
  let resultsStr = '';

  for (let i = 0; i < text.length; i += 1) {
    let char = text[i];

    if ((/[a-z]/gi).test(char) && (counter % 2 === 0)) {
      counter += 1;
      resultsStr += char.toUpperCase();

    } else if ((/[a-z]/gi).test(char) && (counter % 2 === 1)) {
      counter += 1;
      resultsStr += char.toLowerCase();

    } else resultsStr += char;
  }
  return resultsStr;
}

//LS solution
function staggeredCase3(text) {
  let needUpper = true;

  return [...text].map(char => {
    char = char.toLowerCase();

    if (char >= 'a' && char <= 'z') {
      if (needUpper) {
        needUpper = false;
        return char.toUpperCase();
      } else {
        needUpper = true;
        return char.toLowerCase();
      }
    } else return char;
  }).join('');
}

//Set needUpper variable to true
//Return result of map method call on charsArr
//Reassign the value of char to lowercase
//If char is a lowercase alphabetical char
// - if needUpper is set to true -> change it to false
// and return char converted to uppercase
//If needUpper is set to false -> convert it to true
//and return char converted to lowercase
//Otherwise (if it's not alpha) -> return char
//Join transformed array

//TESTS
/*
console.log(staggeredCase2("I Love Launch School!") ===
"I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/

//Further exploration

function staggeredCase4(text, ignoreNonAlphaChar = true) {
  let counter = 0;

  return [...text].map(char => {

    if (ignoreNonAlphaChar && !(/[a-z]/gi).test(char)) return char;
    counter += 1;

    if (counter % 2 === 0) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
}

//Refactored to be more compact
//This owes a lot to laurentstaub below!
function staggeredCase6(text, ignoreNonAlphas = true) {
  let uppercase = false;

  return [...text].map(char => {
    if (ignoreNonAlphas && !(/[a-z]/i).test(char)) return char;
    uppercase = !uppercase;
    return uppercase ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

//Set upper variable to false to start with, i.e. not uppercase
//Call map method on charsArr
//If we are to ignore non-alpha chars AND the char is not an alpha char
//return char as is and move on to next iteration
//Otherwise, reassign upper to the opposite boolean (e.g. from false to true)
//Then if upper is true -> return char converted to uppercase; otherwise to lc


console.log(staggeredCase4("I Love Launch School!", false) === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase4("ALL CAPS", false) === "AlL cApS");
console.log(
  staggeredCase4("ignore 77 the 444 numbers", false) === "IgNoRe 77 ThE 444 nUmBeRs"
);