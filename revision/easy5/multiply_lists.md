**INSTRUCTIONS**
- Function: takes 2 arr arguments
- Each arr contains list of numbers
- Returns: new arr
- New arr contains product of each pair of nums from args with the same index
- Assume args contain same num of elements

**OUTLINE**
- INPUT: 2 arrays, equal length
- OUTPUT: New array, product of each corresponding pair of elements

**REQUIREMENTS**
- Function takes 2 array arguments
- Both arrays are of equal length 
- Function multiplies the elements at the same index position in each arr argument to produce product
- Product added to new array and returned

**ASSUMPTIONS**
- 0 possible
- Only integers (not floating point)

**TESTS**
multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Loop through one array and access its index numbers in turn
- Multiply arr1[i] by arr2[i]
- Add the products to newArr
- Return newArr

**NOTES**