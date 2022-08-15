**INSTRUCTIONS**
- Function 
- Arg: array (ARR)
- Result -> reverse ARR's elements [in_place]
  - i.e. mutate ARR
- Return value: same array object as ARR
- Can't use 'reverse()'

**OUTLINE**
- INPUT: array (ARR)
- OUTPUT: ARR -> BUT with elements reversed 

**REQUIREMENTS**
- Mutate the array argument
- One element: outputs array with the one element
- No elements -> outputs empty array

**ASSUMPTIONS**
- [in_place] - means it mutates the array argument

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Loop through ARR
- Remove first element of ARR
- Add the removed elements to a newArr
- Loop through newArr
- Add the first element back to ARR until there are no elements left in newArr
- Return ARR

**NOTES**