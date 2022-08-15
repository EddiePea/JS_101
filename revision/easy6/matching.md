**INSTRUCTIONS**
- Function
- Arg: string (STR)
- Returns: true IF all [parentheses] in STR are [properly_balanced]; false otherwise
- Properly_balanced -> parentheses [must occur in '(' and ')' pairs]

**OUTLINE**
- INPUT: 
- OUTPUT:

**REQUIREMENTS**
- If no brackets in string, returns true
- Bracket pairs must occur in the right order (i.e. opening then closing)

**ASSUMPTIONS**
- Parentheses = brackets
- Properly_balanced -> parens must have an opening and closing bracket pair

**TESTS**

**DATA STRUCTURE**
- Array 

**ALGORITHM**
- Convert string into array
- Filter array -> 
  - Create filtered array of `)`
  - Create filtered array of `(`
  - Create filtered array of only brackets
- Return false if:
  - Length of filtered arrays does not match
  - FilteredArr starts with )
- Return true if: 
  - Length of filtered arr is 0

**NOTES**
- Getting really caught out by the return statement here