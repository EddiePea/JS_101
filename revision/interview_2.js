/*
INSTRUCTIONS/RULES:
- Function (SCRAMBLE)
- Takes 2 args (str1, str2)
- Returns:
  - True if a [portion] of str1 chars can be rearranged to match str2, i.e.
    if all of the str2 chars are contained within str1
  - Otherwise false
- If str1.length === str.2.length, can return true if str1 is an anogram of str2
- To return true, str1 must contain all of the str2 chars
- Only lowercase letters used in string args (so no punctuation, no digits)
- If str1.length < str2.length -> return false

ASSUMPTIONS:

INPUT:
- Two strings (each with lowercase letters only)

OUTPUT:
- Boolean

EXAMPLES:

DATA STRUCTURE:
- 'rkqodlw', 'world' -> true
- Strings -> loop through both strings
  - consider includes method
  - Use array inside the loop to use the every method

ALGO:
- If str1.length < str2.length -> return false
- Convert str2 into an array
- Loop through str2 until the end of str2:
  - Ask if every element of str2 is included in str1
    - Take the current char on each loop
    - Consider includes method
  - If false, return false -> otherwise return true

*/

function scramble(str1, str2) {
  if (str1.length < str2.length) {
    return false;
  }

  return [...str2].every(char => {
    return str1.includes(char);
  });

}

console.log(scramble('jav', 'java'));
