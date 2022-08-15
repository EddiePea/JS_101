**INSTRUCTIONS**
- Function 
- ARG: string [first_name] + [' '] + [second_name]
- Return string [last_name], [first_name]

**OUTLINE**
- INPUT: string (with first name, space, second name)
- OUTPUT: string (with last name, comma, space, second name)

**REQUIREMENTS**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Convert string to array
  - Split words where whitespace occurs
- Reverse the array
- Convert array to string
  - Join array - adding ', ' as separator

**NOTES**
- When you're taking off the first or last element of an array, consider capturing the return of pop or shift