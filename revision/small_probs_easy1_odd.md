**INSTRUCTIONS**
- Function
- Takes one integer arg - positive, neg or 0
- Returns true if num's [absolute value] is odd
- Assume arg = valid integer value

**TESTS**
console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

**PROCESSING PROBLEM**
INPUT: valid integer
OUTPUT: boolean => true if 'absolute value' = 'odd'

**RULES & REQUIREMENTS**
- Input will always be a valid integer (e.g. no string values, no fracs, no Infinity, no NaN)
- ** Absolute value means value regardless of sign
- ** Arg can include -0
- If arg = 0, false
- Arg can be positive, negative or 0
- Returns 'true' if num is 0, i.e. division by 2 leaves a remainder 1

**DATA STRUCTURE**
- No need for containing structure
- Output Boolean

**ALGO**
- Divide num by 2
- If remainder === 1 then return false; otherwise return true

**TAKEAWAY**
- The remainder operator will return a negative num when it's LH operand is negative
- To convert the num value to a positive num first, call Math.abs() 
- This method returns the absolute value of a num, regardless of its sign