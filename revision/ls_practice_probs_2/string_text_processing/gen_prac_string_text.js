/* eslint-disable max-len */
/*
1. Filter the string for non-alpha chars
  - Convert string to array of individual chars
  - Return only those chars that return true: (/[a-z]/gi).test(char)

2. Get length of filteredArr
  - filteredArr.length

3. Filter filteredArr for upperCase arrs
  - Filter filteredArr
  - Return char === char.toUpperCase();

4. If upperCaseArr.length < filteredArr.length -> return false


1. Convert string to array of chars

2. Loop through charsArr -> ask if every char.toUpperCase === char

3. If all return true, then function returns true; otherwise returns false

*/

function isUppercase(str) {
  console.log([...str].every(char => char.toUpperCase() === char));
}

/*
- Go through inputArr -> go through each element -> go through each char in each element and remove vowels 

ALGO:
1. Loop through inputArr to transform it: 
  - Return same num of elements but changed

2. Within outer loop, loop through each word in inputArr to transform it to remove the vowels:
  - split word into array of chars
  - filter through charsArr
  - return char if it doesn't equal a vowel
  - join resulting filteredCharsArr to form a string
  - Return string to outer loop

3. Transformed word included in transformed arr.

4. Return transformedArr
*/

function removeVowels(arr) {
  return arr.map(word => {
    return [...word].filter(char => {
      return !('aeiou'.includes(char.toLowerCase()));
    }).join('');
  });
}

/*
1. SET resultsObj to { lowercase: 0, uppercase: 0, neither: 0}

2. Loop through string -> to end, to count char type occurences
   - if ((/[a-z]/g).test(char)) -> resultsObj.lowercase += 1
   - if ((/[A-Z]/g).test(char)) -> resultsObj.uppercase += 1
   - Otherwise neither += 1

3. Return resultsObj
*/

function letterCaseCount1(str) {
  let results = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if ((/[a-z]/g).test(char)) {
      results.lowercase += 1;
    } else if ((/[A-Z]/g).test(char)) {
      results.uppercase += 1;
    } else {
      results.neither += 1;
    }
  }

  console.log(results);
}

/*
1. Convert string into array of words

2. Loop through wordsArr and transform each word -> so that first char is toUpperCase and rest are to lower case
  - SET first char to word[0].toUpperCase()
  - SET remainder to word.slice(1).toLowerCase()
  - Return firstChar + remainder

3. Convert transformed wordsArr back into string

4. Return string
*/

function wordCap(str) {

  return str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
}

/*
1. Convert string into array of chars

2. Loop through charsArr to transform it -> so that each uppercase char becomes lowercase and vice versa
 - Loop through charsArr to end
 - IF char.toUpperCase() === char, return char.toLowerCase()
 - OTHERWISE return char.toUpperCase()

3. Convert transformedArr into string

4. Return string
*/

function swapCase(str) {
  return [...str].map(char => {
    return char.toUpperCase() === char ? char.toLowerCase() : char.toUpperCase();
  }).join('');
}


/*
1. Convert string into arr of chars

2. Loop through charsArr and transform chars
  - go thrugh each char
  - If index % 2 === 0, return char.toUpperCase()
  - Otherwise return char.toLowerCase()

3. Convert transformed charsArr into string

4. Return string
*/

function staggeredCase(str) {
  let count = 0;

  return [...str].map(char => {
    if ((/[a-z]/gi.test(char))) {
      count += 1;
    }
    return count % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}

/*
1A. if str.length is a falsy value, then return []

1. Convert string into array of words

2. Loop through wordsArr and transform each word so that it is replaced by 'word length'
  - Take each word and get its length 
  - Concat word + space + length to form new string
  - Return concatenated string

3. Return transformed arr

*/

function wordLengths(str) {
  if (!str || str.length < 1) return [];

  return str.split(' ').map(word => {
    return word.concat(' ', word.length);
  });
}


/*
1. Create new regex pattern => 'word'

2. Generate array containing occurences of 'word' in text

3. Return length of array

OR

1. Convert text into array of words

2. Filter for words that === 'word' (or 'Word')

3. Count length of returned arr
*/

function searchWord(word, text) {
  let pattern = new RegExp(`\\b${word}\\b`, 'gmi');
  return text.match(pattern).length || 0;
}

function searchWord2(word, text) {
  let pattern = new RegExp(`\\b${word}\\b`, "gi");
  return text.replace(pattern, `**${word.toUpperCase()}**`);
}
