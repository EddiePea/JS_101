**INSTRUCTIONS**
- Function (3 args)
- Determines MEAN (average) of 3 scores passed to it
- Returns letter associated with that grade

**OUTLINE**
- INPUT: 3 numeric arguments
- OUTPUT: string -> letter indicating grade associated with average of 3 numeric args

**REQUIREMENTS**
- function takes 3 numeric args
- args always === positive numbers <= 100 -> no need for validation
- Find MEAN (average) of 3 args

**ASSUMPTIONS**
- Mean = [sum of 3 args] / 3
- Round down or up to nearest integer for average, e.g. 89.5 = 90
- Arguments can be floating point nums
- If one arg is missing -> assume 0 for that score

**TESTS**
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

**DATA STRUCTURE**
- string output

**ALGORITHM**
- If missing an arg (or value === null or undefined) => 0
- Sum arguments
- Divide sum by num of num of args (3);
- Take nearest whole num of output
- IF AVERAGE < 60 -> F
- ELSE IF AVERAGE < 70 -> D
- ELSE IF AVERAGE < 80 -> C
- ELSE IF AVERAGE < 90 -> B
- ELSE -> A
- Return string

**NOTES**
- Don't think I can use switch statement here -> You can actually, as long as the comparison case is a boolean!