/*
- Keep going through in detail
- Edge cases -> before starting in problem phase (and maybe example)

find edge cases that are not covered
  - 40% problem description
  - 50% test cases
  - 10% other edge cases
  - Other data types -> or no input
  - Frame it as "can I expect always to get..."

  - Usual suspects
    - strng -> empty string, case sensitive, special chars
    - Can I always expect to get lowercase letters

- Ask questions -> worst thing, they say no
  - Ex 1 (pairs of nums) => ask if it's ok to mutate (sort it in place)
  - Ask about assumptions

- Consider different approaches:
  - Alfred - program
  - log -> create shortcuts
  - Usually two kinds of approaches: (i) build it myself or (ii) take all
  and produce what they want by reducing it
    - Get everything
    - filter with palindrome helper func
  - Look from a different angle -> easier way?

- Break algo into sub-problems
  - Denote with numbers
  - Break it down
  - Guides interviewer through your thought process
  - Gives you flexibility
  - How much detail for PEDAC? Can just do high level steps

- Keep testing!
  - Be more explicit in fact that jumping back into algo
  - Go back to algo

- Track your own time...
  - Keep a look at time...know how much time you spent
  - 20 mins on 1st; 26 mins for second (11 mins of PEDAC and 15 mins
    on coding)
  - Aim for under 25 mins

- PEDAC part at start with data structure
  - It's ok to go to the algo first
  - Dynamic framework

*/


/*
Find the length of the longest substring in the given string
that is the same in reverse.

As an example, if the input was "I like racecars that go fast",
the substring's ("racecar") length would be 7.

If the length of the input string is 0, return value must be 0.
*/

/*
INSTRUCTIONS/RULES:
- Length of longest substring in inputStr  
  - substring === same in reverse (i.e. palindrome)
- If inputStr.length === 0, return 0
- palindromic substring length can be 1
- inputStr can include nums and letters 

ASSUMPTIONS:
- inputString can include whitespace
- inputStr can include special chars

INPUT: string

OUTPUT: number (length of longest palindromic substring)

DATA STRUCTURE:
string _> number
'baa' -> 
array -> store valid strings and count

ALGO:
- Find all possible substrings (helper func)
    - SET empty arr;
  - Loop through inputString
    - SET empty str;
    - Leading substrings -> starting from [0]
      - [0]
      [0][1]
      etc. to end of string
    - Do same starting from [1] etc. 

- Check if a givne substring is a palindrome
  - Set resultsArr
  - Generate all substrings -> array
  - Take each substring
  - Reverse substring -> turn into array, reverse, join
  - Ask if substring === reversed substring
  - If yes, add to resultsArr

- Of the palindromes, find longest
  - Generate array of palindromes
  - Transform array into lengths
  - Find index of longest length
  - Return string at that index in the pal array

- Return length of longest palindrome

*/

function findLeadingSubstrings(str) {
  let subStrArr = [];

  for (let i = 0; i < str.length; i += 1) {
    let subStr = str.slice(0, i + 1);
    subStrArr.push(subStr);
  }
  return subStrArr;
}

function findAllSubstr(str) {
  let subStrArr = [];

  for (let i = 0; i < str.length; i += 1) {
    let subStr = str.slice(i);
    let newSubStr = findLeadingSubstrings(subStr);
    subStrArr.push(newSubStr);
  }
  return subStrArr.flat();
}

function palindromes(str) {
  let subStrsArr = findAllSubstr(str);

  return subStrsArr.filter(word => {
    let reversedWord = word.split('').reverse().join('');
    return reversedWord === word;
  });
}

function longestPalindrome(str) {
  if (str.length === 0) return 0;
  
  let palArr = palindromes(str);
  
  let lengthsArr = palArr.map(word => {
    return word.length;
  });
  
  return Math.max(...lengthsArr);
}



console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("")); // 0
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9


// --------- Gianni's solution:

/*
Problem:
Find the length of the longest substring in the given string
that is the same in reverse.

As an example, if the input was "I like racecars that go fast",
the substring's ("racecar") length would be 7.

If the length of the input string is 0, return value must be 0.

Rules:
The input string can contain zero or more palindromes.
We're looking for the longest palindrome.
If no palindromes exist in the string, then we return 0.
Input will always be a string.
Input string may contain any types of characters.
Palindromes might be of any length (>= 1)
Case insensitive ("Aa" is a palindrome)

Example:
console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9

Data Structure:
Input: String
Output: Number

Might use an array for iteration, filtering and reversing and sorting.

Algorithm:
- Set function longestPalindrome(inputString)
  1) Identify all Substrings
    - Set substrings = []
    - Iterate through the String with "start" as an iteration variable
      - Iterate through the rest of the String with "end" as an iteration variable
        - Add a substring of inputString from start to end to the Substrings array
  2) Amongst each of the Substrings, identify all Palindromes
    - Set palindromes = []
    - Iterate through the aubstrings Array
      - If the Substring is equal to the substring reversed
        - add the substring to the palindromes Array
  3) Amongst the Palindromes, identify the longest & return it.
    - Sort the palindromes array by increasing length of the strings
    - return the first element's length
*/