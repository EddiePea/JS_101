/*
INSTRUCTIONS/RULES:
- Function
- Arg: string
- Returns:
  - Same sequence of chars
  - Every 4th char in every 2nd word converted to UC
  - Other chars remain the same -> so if they were uppercase, remain so
- 2nd word = 2nd continuous sequence of chars separated by
whitespace
- 4th char = char at indx [3], [7], etc.
  - so if word.length > 7 -> can have multiple transformations
- If there are no words whose length is greater than 3, return
same sequence of chars with no changes

ASSUMPTIONS:
- words include sequences of chars which include grammatical symbols
e.g. full stops, commas, lone exclamation marks

INPUT: string

OUTPUT: new string

EXAMPLES:
console.log(toWeirdCase('Why he!lo')) //'Why he!Lo'

DATA STRUCTURE:
- Need to count word numbers (2nd word) -> so convert to an array to make
use of arr indx nums
- Can reassign individual array elements

ALGO:
1. Convert inputStr into array of words

2. Loop through wordsArr to return transformed array
  (a) If indx of words is odd (1, 3, etc.) ->
    (i) Convert word into array of chars
    (ii) Loop through chars -> transformative method
      (1) If indx of char + 1 is a multiple of 4 -> convert to UpperCase
      (2) Otherwise return char as is
    (iii) Return transformed word and convert back into string
    (iv) Return string to outer loop
  (b) Return transformed String OTHERWISE return string as is

3. Turn transformed array back into string

4. Return string

*/

function toWeirdCase(str) {

  let transformedArr = str.split(' ').map((word, indx) => {

    if (indx % 2 === 1) {
      return [...word].map((char, indx) => {

        if ((indx + 1) % 4 === 0) {
          return char.toUpperCase();
        }
        return char;
      }).join('');
    }
    return word;
  });
  return transformedArr.join(' ');
}

console.log(
  toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
              'Lorem IpsUm is simPly dummy texT of the printing worLd');
console.log(
  toWeirdCase('It is a long established fact that a reader will be distracted') ===
              'It is a lonG established facT that a reader wilL be disTracTed');
console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
console.log(
  toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
              'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');
