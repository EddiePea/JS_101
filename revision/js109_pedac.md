***INSTRUCTIONS***

// You are given an array of strings and an integer k.
// Your task is to return the first longest string consisting of k
// consecutive strings taken from the array.

// Example: 

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

***TEST CASES***
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

***INPUTS***
  -array of strings
  -integer `k`
***OUTPUT***
  -string made up of `k` strings from the input array
***RULES***
  - First occurence of longest composite string 
  - The string elements that make up the composite output string have to be consecutive elements in the input array 
  - If the input array is empty or `k` < the length of the array or `k` <= 0 return an empty string
  - If `k` is equal to 1, return the longest string in the collection
  - Strings in input array may contain any type of character (every character counts towards the length)
***DATA STRUCTURE***
  -array of strings / integer
    -array of `k` strings
  -string

***PSUEDOCODE***
1. Store input array in a variable
2. Find the length of the input array [n]
3. Return an empty string if: 
    - [n] is 0
    - [k] is greater than [n]
    - [k] is less than or equal to 0 
4. Otherwise, loop over input array
   - Take [k] elements in the intput array (starting from index 0) 
   - Join the elements and add to a new array [y]
   - Do that until the end of the input array, i.e. all consecutive combos are captured
6. Filter the new array [y] for the element of the longest length
   - Produce an output array [x] of the longest element 
7. If the length of the output array [x] is greater than 1, take the first element of that array and ignore the rest  