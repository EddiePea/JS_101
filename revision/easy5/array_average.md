**INSTRUCTIONS**
- function takes one ARG
- Arg = array of integers
- Returns: average of integers -> round down to [integer_component] of the average
- ARR never empty 
- ARR elements = positive integers

**OUTLINE**
- INPUT: array of positive integers
- OUTPUT: single num = average of integers (rounded down)

**REQUIREMENTS**

**ASSUMPTIONS**
- [integer_component] = whole num without remainder

**TESTS**
average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

**DATA STRUCTURE**
- Array inside function
- num output

**ALGORITHM**
- Loop through ARR
- Add each successive element to the next to get SUM
- Divide SUM by ARR.length -> to get AVERAGE
- Round AVERAGE down to nearest whole num
- Return NUM

**NOTES**