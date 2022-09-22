/*
INSTRUCTIONS/RULES:
- Args: 2 strings (str1 and str2)
- Determine length of str1 and str2
- Return: result of concatenating shorter-longer-short
- Assume: str1 and str2 are always different lengths
- Input strings can include empty string -> returns longer string only

ASSUMPTIONS:
- If str1 or str2 included whitespace, would be concatenated as
with other strings and whitespace would count towards string length
e.g. ('   abc', 'def') => 'def     abcdef'

INPUT: 2 strings of different lengths

OUTPUT: 1 string => short-long-short concatenated

EXAMPLES:

DATA STRUCTURE:
- strings
- determine length
- concatenate

ALGO:
- Get string lengths
- Work out which string is longer -> compare string lengths
- Set longer to longer string
- Set shorter to shorter string

- concatenate strings: shorter-longer-shorter
- return concatenated string
*/

function shortLongShort(str1, str2) {
  let longer = str1.length > str2.length ? str1 : str2;
  let shorter = str1.length < str2.length ? str1 : str2;

  return shorter.concat(longer, shorter);

}

console.log(shortLongShort('abcde', 'fgh'));
