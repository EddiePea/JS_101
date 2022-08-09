**INSTRUCTIONS**
- double num = [even-length] num, where [left-side] digits === [right-side] digits
- e.g. 44, 3333, 103103, 7676
- function (NUM)
- returns the NUM argument * 2
- UNLESS arg === double num -> return arg

**OUTLINE**
- INPUT: number (integer?)
- OUTPUT: 

**REQUIREMENTS**
- Create function -> takes one arg (NUM)
- Check if NUM === [double-num]: 
  - Even number
  - Left-side digits === right-side digits
- If NUM !== [double-num] -> return NUM * 2


**ASSUMPTIONS**
- Always get an integer (so no floating point)?
- 0 -> 0 (not a double num and 0 * n = 0)
- Always enter number (so no need for validation)
- e.g. in 103104 -> left-side digits = [103], right-side digits = [104]
- Always get positive num?

**TESTS**
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
twice(0);           // 0

**DATA STRUCTURE**
- Number

**ALGORITHM**
- Check if NUM === double num:

  - NUM % 2 === 0
  - Turn NUM into string
//This turned out to be unnecessary -> could have stayed with num as string
  - Turn string into array of separate numeric chars
  - Get length of arr / 2 [split point]
  - Half1 variable => add array elements from index 0 up to indx splitpoint - 1
  - Half2 variable => add array elements from splitpoint to end
  - Join half1 and half 2 variables to create strings
  - If half1 string === half2 string return TRUE

- If YES -> return NUM
- If NO -> return NUM * 2

**NOTES**
- If you're transforming something from num to string to array to string -> think do you need to middle step??
- You can still get length and reference strings
- Could also use a ternary expression and fold in the rest of the twice function that way