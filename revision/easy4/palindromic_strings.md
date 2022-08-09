**INSTRUCTIONS**
- Function 
- Takes STR arg
- Returns TRUE if STR == [palindrome] (otherwise FALSE)
- Palindrome -> reads same forwards as backwards (e.g. madam)
- Case matters
- Chars matter

**OUTLINE**
- INPUT: String argument
- OUTPUT: Boolean -> TRUE if STR === palindrome; otherwise false

**REQUIREMENTS**
- Function takes STR argument
- Palindrome:
  - Same forwards as backwards, e.g. madam
  - Case sensitive, e.g. Madam //false
  - Char sensitive, e.g. madam i'm adam //false
  - Numeric strings can be valid

**ASSUMPTIONS**
- Will always receive string argument -> no need to validate type (e.g. number, null, object etc.)
- Strings containing special chars can be valid
- Empty string -> false
- String containing just whitespace -> false

**TESTS**
isPalindrome('madam');               // true
isPalindrome('Madam');               // false
isPalindrome("madam i'm adam");      // false
isPalindrome('356653');              // true
isPalindrome('');                   // false
isPalindrome(' ');                  //false
isPalindrome('$$$$')               // true

**DATA STRUCTURE**
- output Boolean
- string input -> compare as string?

**ALGORITHM**
- Create function which accepts a single arg
- IF ARG === '' || ' ' -> return FALSE
- Work out if string is odd or even length
  - If % 2 === 0 'even' OTHERWISE 'odd'
- Get 'split point' - STR.length / 2 - round down
  - e.g. if STR>length = 5, split point = 2
  - if STR.length = 4, split point = 2
  - if STR.length = 10, split point = 5
- Create half strings and compare:
  - Create firstHalf -> indx[0] to indx[splitPoint] (slice)
  - Create secondHalf -> 
    - IF EVEN -> [splitPoint] to END
    - IF ODD -> i[splitPoint - 1] to END
  - If firstHalf === secondHalf - return TRUE

**NOTES**
- Keep it simple!!! 
- Remember -> a palindrome is the whole thing forwards === whole thing backwards