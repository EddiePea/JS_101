**INSTRUCTIONS**
- Function takes one arg
- arg = positive integer (num)
- Return list of digits in the num

**OUTLINE**
- INPUT: positive integer
- OUTPUT: array with num elements

**REQUIREMENTS**

**ASSUMPTIONS**
- 0 will output [0]

**TESTS**
digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

**DATA STRUCTURE**
- Array

**ALGORITHM**
- SET newARr
- Loop through num
  - Take the remainder of dividing num by 10 - add to newArr
  - Divide num by 10 and round down to nearest integer
- Repeat until num = 0
- Return newArr


**NOTES**
- Don't try to reinvent the wheel!!!