**INSTRUCTIONS**
- Function
- Arg: ARR
- Returns: RETURN_ARR -> 2 ARR elements
  - SubArr1 -> 1/2 of ARR elements (+ middle element if odd length)
  - SubArr2 -> 1/2 of ARR elements (not including middle element if odd length)

**OUTLINE**
- INPUT: 1 Arr
- OUTPUT: 1 [NEW] Arr (containing 2 subArrs)

**REQUIREMENTS**
- If empty ARR -> return 1 arr containing 2 empty subArrs
- If ARR with one element -> return 1 arr containing 2 subArrs, 1st with ARR element, 2nd empty
- If odd num of ARR elements -> 1/2 + mid in first return subArr

**ASSUMPTIONS**
- No nested arrays in ARR 

**TESTS**
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

**DATA STRUCTURE**
- Nested array

**ALGORITHM**
- SET split point => rounded up[ARR.length / 2]
- Check if even length -> TRUE if ARR.length % 2 === 0

- SET newArr = [];
- If length = 0 -> return []

- If odd length: 
  - Create subArr1 from ARR[0] to ARR[splitPoint]
  - Create subArr2 from ARR[splitPoint] to end
- If even length: 
  - Create subArr1 from ARR[0] to ARR[splitpoint-1]
  - Create subArr2 from arr[splitPoint - 1] to end
- Add subArr1 and 2 to newArr
- Return newArr

**NOTES**
- Rather than pushing the 2 subArrs to a newArr -> can just return [subArr1, subArr2], i.e. return it in an array and it the subarrs will become array elements