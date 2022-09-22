/*
INSTRUCTIONS/RULES:
- Function:
  - Arg: number (year)
  - Return: string -> century with relevant suffix

- New century starts with years ending with 01
  e.g. 1901 to 2000 => 20th century
        2001 => 21st

ASSUMPTIONS:
- No need for validation -> will only get positive integers as input

INPUT: number

OUTPUT: string

EXAMPLES:

DATA STRUCTURE:

e.g. 2000 -> '20th'
- Use numbers to get right century
- Convert to string and concatenate with string suffix

ALGO:
- Trying to take a number, find the relevant century and add
the appropriate suffix
  - Conditional logic

- Get relevant century:
  - Divide num by 100 -> take nearest largest whole num

- Get relevant suffix:
  - IF century ends in '11', '12' or '13' -> 'th'
  - IF century ends in 1 -> add 'st'
  - IF century ends in '2' -> add 'nd';
  - IF century ends in '3' -> add 'rd';
  - Otherwise -> 'th'

- Helper function to deal with 11, 12, 13
  - IF century ends in '11', '12' or '13'
  return 'th'

- Concat century and suffix and return string
*/


function endsWithElevenTwelveOrThirteen(numStr) {
  let lastDigits = numStr.slice(-2);
  return (lastDigits === '11' || lastDigits === '12' || lastDigits === '13')
}

function addSuffix(numStr) {
  if (endsWithElevenTwelveOrThirteen(numStr)) {
    return 'th';
  } else {
    let lastDigit = numStr.slice(-1);
    switch (lastDigit) {
      case '1': return 'st';
      case '2': return 'nd';
      case '3': return 'rd';
      default: return 'th';
    }
  }
}

function century(num) {
  let stringCentury = String(Math.ceil(num / 100));
  return stringCentury + addSuffix(stringCentury);
}

console.log(century(10103));