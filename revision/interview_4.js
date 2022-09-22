/*
INSTRUCTIONS/RULES:
- Function:
- Args: array of strings (ARR)
  - Only lowercase letters
- Return: array of all chars that appear in ALL strings
  in ARR (including duplicates)

ASSUMPTIONS/IMPLICIT RULES:
- If no chars are repeated in each string element -> return empty arr
- If a char does not appear in the first element, it won't be returned

INPUT:
- Array of strings (ARR)

OUTPUT:
- Array of strings OR empty array
  - Each char is considered in turn (even if repeated)
  - Each char in outputArr must appear in every element of ARR

EXAMPLES:

DATA STRUCTURE:
- Stick with arrays and strings
- Create new array containing the shared char(s)

ALGO:
- SET outputArr variable
- Take the first element of ARR -> convert it in to an array; iterate through:
  (consider filter method here -> will return new array; could dispense
    with separate return variable)
    - for currentChar => get how many times it appears in ARR
    - Loop through the ARR from second element to end

    - Ask if current element includes currentChar from first element:
      - Ask how many times currentElem includes currentChar -> charCount2
        - If less than charCount1 -> reduce charCount1 by difference
        between charCount1 and charCount2
    - If includes AND charCount > 0 return true;


    - On each loop through the remaining array:
      - Outside the loop set a variable with num of times the char appears
      in str1
      - count number of times that char appears in the string
      - if the num of times it appears in a remaining element is less than
        num of times it appears in first element, reassign count to num of times
        it appears in the current remaining element

- 

- Create an array of the remaining elements
- Loop through that array and transform it so that each element is now a
subArray with each char separate -> creates a copy
- Loop through each subArra:
[['a', 'b', 'b'], ['b', 'c']]
- Ask if char appears in each subArr
- If yes, then remove if from the subArr and continue the loop

ALGO 2:
- Set output variable to empty array
- Convert first element of ARR into array of chars
- Iterate over charsArr to create array of common chars:
    - Create remainingWords array
    - Iterate over remaining words
      - Check if

*/
/*
function commonChars(arr) {

  return arr[0].split('').filter(char => {
    let charCount = arr[0].split('').filter(letter => letter === char).length;

    return arr.slice(1).every(word => {
      let charCountInWord = word.split('').filter(letter => letter === char).length;

      word.split('').forEach(letter => {
      });

      return word.includes(char);
    });
  });
}
*/


function commonChars(arr) {
  let resultsArr = [];
  let charsObj = {};

  arr[0].split('').forEach(char => {
    let countArr = arr.map(word => word.split('').filter(letter => letter === char).length);
    let lowestCharCount = Math.min(...countArr);
    charsObj[char] = lowestCharCount;
  });

  for (let letter in charsObj) {
    while (charsObj[letter] > 0) {
      resultsArr.push(letter);
      charsObj[letter] -= 1;
    }
  }
  return resultsArr;
}

//OR compare between two strings -> then repeat the comparison...

//['b', 'b', 'b', 'c']
//Iterate through this array
//Set chars count at number of times each char appears
//iterate through remainingElems array
//for each word => count how many times char appears -> get difference
//


console.log(commonChars(['abbbac', 'bc', 'abcs']));
console.log(commonChars(['bella', 'label', 'roller']));


/*
- Take first element of array _> turn into array of chars-> iterate over it
- For each char:
  - Iterate over each word in the remaining array
  - Ask if that word 

*/


/*
function commonChars(arr) {
  let resultsArr = [];

  arr[0].split('').forEach(char => {

    let countArr = arr.map(word => countChars(word, char));
    console.log(countArr);
    let lowestCharCount = Math.min(...countArr);

    let includedInEachWord = arr.slice(1).every(word => {
      return word.includes(char);
    });

    if (includedInEachWord &&
        (countChars(resultsArr, char) <= lowestCharCount)) {
      resultsArr.push(char);
    }
  });
  return resultsArr;
}

*/