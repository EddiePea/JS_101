**INSTRUCTIONS**
- Function
- Accepts string arg (STR)
- Determines and returns UTF string value of STR
- UTF-16 string value = sum of UTF-16 values of every string char
- Can use String.prototype.charCodeAt() to determine UTF-16 value of each char

**OUTLINE**
- INPUT: string (STR)
- OUTPUT: number -> UTF-16 string value

**REQUIREMENTS**
- Function 
- Accepts string arg (STR)
- Determines and returns UTF string value of STR
- Code works with non-ASCII chars from UTF-16 char set
- Empty string will return 0

**ASSUMPTIONS**
- Only 1 string accepted as argument
- Only strings will be entered as args -> no need for validation
- String can contain number, letter and symbol characters
- Whitespace string will return: 32

**TESTS**
utf16Value('Four score');         // 984
utf16Value('Launch School');      // 1251
utf16Value('a');                  // 97
utf16Value('');                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
utf16Value(OMEGA);                  // 937
utf16Value(OMEGA + OMEGA + OMEGA);  // 2811

**DATA STRUCTURE**
- Number return value
- Use array to loop over

**ALGORITHM**
- Convert string to array of individual chars
- If length of array === 0, return empty string
- Loop over array:
  - call charCodeAt() method on each element (will default to 0)
  - add the result to the preceding result
  - return the total

**NOTES**
- With charCodeAt() out of bound index will return NaN
- If index is not a num, defaults to index 0
- Keep it simple -> try iterating over the string rather than jumping straight into an array method