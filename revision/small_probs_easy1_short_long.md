**INSTRUCTIONS**
- Function
- Takes 2 strings as arguments
- Determines length of the strings
- Returns result of concatenating: shorter_longer_shorter
- Assume strings are different lengths

**OUTLINE**
- INPUT: 2 strings
- OUTPUT: 1 string made up of s_l_s

**REQUIREMENTS**
- Determine lengths of 2 strings
- Concatenate short_long_short
- Return concatenated string
- If 1 arg = empty string, just return arg 2

**ASSUMPTIONS**
- Arguments will always be strings
- Arguments will always be strings of different lengths
- A string will be a continuous string of chars (with no whitespace)
- A string which contains just whitespace will be valid

**TESTS**
- shortLongShort('abc', 'defgh');    // "abcdefghabc"
- shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
- shortLongShort('', 'xyz');         // "xyz"
- shortLongShort('hi there', 'hi') // 'hihi therehi'

**ALGORITHM**
- 2 strings = args (local variables): S1 and S2
- Determine length of S1 and S2
- The longer of S1 and S2 = longStr
- The other = shortStr
- Concatenate => shortStr + longStr + shortStr
- Return concatenated str

**NOTES**
- Note that JS automatically coerces string primitives to string objects where required
- string params can use the .length property -> even though they reference primitive values (not objects)
- You could use a ternary expression