**INSTRUCTIONS**
- Function 
- Arg: positive integer
- Returns: num with digits reversed

**OUTLINE**
- INPUT: number [NUM]
- OUTPUT: number with digits of NUM reversed

**REQUIREMENTS**
- Drop leading zeros (e.g. 12000 reversed = 21)

**ASSUMPTIONS**
- 0 outputs 0

**TESTS**
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1
reverseNumber(0);   //0

**DATA STRUCTURE**
- Array - to reverse

**ALGORITHM**
- Convert NUM into array of the separate digits [ARR]
- Reverse ARR
- Convert ARR into string of joined digits [STR]
- Convert STR into number
- Return number

**NOTES**