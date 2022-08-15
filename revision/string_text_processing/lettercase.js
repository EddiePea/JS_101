//See MD notes

/*
- Create resultsObj with lc, up and neither properties set to 0 value
- Loop through string
  - If char === char.tolc -> increase value of lc property by 1
  - If char === char.touc -> increase value of uc property by 1
  - else -> increase value of neither property by 1
*/

//Using for loop
function letterCaseCount(text) {
  let resultsObject = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < text.length; i += 1) {

    if (!(/[a-z]/gi).test(text[i])) {
      resultsObject.neither += 1;

    } else if (text[i] === text[i].toUpperCase()) {
      resultsObject.uppercase += 1;

    } else {
      resultsObject.lowercase += 1;
    }
  }
  return resultsObject;
}

//Using forEach
function letterCaseCount2(text) {
  let resultsObject = { lowercase: 0, uppercase: 0, neither: 0 };

  [...text].forEach(char => {
    if (!(/[a-z]/gi).test(char)) {
      resultsObject.neither += 1;

    } else if (char === char.toUpperCase()) {
      resultsObject.uppercase += 1;

    } else {
      resultsObject.lowercase += 1;
    }
  });
  return resultsObject;
}

//LS solution 1:
function letterCaseCounts3(text) {
  let counts = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if ((char >= 'a') && (char <= 'z')) {
      counts.lowercase += 1;
    } else if ((char >= 'A') && (char <= 'Z')) {
      counts.uppercase += 1;
    } else {
      counts.neither += 1;
    }
  }
  return counts;
}

//Neat solution that takes advantage of UTF-16 code points

//LS solution 2:
function letterCaseCount4(text) {
  let lowerCaseChars = text.match(/[a-z]/g) || [];
  let upperCaseChars = text.match(/[A-Z]/g) || [];
  let neitherChars = text.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowerCaseChars.length,
    uppercase: upperCaseChars.length,
    neither: neitherChars.length
  };
}

//Create arrays of all characters that match the regex (or an empty array)
//Because if no match, returns null -> that's falsy, so empty array
//returned instead
//Then return object where the values of each property are the lenght
//properties of the arrays created

//TESTS
console.log(letterCaseCount4('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount4('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount4('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount4(''));            // { lowercase: 0, uppercase: 0, neither: 0 }