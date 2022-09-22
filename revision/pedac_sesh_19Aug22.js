function palindrome(num, s) {
  let resultsArr = [];

  if (isInvalid(num) || isInvalid(s)) {
    return 'Not valid';
  }

  while (resultsArr.length < s) {
    if (isPalindrome(num)) {
      resultsArr.push(num);
    }
    num += 1;
  }
  return resultsArr;
}

function isInvalid(arg) {
  return !!(typeof arg !== 'number' || isNaN(arg) || arg < 0);
}

function isPalindrome(num) {
  let forwardStr = String(num);
  let backwardStr = forwardStr.split('').reverse().join('');

  if (forwardStr.length < 2) return false;
  return (forwardStr === backwardStr);
}

//TESTS
console.log(palindrome(6,4));
// [11,22,33,44]

console.log(palindrome(75,1));
// [77]
console.log(palindrome(101,2));
// [101,111]
console.log(palindrome(20,0));
// []
console.log(palindrome(0,4));
// [11,22,33,44]

console.log(palindrome("ACCDDCCA",3));
// "Not valid"
console.log(palindrome(773,"1551"));
// "Not valid"
console.log(palindrome(-4505,15));
// "Not valid"
console.log(palindrome(4505,-15));
// "Not valid"


/*

- Check if [num] is a palindrome (helper function: isPalindrome())
  - SET forwardsString variable -> contains [num] turned into a string
  - If forwardString length <= 1 -> function returns false 
  - SET backwardStr variable -> stringified [num] turned into an array, reverse it, then turn into string again
  - Ask if forwardsString is exactly the same as backwardsString
    -> If yes -> funciton returns true
    -> If no -> function returns false
- Create a loop which runs while count is less than [s]: 
   - On each iteration, ask if [num] is palidrome (see helper function below) [num]
   - If [num] is a palindrome (i.e. if isPalindrome() returns true) -> add num to beginning of resultsArr
  - Push to resultsArr
   - Increment [num] by 1 at the end of each loop

- Return resultsArr
  

    */
