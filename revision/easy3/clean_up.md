**INSTRUCTIONS**
- Given string (STR)
- STR -> [words] + assortment of [non-alphabetic] chars
- Write function
- Returns string with all non-alphabetic chars replaced by [spaces]
- If 1+ non-alpha char [in a row] -> only 1 space

**OUTLINE**
- INPUT: string -> containing alphabetic chars + non-alphabetic chars
- OUTPUT: string -> all non-alpha chars replaced by whitespace

**REQUIREMENTS**
- Grammar notation = non-alphabetic char, e.g. comma, quotation mark in string, exclamation mark
- Write function which takes ONE string argument
- Return NEW STRING with all non-alpha chars replaced by whitespace
- If there is a series of non-alpha chars in a row -> replace with just 1 whitespace

**ASSUMPTIONS**
- Non-alpha chars includes numeric chars, e.g. 56
- Non-alpha chars does NOT include whitespace for these purposes -> existing whitespace kept]
- Space = whitespace
- In a row = next to each other, not separated by whitespace
- Non-numeric chars -> includes accented chars

**TESTS**
cleanUp("---what's my +*& line?");    // " what s my line "

**DATA STRUCTURE**
- String
- Maybe need to convert to array within function

**ALGORITHM**
- Create empty results string
- Create alphabet variable with all alpha chars in
OR 
- Get UFT codes for all alphabetic chars AND whitespace
  - 65-90 capital letters
  - 97-122 lowercase
  - 32 - whitespace
- Loop through STR UNTIL end of string length
- If the code point of char[indx] !== [alpha code points]
  - AND code point of char[indx + 1] === [alpha code points]
  - THEN add whitespace to results string
- If code point of char[indx] !== [alpha code points]
  - AND code point of char[indx + 1] !== [alpha code points]
  - add 1 whitespace to results string 
  - resassign string with string cut until [index of next alpha char] (non-incl)
- If code point of char[indx] === [alpha code points] 
  - Add char[indx] to results string
- Return results strng

**NOTES**
- My version didn't quite fit the bill -> didn't get rid of consecutive whitespace completely
- Think laterally -> if what you want is to make sure there are whitespaces between different alphanumeric groupings, you can just add a whitespace where the resultsStr does not end with a whitespace
- Comparison operators and strings will look to the UTF code anyway: no need to write it out
- Regex can be useful here!!