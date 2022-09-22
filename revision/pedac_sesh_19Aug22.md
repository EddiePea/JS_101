/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 

*/

- Function 
  - Args: 2 numbers -> num and s
    - [num] ->
    - [s] -> 
  - Return: array [s] length of numerical pals after num

- INPUT - numbers
- OUTPUT - array -> [s] length
  - NOT VALID string if input is not a number greater than or equal to 0

Confirm: 
- Only positive integers for num and s
- 0 and above nums greater than 0

- Negative numbers? No signs
- Integers?
- Decimal values?

RULES
- s is limit
- Palindromes -> must have length of 2 digits at least 
- num included in the array if it's a palindrome (inclusive of num)
- if num or s is not a number greater or equal to 0 -> return STRING not valid
- String of nums is not a number

- If s is 0 -> return an empty array (i.e. an array of length 0) 
- If [22, 0] -> length takes priority (do not return num)

**ALGORITHM** 

- SET count variable to 0
- SET resultsArr variable to an empty array 

- Validate arguments:
    - If [s] or [num] is not a number 0 or greater than zero -> return string 'Not valid'
      - BREAK THIS DOWN
  
- Create a loop which runs while count is less than [s]: 
   - On each iteration, ask if [num] is palidrome (see helper function below) [num]
   - If [num] is a palindrome (i.e. if isPalindrome() returns true) -> add num to beginning of resultsArr
  - Push to resultsArr
   - Increment [num] by 1 at the end of each loop

- Return resultsArr
  
- Check if [num] is a palindrome (helper function: isPalindrome())
  - SET forwardsString variable -> contains [num] turned into a string
  - If forwardString length <= 1 -> function returns false 
  - SET backwardStr variable -> stringified [num] turned into an array, reverse it, then turn into string again
  - Ask if forwardsString is exactly the same as backwardsString
    -> If yes -> funciton returns true
    -> If no -> function returns false


  **NOTES**
  - How do we bridge the gap between input and output? THIS IS DATA STRUCTURE QUESTION!!
  - Check for pattern between them 
  - 6=> [] => [11] => [11, 22] ...
  - BREAK DOWN PROBLEMS
  - Do not strive for efficiency 
  - Stick as closely to your algo as possible 
  - Test your code frequently at all stages
  - If you get stuck go back to your algo



  ALL SESH
  /*

A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332 
110011 
54322345

You'll be given 2 numbers as arguments: (num, s). Write a function which returns an array of s number of numerical palindromes that come after num. If num is a palindrome itself, it should be included in the count. 

Return "Not valid" instead if any one of the inputs is not a number or is less than 0.

Single digit numbers will NOT be considered numerical palindromes. 

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


*/

/*
Understanding the [P]roblem
  - Input: 
    - `num`, `s` -> numbers, numbers > 0
  - Output:
    - array, with a length of s
    - "Not valid"
  - Rules:
    - `s` is the length / stopping point
    - `num` itself is included in the array if it's a palindrome
    - if `num` or `s` is not a number >= 0, then return "Not valid"
    - palindrome:
      - has to be at least 2 digits
      - is number that reads the same backwards and forwards
    - if `s` is 0, then return an empty array []
    - if `num` is palindrome, and `s` is 0, then return an empty array []
    - string of numbers is not a number

[E]xamples and Test Cases

[D]ata Structure
num = 6, count = 4

6 => []      [11, 22, 33] <= [11, 22, 33, 44]

=> [11, 22, 33, 44]
=> length = count

--

num = 75, count = 1

75 => [] => [77]
75 => [77]

101 => [] => [101] => [101, 111]

[A]lgorithm

*/


/* (Genna)
  //initialize a variable to hold an empty array
  //initialize a variable to hold the current number to start at (make it into an array)
  //initialize a variable to hold the counter
  //check to see if the current number is a palindrome by comparing the current number array is the same order forwards and backwards
    //if the current number is a palindrome
      //convert it back into a number
      //save the number to the empty array
    //Otherwise
      //increment the current number by one
      //check again
  //check to see if length has been reached
  //if length has been reached
    //return the new array
  //otherwise, check the current number again (repeat process)
*/





/*
**Eddie**

- SET count variable to 0
- SET resultsArr variable to an empty array 

- Validate arguments:
    - If [s] or [num] is not a number 0 or greater than zero -> return string 'Not valid'
    

- Create a loop which runs while count is less than [s]: 
   - On each iteration, ask if [num] is palidrome (see helper function below) [num]
   - If [num] is a palindrome (i.e. if isPalindrome() returns true) -> add num to beginning of resultsArr
  - Push to resultsArr
   - Increment [num] by 1 at the end of each loop

- Return resultsArr
  
- Check if [num] is a palindrome (helper function: isPalindrome())
  - SET forwardsString variable -> contains [num] turned into a string
  - If forwardString length <= 1 -> function returns false 
  - SET backwardStr variable -> stringified [num] turned into an array, reverse it, then turn into string again
  - Ask if forwardsString is exactly the same as backwardsString
    -> If yes -> funciton returns true
    -> If no -> function returns false
*/

//mahfuz
// // if num or s <= 0 return 'not valid'
// if TYPE of num or s is not number return 'not valid'
// if s  Equal to 0 return empty array[]

// Declare an array
// if num is of 1 digit increment it until it has 2 digits



//   while the length of  the array is less 's' 

//     check if it's a palindrome. 
//       if yes add it to the array.

function palindrome(num, s) {
  let count = 0;
  let resultsArr = [];

  if (isInvalid(num) || isInvalid(s)) {
    return 'Not valid';
  }

}

function isInvalid(arg) {
  return !!(typeof arg !== 'number' || isNaN(arg) || arg < 0);
}



//function isPalindrome(num) {
//
//}