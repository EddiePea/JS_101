**INSTRUCTIONS**
- Function
- 2 args
- Returns true IF exactly 1 arg = truthy (false otherwise)
- Want Boolean result => NOT truthy/falsy values returned by logical operators

**OUTLINE**
- INPUT: 2 arguments (any data types)
- OUTPUT: Boolean (True if exactly 1 operand = truthy; false otherwise)

**REQUIREMENTS**
- Return true ONLY IF exactly 1 arg = truthy
- Return Boolean true

**ASSUMPTIONS**

**TESTS**
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

**DATA STRUCTURE**
- Boolean output

**ALGORITHM**
- IF (arg1 and arg2 = true || arg1 and arg2 = false)
  - return Boolean false
- ELSE 
  - return Boolean true

**NOTES**
- ^ = the bitwise operator. Can use it with operands of the same data type to perform an exclusive or operation
- Other examples of xor utility: 
  - 2 light switches, 1 light
- short-ciruit evaluation?