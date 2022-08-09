**INSTRUCTIONS**
- Function - takes one STR arg
- Returns TRUE if STR ARG === palindrom; otherwise FALSE
- Case insensitive
- Ignore non-alphanumeric chars, e.g.

**OUTLINE**
- INPUT: string argument
- OUTPUT: Boolean

**REQUIREMENTS**
- Create function 
- Takes one str arg
- Returns Boolean
- Looks for palindromes -> ignores case, ignores non-alphanumeric chars

**ASSUMPTIONS**
- Always receives str arg -> no need for validation

**TESTS**

**DATA STRUCTURE**
- Boolean output
- Use array inside to filter for non-alphanum chars

**ALGORITHM**
- Transform str into array
- Create filtered, lowercase forward string:
  - Remove all non-alphanumeric chars
    - Is >= '0' && <= '9' ||
    - Is >= A && <= Z ||
    - Is >= 'a' && <= 'z'
  - Transform all chars to lowercase 
  - Join to string
- Create filtered, lowercase backward string:
  - Same steps as above, but then reverse
  - Then join to string
- Compare forwards string to backwards string

**NOTES**
- LS looped through string -> added chars to new string if they were alphanumeric