**INSTRUCTIONS**
- Create function
- 2 args:
  - Arr => 2+ elements that (combined with adjoining spaces) = name
  - Obj => 2 keys (title + occupation) with appropriate values
- Return greeting:
  - Uses person's full name
  - Mentions person's title

**OUTLINE**
- INPUT: 
  - array -> 2+ string elements
  - object -> 2 keys: title + occupation, w/ string values
- OUTPUT: string referencing [array name] + [object title + occ]

**REQUIREMENTS**
- Array argument - 2+ string elements corresponding to name
- Print spaces between each array element
- Object argument - 2 keys, string values -> title + occ

**ASSUMPTIONS**
- Array elements -> always strings
- Object values -> always strings
- Array elements - in order for name (no rearrangement necessary)
- Arr arg always 1st
- Obj arg always 2nd
- No whitespace inserted in arr

**TESTS**
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.

**DATA STRUCTURE**
- String output
- Use array element reference
- Use object element reference

**ALGORITHM**
- Convert array elements to string -> separate with whitespace
- Access object values

**NOTES**
- If you are using element reference in one place, think about using it across the board in string outputs
- If you want something logged to the console, you don't need to log it inside the function -> it can just be the return value