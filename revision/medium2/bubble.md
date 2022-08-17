**INSTRUCTIONS**
- Bubble sort overview:
  - Simple sorting algorithm
  - BUT inefficient -> so devs rarely use it in real code
  - AKA [sinking_sort]
  - Bubble name -> larger elements 'bubble up' to top of list 

- How bubble sort works: 
  - Makes multiple [passes] (iterations) through an array (ARR)
    - Starts at indx[0] and moves up through till indx[ARR.length - 1]
    - Then starts again at indx[0] etc.
  - On each [pass] the values of [each pair of consecutive elements] are compared
  - If val1 > val2 => elements are swapped
  - Repeat until a complete pass is made without any swaps
  - Then ARR is completely sorted 

- Function: 
  - Sorts an array using the bubble sort algo
  - Do sorting 'in place' -> function should mutate ARR
  - Assume ARR contains at least 2 elements


**OUTLINE**
- INPUT: array of numbers (ARR)
- OUTPUT: ARR sorted

**RULES**
- ARR can contain Strings or numbers

**ASSUMPTIONS**
- No need to check for invalid elements, e.g. Infinity, undefined, null (?) -> or, like sort, do we need to put these at the end?

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Create outer loop (which runs until no more swaps are carried out)
  - SET index to 0
  - SET swapsCounter to 0
  - Loop through ARR using index numbers to access ARR elements
    - Loop runs while i < ARR.length
    - If ARR[i] > ARR[i + 1]
      - ARR[i + 1] is reassigned to ARR[i]
      - AND swapsCounter is increased by 1
    - Increase [i] by 1 on each loop
  - If at the end of inner loop swapsCounter === 0 -> break out of outerloop
  - Return ARR

**NOTES**
- Don't forget about destructuring assignment!
- Work through each of your steps before you run it to make sure you're not missing something obvious, e.g. incrementing a counter