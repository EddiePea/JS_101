**INSTRUCTIONS**
- Function
- Args: 2 arrays
  - Each arr: list of [numbers]
- Return: new array
  - Contains product of all [combinations of number pairs] that exist between 2 arrs
  - Sorted in ascending numerical order
- Assume arr1 and arr2 not empty

**OUTLINE**
- INPUT: 2 arrays containing numbers
- OUTPUT: NEW array -> product of each num pair combination in ascending order

**REQUIREMENTS**

**ASSUMPTIONS**
- combinations of number pairs => [num1, num2] [num3, num4] 
  -> num1*num3, num1*num4, num2*num3, num2*num4
- Length out output arr = arr1.length + arr2.length + 2

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Set empty arr -> newArr
- Loop through arr1
  - for loop OR forEach
- Loop through arr2
  - for loop OR forEach
- Take each arr1 element and multiply it by each arr2 element
- Add to new array (newArr)
- Sort newArr in ascending order
  - Use sort(a, b)
- Return newArr

**NOTES**
- Come back and consider how I could use reduce for this