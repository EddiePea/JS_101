//See MD notes

/*
- Convert input string into array - separate words using whitespace delimiter
- Reverse array
- Join to form string
- Return string
*/

function reverseSentence(sentence) {
  return sentence.split(' ').reverse().join(' ');
}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"
console.log(reverseSentence(' '));

//Another solution...

function reverseSentence2(sentence) {
  let [oldArr, newArr] = [sentence.split(' '), []];

  while (oldArr.length > 0) {
    newArr.push(oldArr.pop());
  }
  return newArr.join(' ');
}

//Using array destructuring, create 2 variables containing arrays
//One is the sentenceStr split into words, the other an empty arr
//While loop -> pushes the elements popped off the old array into the new one
//Then joins newArr into string and returns