/*
INSTRUCTIONS/RULES:
- Arg: string (STR)
- Returns: char that occurs least often in STR
  - If multiple chars with same lowest num of occurences -> return first
  in STR
- Case insensitive
- Chars include empty space
- If one char only repeated in a sentence (and no others), return that char

ASSUMPTIONS:
- Chars include special chars, e.g. '!'

INPUT: string

OUTPUT: string containing a single lowercase char

EXAMPLES:

DATA STRUCTURE:
- Use object to contain char and number of occurences

ALGO:
1. Set countObj to {}

2. Loop through STR:
  - If char.toLowerCase() is included in countObj already, increase
  its value by one
  - Otherwise, its value is now 1

  { h: 1, e: 1 etc.}

3. Create array of countObj's keys values and find the smallest value
  find smallest => OBject.values and Math.min -> [1]
  [[h, 1] [e, 1], [l, 3]]
  - let smallestVal
  - Loop through each subArr
  - If subArr[1] === smallestValue then return subArr[0]

ALGO2:

- Convert STR into array of chars
- Loop through the charsArr -> transform it
  - Start with first char
    - transform charsArr => all lowercase
    - filter charsArr for chars that match char.toLowerCase()
    - Return length
- Have an array of numbers which correspond to number of times char
appears in string
- Find smallest num
- Find index of smallest num in charsArr
- return char at corresponding indx of STR

*/

function leastCommonChar(str) {
  let numsArr = numberOfAppearances(str);
  let smallestIndx = numsArr.indexOf(Math.min(...numsArr));

  return str[smallestIndx].toLowerCase();
}

function numberOfAppearances(str) {
  let charsArr = str.split('').map(char => char.toLowerCase());

  return charsArr.map(char1 => {
    return charsArr.filter(char2 => {
      return char2 === char1.toLowerCase();
    }).length;
  });
}

console.log(leastCommonChar("Hello World") === "h");
console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers") ===
                            "t");
console.log(leastCommonChar("Mississippi") === "m");
console.log(leastCommonChar("Happy birthday!") === ' ');
console.log(leastCommonChar("aaaaaAAAA") === 'a');
