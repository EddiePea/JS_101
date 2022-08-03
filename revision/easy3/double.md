**INSTRUCTIONS**
- Function
- Str arg
- Returns new Str -> value of original str with all consecutive duplicate chars collapsed into single char

**OUTLINE**
- INPUT: string arg
- OUTPUT: string -> same value, but consecutive duplicated chars removed

**REQUIREMENTS**
- Take string arg
- Identify chars within the string that are duplicated consecutively
- Reduce those chars to a single char
- Return new string
- Empty string returns empty string

**ASSUMPTIONS**
- Always get string arg -> no need to validate
- Capitalisation makes a difference -> 'gG' != duplicated char
- Whitespaces -> treated like any other char: multiple spaces reduced to 1

**TESTS**
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
crunch('hhhHHHello there') // 'hHelo there'

**DATA STRUCTURE**
- Array -> to use array looping
- Then join to output string

**ALGORITHM**
- Convert string to array
- Loop through array
  - Use forEach and a conditional
  - Use for loop and continue
- Take each char in turn -> if it equals the one before, continue; otherwise, add the char at [indx - 1] to a new arr
- Join new arr to produce string

**NOTES**
- Consider a solution with regex for practice

**LS SOLUTION**
function crunch(text) {
  let index = 0;
  let crunchText = '';

  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

- declare and initialise index variable - value 0
- declare and initialise crunchText variable - value empty string
- while loop:
  - Looping condition -> continue while value of index is less than or equal to the length of the input string - 1 (i.e. until end of string)
  - if the char at given index position does NOT equal the char at the next index position, add that char to the crunchText string
  - Increment index 
- return crunchText