/*
INSTRUCTIONS/RULES:
- Function
- Args: 2 (2 strings => fullText, searchText)
- Return: number (NUM)

ASSUMPTIONS:
- Case sensitive
- Doesn't matter if words within fullText separated by whitespace
- Non-overlapping

INPUT: 2 strings

OUTPUT: number

EXAMPLES:

DATA STRUCTURE:
- String
- Regex

ALGO:
- Use regex.match with global flag
- Should return arr with all inestance of pattern
- Return legnth of arr or length of empty arr
*/

function solution(fullText, searchText) {
  let regex = new RegExp(searchText, 'g');
  let patternArr = fullText.match(regex);
  return (patternArr || []).length;
}

console.log(solution('aa_bb_cc_dd_bb_e', 'bb'));
console.log(solution('aaabbbcccc', 'bbb'));
console.log(solution('bbsc', 'xs'));