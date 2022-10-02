/* eslint-disable max-len */
/*
1. If the input is not an array, return undefined

2. If arr.length is 0, return []

3. Make a copy of the array

4. SET copyArr[0] to arr[arr.length - 1]

5. SET copyArr[copyArr.length - 1] to arr[arr.length - 1]

6. Return copyArr 
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length < 1) return [];

  return arr.slice(1).concat(arr[0]);
}
/*
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
*/

/*
1. Convert num into string

2. Convert string into array of numeric chars

3. Find and store char at indx position length - place
  e.g. 735291, 3
      let numToMove = digitsArr[digitsArr.length - place]

4. Remove that char -> can store at the same time
    let numToMove = digitsArr.splice(digitsArr.length - place, 1);

5. Add that char to the end of numsArr
    digitsArr.concat(numToMove);

6. Join arr to string

7. Convert string to num

*/

function rotateRightmostDigits(num, place) {
  let digitsArr = String(num).split('');
  let numToMove = digitsArr.splice(digitsArr.length - place, 1);

  return Number(digitsArr.concat(numToMove).join(''));

}

/*
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
*/

function rotate(num, count) {
  let numString = String(num);
  let firstPart = numString.slice(0, numString.length - count);
  console.log(`First part is ${firstPart}`);
  let secondPart = numString.slice(numString.length - count);
  console.log(`Secondd part is ${secondPart}`);
  let resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(str) {
  return str.slice(1) + str[0];
}

/*
console.log(rotate(735291, 1));      // 735291
console.log(rotate(735291, 2));      // 735219
console.log(rotate(735291, 3));      // 735912
console.log(rotate(735291, 4));      // 732915
console.log(rotate(735291, 5));      // 752913
console.log(rotate(735291, 6));      // 352917
*/

function maxRotation(num) {
  let numDigits = String(num).length;
  console.log(`numDigits is ${numDigits}`);

  for (let count = numDigits; count >= 2; count--) {
    num = rotate(num, count);
    console.log(`count is ${count}`);
    console.log(`num is ${num}`);
  }
  console.log(num);
}

/*
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
*/

/*

1A. SET array of number words, where number word string corresponds with index num, e.g. ['zero', 'one' etc.]

1. Convert string into array of words

2. Loop through words array and transform number words into numbers

    - Take each word in turn
    - Remove punctuation to work out if it's a numberWord
      - Convert word into array of chars
      - Filter chars for alphabetic chars
      - Join into string (wordStr)

    - Return index of wordStr in numArr
      - If -1 (becuase it's not there) -> return word as is
      - Otherwise, return word with wordStr part replaced with indx (thus preserving punctation) 

3. Convert transformed array back into string

4. Return string
*/

function wordToDigit(str) {
  const numArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  return str.split(' ').map(word => {
    let filteredWord = [...word].filter(char => (/[a-z]/gi).test(char)).join('');
    let index = numArr.indexOf(filteredWord);

    if (index < 0) {
      return word;

    } else {
      let pattern = new RegExp(filteredWord, 'gi');
      return word.replace(pattern, String(index));
    }
  }).join(' ');
}

//console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."

//console.log(wordToDigit('The weight is done.'));

/*
1. If num < 3, return 1

2. Otherwise, return fib(num - 1) + fib(num - 2)

*/

function fib(num) {
  if (num < 3) return 1;

  return fib(num - 1) + fib(num - 2);
}

/*
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(12));
*/

/*
1A. If num < 3 -> return 1

1. SET fibArr which contains [1, 1] (as 1 and 2 of sequence)

2. SET loop which runs while count <= num -> inside the loop, generate the next fib num and add it to fibArr
  - SET count to 2
  - SET nextNum to fibArr[count - 1] + fibArr[count - 2]
  - ADD nextNum to end of fibArr
  - Increment count by 1

3. After loop, return last num of fibArr
  - Return fibArr[fibArr.length - 1]

*/

function fib2(num) {
  if (num < 3) return 1;

  let fibArr = [1, 1];
  let count = fibArr.length;

  while (count < num) {
    let nextNum = fibArr[count - 1] + fibArr[count - 2];
    fibArr.push(nextNum);
    count += 1;
  }
  return fibArr[num - 1];
}
/*
console.log(fib2(1));
console.log(fib2(2));
console.log(fib2(3));
console.log(fib2(4));
console.log(fib2(5));
console.log(fib2(12));
*/
