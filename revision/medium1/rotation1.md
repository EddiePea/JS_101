**INSTRUCTIONS**
- Function -> [rotates_an_array]
  - Moves first element to end of array
- Do not modify original array
- If input is NOT an array -> return undefined
- If input is [] -> return []

**OUTLINE**
- INPUT: array (but might be empty or no arr or no arg)
- OUTPUT: (i) if array -> NEW rotated array
          (ii) if not an array OR no args -> undefined

**REQUIREMENTS**
- [rotate] => move element[0] to end of ARR
- If one element in array -> return array as is
- It doesn't matter if the array elements are different data types

**ASSUMPTIONS**

**TESTS**
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Create guard clause: 
  - If the argument is not an array -> return undefined
  - That should capture the situation where no arg is entered BUT check
- Make a copy of ARR
- Remove the first element of copyARR
- Add removed first element back to copyARR (at the end)

**NOTES**