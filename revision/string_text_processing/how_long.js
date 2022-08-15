//See MD notes

/*
- Convert STR into array -> separate words by whitespaces (strArr)
- Loop through strArr and transform each element
  - Get length of each word
  - Return word + whitespace + length
- Return transformed strArr
- OR if empty string or no arg -> return [];
*/

function wordLengths(str) {
  return str ? str.split(' ').map(word => `${word} ${word.length}`) : [];
}

//TESTS
console.log(wordLengths('cow sheep chicken'));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths('baseball hot dogs and apple pie'));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths('Supercalifragilisticexpialidocious'));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths(''));      // []
console.log(wordLengths());        // []

//LS solution
function wordLengths2(words) {
  if (arguments.length === 0 || words.length === 0) return [];

  return words.split(' ').map(word => {
    return word + ' ' + String(word.length);
  });
}

//NB. Arrow functions don't have access to the args object
