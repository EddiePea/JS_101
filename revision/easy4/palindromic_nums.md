**INSTRUCTIONS**
- Function
- Takes integer argument (INT)
- Returns Boolean:
  - TRUE if INT == [palindromic]
  - Otherwise FALSE
- Palindromic - reads same forwards as backwards

**OUTLINE**
- INPUT: integer
- OUTPUT: boolean

**REQUIREMENTS**
- Function which takes a single integer argument
- Returns TRUE if INT = palindrome
- Palindrome = same forwards as backwards
- Single number -> true

**ASSUMPTIONS**
- Arg -> only ever an integer (no need to validate)
- Integer includes 0
- If negative numbers - can be palindromic

**TESTS**
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
isPalindromicNumber(0);            // true
isPalindromicNumber(-101)          // true (?)

**DATA STRUCTURE**
- Number input
- Boolean output
- Consider using object for reference to index nums and nums
- Consider using array inside to reverse
- Consider using string inside to compare

**ALGORITHM**
- GET absolute number (so negatives are ignored)
- Create array of string versions of each digit in NUM
  - Create emtpy array
  - While NUM >= 0
    - Remainder from multiplier (REM)
    - Add REM to empty array
    - NUM = Math.floor(NUM / 10)
- Reverse array
- Convert forwards array to string
- Convert backwards array to string
- Compare forwards string and backward string - if same, return TRUE

**NOTES**
- REMEMBER: unless you're told to, you do NOT need to reinvent the wheel
- Make use of whatever methods you think will work