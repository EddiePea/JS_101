//See MD notes

/*
- Call substring function
- Filter for palindromes
  - Split each substring into separate chars - charsArr
  - Ask if charsArr === charsArr.reverse()
  - AND if length of charsArr > 1
  - If YES -> return substring -> add it to filteredArr
- Return filteredArr
*/

function leadingSubs(text) {

  return [...text].map((_, indx) => {
    return text.slice(0, indx + 1);
  });
}

function substrings(text) {
  return [...text].map((_, indx) => leadingSubs(text.slice(indx))).flat();
}

function palindromes(text) {
  let substringsArr = substrings(text);

  return substringsArr.filter(substring => {
    let reverseString = substring.split('').reverse().join('');
    return (substring === reverseString) && (substring.length > 1);
  });
}

//Refactored to use helper function
function isPal(text) {
  return !!((text === text.split('').reverse().join('')) && text.length > 1);
}

function palindromes3(text) {
  return substrings(text).filter(isPal);
}

//TESTS
console.log(palindromes3('abcd'));       // []
console.log(palindromes3('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

//LS solution
function isPalindrome(word) {
  return (word.length > 1) && (word === word.split('').reverse().join(''));
}

function palindromes2(text) {
  return substrings(text).filter(isPalindrome);
}

//Create helper function which tells you if something is a palindrome
//Takes a string as an arg and returns true if (i) word is longer than 1
//And word forwards is the same as word backwards
//Creates palindrome function -> returns the result of
//Calling the substrings function on the input text
//And then calling filter on that return value
//The function 'isPalindrome' is passed to filter as an arg
//So that seems to automatically pass in each element of the calling
//Array to isPal as an argument -> no need to pass in args separately
//Is pal will return true or false to the filter function
//Filter will return the relevant substrings accordingly