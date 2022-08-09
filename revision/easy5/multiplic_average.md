**INSTRUCTIONS**
- Function 
- Arg -> array of integers [ARR]
- Multiplies all integers together [RESULT] 
- Divides result by number of entries in the array [RESULT_AVERAGE]
- Returns result (rounded to 3 dp) as string [rounded_result]

**OUTLINE**
- INPUT: array of integers
- OUTPUT: string -> average to 3dp

**REQUIREMENTS**

**ASSUMPTIONS**
- Positive/ negative doesn't make a difference
- Integers do not include 0

**TESTS**
multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

**DATA STRUCTURE**
- Use array inside function 
- Output string

**ALGORITHM**
- Multiply all integers in ARR by each other to get RESULT
  - Loop through array
  - Multiply ARR[i] by ARR[i+1] and so on until a single number results
  - e.g. could use reduce
- Divide RESULT by ARR.length to get RESULT_AV
- Convert RESULT_AV into string with 3dp -> to get ROUNDED_RESULT
  - Could use .toFixed(3) -> converts to string automatically
- Return ROUNDED_RESULT

**NOTES**
- Remember: you need to be able to do this in for loop and with built in methods