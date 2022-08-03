//See MD notes

function crunch(str) {
  let charsArr = str.split('');
  let resultsArr = [];

  charsArr.forEach((char, indx) => {
    if (char !== charsArr[indx - 1]) {
      resultsArr.push(char);
    }
  });
  return resultsArr.join('');
}

//TESTS
console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""