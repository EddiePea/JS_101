**INSTRUCTIONS**
- Function 
- Arg: number
- If arg = positive -> return negative
- If arg = negative -> return arg as is

**OUTLINE**
- INPUT: number (NUM)
- OUTPUT: negative NUM

**REQUIREMENTS**
- 0 can be -0

**ASSUMPTIONS**
- Number can include Infinity
- Number can be floating point

**TESTS**
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
negative(Infinity);  // -Infinity

**DATA STRUCTURE**
- Number

**ALGORITHM**
- If num < 0 -> return num
- Else return -1 * num;

**NOTES**
- Come back to consider what -0 actually is