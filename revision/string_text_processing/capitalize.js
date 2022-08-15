//See MD notes

/*
- Convert string into array of words (demarcated by whitespace)
- Loop through wordsArr -> transform each word
  - Return new word -> first char converted to uppercase
  - subsequnet chars converted to lowercase
- Convert resulting array into string
- Return string
*/

function wordCap(text) {
  return text
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'