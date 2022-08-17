**INSTRUCTIONS**
- Triangle classification: 
  - Equilateral: all sides equal length
  - Isosceles: 2 sides of equal length, 3rd different
  - Scalene: all 3 sides of different lengths

- Valid triangle: 
  - Sum of lengths of 2 shortest sides > length of longest side
  - Every side length > 0

- Function
- Args: [lengths] of 3 sides of triangle
- Returns: string -> indicating triangle classification
  - equilateral, isos, scalene or invalid

**OUTLINE**
- INPUT: 3 numbers
- OUTPUT: string -> indicating triangle classification

**RULES**
- Possible to take floating point numbers for lengths
- No length <= 0
- Can get 0 as an arg -> have to return invalid

**ASSUMPTIONS**
- Will only receive number arguments -> no validation needed
  e.g. no need to check for NaN or negatives
- Infinity -> 'invalid'
- Will only ever receive 3 args

**TESTS**

**DATA STRUCTURE**
- Array -> call various methods on array of lengths

**ALGORITHM**
- Create an array of the 3 args (arr)
- Put arr into numerical order -> smallest to largest

- Create series of conditionals
  - Check for invalid triangles: 
    - If any arr element <= 0 -> return invalid
    - If arr[0] + arr[1] <= arr[3] -> return invalid
  - Check equi: 
    - If arr[0] equals arr[1] and arr[2] -> return equilateral
  - Check scalene:
    - If arr[0] is not equal to arr[1] or arr[2]
    - AND arr[1] is not equal to arr[2]
    - Return scalene
  - Otherwise return isos

**NOTES**
- Try to think logically about excluding certain logically unnecessary steps -> where are there overlaps