**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: boolean
  - TRUE: if all [alphabetic_chars] inside STR are uppercase
  - FALSE otherwise
- Ignore [non-alphabetic_chars]

**OUTLINE**
- INPUT: 
- OUTPUT:

**REQUIREMENTS**
- Empty string returns true

**ASSUMPTIONS**
- Alphabetic chars = a to z
- Non-alphabetic chars = whitespace, punctuation, numbers etc.

**TESTS**
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

**DATA STRUCTURE**
- Try just string 
- Then try using arr

**ALGORITHM**
- Create function that checks if a char === alphabetic
  - Make use of comparison operator's lexicographci comp of chars using UTF-16 code points 
- SET count variable to 0
- Loop through STR
  - If char is not alphabetic -> continue
  - Otherwise if (!char === char.toUpperCase()) return false
- Return true if not already returned false

OR 

- Convert string to array
- Filter array for non-alpha chars
- Check if every char in the array === char.toUpperCase()
  - return false if not

**NOTES**
- Keep It Simple Stupid