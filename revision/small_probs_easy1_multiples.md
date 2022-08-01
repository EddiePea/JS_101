**INSTRUCTIONS**
- Function
- Computes sum of all nums between 1 and x (inclusive)
- Where nums = multiples of 3 or 5
- Assume x = integer > 1

**OUTLINE**
- OUTPUT: number (x) 
- INPUT: number -> sum of all multiples of 3 or 5 between 1 and x 

**REQUIREMENTS**
- Function accepts num argument
- Argument = integer greater than 1
- Look at range from 1 to x
- Find nums between 1 and x (inclusive) where (num % 3 === 0) || (num % 5 == 0)
- Add the result

**ASSUMPTIONS**
- Integer != Infinity
- Multiple: x % [y] === 0 -> where x is a multiple of y

**TESTS**
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

**DATA STRUCTURE**
- Number output

**ALGORITHM**
- Create function which accepts num argument (x)
- SET counter = 1
- SET sum = 0
- CONTINUE WHILE counter <= x
- If (counter % 3 === 0) || (counter % 5 === 0) 
  - Add counter to sum
- Increment counter by 1
- Return sum

**NOTES**
- Consider spliting out 'is this a multiple' op into a separate helper function