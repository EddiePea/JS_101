**INSTRUCTIONS**
- Program
- Prompts user for 2 +integers
- Prints results of various operations on those nums
- Operations = + - * / % **
- No need to validate

**OUTLINE**
- INPUT: user numeric string input
- OUTPUT: print numeric results of operations

**REQUIREMENTS**
- Get 2 nums from user
- Nums = positive integers 
- No need to validate input
- Print results of various operations on those numbers

**ASSUMPTIONS**
- Quotient => division to the lowest whole number
- power => num1 to the power of num2
- Floating point nums as output is valid (except with quotient)

**TESTS**
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23

**DATA STRUCTURE**
- Compute using numbers
- Print output as strings

**ALGORITHM**
- Get num1 from user
- Get num2 from user
- Convert num1 and num2 to numbers (inc floating point)
- Carry out operations 
- Print results

**NOTES**
- Operations inside string literals - is that ok or does string literal conversion prevent? Nah it's ok
- Math.pow(num1, num2)