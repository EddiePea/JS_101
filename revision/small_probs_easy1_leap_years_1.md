**INSTRUCTIONS**
- Leap year occurs in every year -> divisible by 4
- UNLESS year is also divisible by 100
- If year divisible by 100 != leap year UNLESS year divisible by 400
- Assume this rule is valid for any year > 0
- Function that takes any year greater > 0 input
- Returns Boolean if leap year/not 

**OUTLINE**
- INPUT: num greater than 0
- OUTPUT: Booelean

**REQUIREMENTS**
- Num must be greater than 0 -> otherwise invalid
- Returns true if: 
  - num % 4 === 0
  - num % 4 === 0 && num % 100 === 0 && num % 400 === 0
- Returns false otherwise

**ASSUMPTIONS**
- Only enter number input
- Only integer input -> if floating point, invalid

**TESTS**
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

**DATA STRUCTURE**
- Boolean return

**ALGORITHM**
- Conditional structure
- Validate num
  - If floating point -> invalid
  - If <= 0 -> invalid
- If num % 4 === 0 && num % 100 === 0 && num % 400 === 0
  - Return true
- OTHERWISE if num % 4 === 0 && num % 100 !== 0
  - Return true
- OTHERWISE return false

**NOTES**
- Try to compress your logic where possible
- Think through the different logic steps and ask if there is any overlap