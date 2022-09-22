/*
Rearrange the Sentence
Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

Examples
rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

rearrange(" ") ➞ ""
Notes
Only the integers 1-9 will be used.

ex - 'is2 Thi1s T4st 3a' 
-> This is a Test

ex - 4of Fo1r pe6ople g3ood th5e the2"
- For the good of the people

ex -rearrange(" ") ➞ "" empty str

input: a sentence consisting of word delimited by spaces
  word will have an integer, 
    that integer represents their position in the sentence

output: the sentence sorted according to integers.

explicit:
- case is preserved,
- a string with no words returns an empty string.
implicit:
- words are delimited by spaces,

data:
arr of words

algorithm:
create an array of words, split the string, match,
- wordsArr

return empty str if no words.

sort the array, based on criteria
  - set wordPos1 to the a number within the str
    - search /\d/
    - convert digit string to a number

    set wordPos2 to the number within wordPos2
    - search \/d\

assign newString join the sorted arr with a single space delimiter

newString replace all the digits with ''

*/

// function rearrange(sentence) {
//   let words = sentence.match(/\w+/gi);
//   if (!words) return '';

//   words.sort((word1, word2) => {
//     let num1 = word1.match(/\d/).shift();
//     let num2 = word2.match(/\d/).shift();
//     return num1 - num2;
//   });

//   return words.join(' ').replace(/\d/g, '');
// }


// console.log(rearrange("is2 Thi1s T4est 3a"))

// console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2")) // "For the good of the people"

// console.log(rearrange(" ")); // ''
// algorithm to  substrings or subarrays

/*
/*

------------ **Explicit Requirements** -------------
returns the longest non repeating substring for a 
string input

Rules:
if the substrings tie in length return the once that occurs first.

Inputs:
a string
Output:
- the longest non-repeating substring, the longest substring where no words repeat.


------------ **Implicit Requirements** -------------
repeating substrings get folded into one string
------------- **Clarifying Questions** -------------

------------ Examples/Test Cases/Edge's ------------
longestNonrepeatingSubstring("abcabcbb") ➞ "abc"
longestNonrepeatingSubstring("aaaaaa") ➞ "a"
- strings that 
longestNonrepeatingSubstring("abcde") ➞ "abcde"

------------------ Data Structure ------------------
string- use arr , arr of substrings
-------------------- Algorithm ---------------------

get an array of substrings,
map the substrings, 
  -any substring that has only one character repeating
  -replace with a single occurence of that char.

sort the substrings by their length, 
reduce the substrings to the max length,

return the substring with longest length


**** helper functions ****

---------------------- Notes -----------------------

*/
function substrings(string) {
  let substrings = []
  for (let idx = 0; idx < string.length; idx += 1) {
    for (let idx2 = idx; idx2 < string.length; idx2 += 1) {
      substrings.push(string.slice(idx, idx2 + 1));
    }
  }

  return substrings;
}

function longestNonrepeatingSubstring(string) {
  let allSubstrings = substrings(string);
  let unique =  allSubstrings.map(substr => foldString(substr));
  let longest = unique.reduce((longest, substr) => {
    if (longest.length < substr.length) {
      longest.length = substr.length;
      longest.substring = substr;
    }
    return longest;
  }, {longest: '', length: 0});

  console.log(longest.substring);
}

function foldString(string) {
  return [...string].reduce((newStr, char, idx,) => {
    if (idx === string.indexOf(char)) newStr += char;
    return newStr;
  }, '');
}

console.log(longestNonrepeatingSubstring("abcabcbb"));

longestNonrepeatingSubstring("aaaaaa") 

longestNonrepeatingSubstring("abcde") 

longestNonrepeatingSubstring("abcda") 