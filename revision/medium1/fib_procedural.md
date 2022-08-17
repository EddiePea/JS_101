**INSTRUCTIONS**
- In a language not optimised for recursion, some recursive functions can be slow and may require a lot of memory and/or stack space

- Every recursive function can be rewritten as a non-recursive or [procedural] function

- Rewrite fib function to compute results without using recursion

- NB. JS can accurately compute integers up to 16 digits long
  - So F(78) is the largest fib num you can accurately compute using simple operations

**OUTLINE**
- INPUT: number of fib sequence
- OUTPUT: corresponding fib number

**RULES**
- Don't use recursion
- Find nth fib number where: 
  - F(1) = 1
  - F(2) = 1
  - F(n) = F(n - 1) + F(n - 2)

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**

**ALGORITHM**
- If num num >= 2 -> return 1;
- SET num1 to 1
- SET num2 to 1
- SET fibNumber to 0
- SET counter to 3

- Create loop -> runs while counter <= num
 - fibNum is reassigned to num1 + num2
 - num1 is reassigned to num2
 - num2 is reassigned to fibNum
- Return fibNum


**NOTES**