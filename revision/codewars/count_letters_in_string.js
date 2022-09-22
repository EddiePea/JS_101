/*
INSTRUCTIONS/RULES:
- Arg: STR
- count lowercase letters in STR
- Return: lettercount in an object
  - Letter is key
  - count is value

ASSUMPTIONS:
- Ignore uppercase
- Ignore all symbols and other chars that are not a-z

INPUT: string

OUTPUT: object

EXAMPLES:
letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1,
"i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

DATA STRUCTURE:
- Object

ALGO:
- Set empty object
- Loop through string
  - If [char] is a property of the object already -> add 1 to its value
    - so if accessing object[char] is truthy -> then reassign its value to
    increment by one
  - Otherwise create new key-value pair: char : 1;

- Return object


*/

function letterCount(str) {
  let results = {};

  for (let i = 0; i < str.length; i += 1) {
    (results[str[i]] += 1) || (results[str[i]] = 1);
  }
  return results;
}

console.log(letterCount('arithmetic'));