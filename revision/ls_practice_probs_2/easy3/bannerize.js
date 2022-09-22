/*
INSTRUCTIONS/RULES:
- Arg: string (line of text)
- Output: print string within box
- If input string empty -> output box only

ASSUMPTIONS:
- No validation needed

INPUT: string

OUTPUT: string in a box

EXAMPLES:

DATA STRUCTURE:
- String

ALGO:
- Top line of box ->
  - min +--+
  - Extend middle '-' to fit with length of inputStr

- Width of box ->
  - Min + | | | +
  - Follow middle | with inputStr

*/

function logInBox(str) {
  let length = '+-' + '-'.repeat(str.length) + '-+';
  let width = '| ' + ' '.repeat(str.length) + ' |';
  let widthWithText = '| ' + str + ' |';

  console.log(length);
  console.log(width);
  console.log(widthWithText);
  console.log(width);
  console.log(length);
}

logInBox('hello there');