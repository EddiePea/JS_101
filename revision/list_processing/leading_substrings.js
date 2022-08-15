//See MD notes

/*
- SET resultsArr
- Loop through string
- Set counter to 1
- Take substrings of the string using the counter to
indicate where extraction should end
- Add substrings to resultsArr
- Return resultsArr
*/

//Using for loop
function leadingSubstrings(text) {
  let resultsArr = [];

  for (let counter = 1; counter <= text.length; counter += 1) {
    resultsArr.push(text.slice(0, counter));
  }
  return resultsArr;
}

//Using map
function leadingSubstrings2(text) {

  return [...text].map((_, indx) => {
    return text.slice(0, indx + 1);
  });
}

//Using forEach
function leadingSubstrings3(text) {
  let resultsArr = [];

  [...text].forEach((_, indx) => {
    let subString = text.slice(0, indx + 1);
    resultsArr.push(subString);
  });
  return resultsArr;
}

//Using reduce
function leadingSubstrings4(text) {

  return [...text].reduce((accum, _, indx) => {
    accum.push(text.slice(0, indx + 1));
    return accum;
  }, []);
}

//Trying reduce another way
function leadingSubstrings5(text) {
  return [...text].reduce((acc, _, indx, arr) => {
    return acc.concat(arr.slice(0, indx + 1).join(''));
  }, []);
}

//Split string into array of separate strings using spread syntax
//Call reduce function
//Use 4 params -> prev value, currentVal, indx and calling array
//CBF returns result of calling concat on the calling array [clever because
//doesn't mutate the caller and you don't have to create separate array]
//Adds the result of slicing and joining substrings
//You need to join them because you're slicing the array of separate chars
//NOT the string itself

console.log(leadingSubstrings5('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings5('a'));        // ["a"]
console.log(leadingSubstrings5('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
console.log(leadingSubstrings5('abc d'));    // ['a', 'ab', 'abc', 'abc ', 'abc d']