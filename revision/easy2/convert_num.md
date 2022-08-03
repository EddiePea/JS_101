**INSTRUCTIONS**
- Function
- Converts non-neg integer to string representation
- Cannot use String(), toString(), or string + num

**OUTLINE**
- INPUT: number
- OUTPUT: string representation of num

**REQUIREMENTS**
- Cannot use normal conversion methods
- Will only be given valid integer

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Could take advantage of the fact that array 'keys' = string indices

**ALGORITHM**
- Set digit object -> string keys, number values OR just use array
- Set emptyArr to store chars
- Loop through num - need to get num into an array first
  - 
- For each digit:
  - Loop through digitObj
  - Set key and value for each [?]
  - If digit === digitObj value -> push digitObj key to emptyArr
- Return emptyArr
- Join emptyArr to return string

**NOTES**
- REVISIT
- Another elegant LS solution -> use switch statement and return template literals 
- USE value.String(radix)   
  - Works with all types (including null, undefined)
  - Guaranteed to return a string
- Such a neat LS solution!
- Declare/initialise digits variable with array of nums -> each string num corresponds to number index
- Result empty string created to hold result
- do while loop: 
  - Remainder declared -> initialised with remainder of num div 10 (e.g. 521 -> 1)
  - num reassigned -> num divided by 10, nearest lowest whole num (e.g. 537 / 10 = 53)
  - result reassigned -> string value at digits arr index[remainder], e.g. remainder 4 -> DIGITS[4] => '4' + [result] (i.e. make sure the rest of the existing result is tacked on)
- Cease once num is no longer greater than 0
- do... while to let it get to 0

function integerToString(num) {
  const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let result = '';

  do {
    let remainder = num % 10;
    num = Math.floor(num / 10);

    result = DIGITS[remainder] + result;
  } while (num > 0);

  return result;
}