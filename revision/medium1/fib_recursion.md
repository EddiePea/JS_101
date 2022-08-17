**INSTRUCTIONS**
- Fib sequence = sequence of nums
  - Each num = sum of previous 2 nums
  - F(3) = F(2) + (F1) = 1 + 1 = 2
  - F(5) = F(4) + F(3) = 2 + 3 = 5

- In math terms this can be represented as: 
  - F(1) = 1;
  - F(2) = 1;
  - F(n) = F(n - 1) + F(n - 2) where n > 2

- This sequence can be computed using a [recursive_function]
  - [recursive_function] = one where function calls itself

**OUTLINE**
- INPUT: number (the part of the sequence that you want to return)
- OUTPUT: the corresponding fib number

**RULES**
- Use a recursive function
- The function calls itself at least once
- The function has an ending condition
- The results of each recursion are used in each step

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Numbers
- No need for anything more complex 

**ALGORITHM**
- Function takes one num argument
- If num >= 2; return 1
- ELSE return fib(num - 1) + fib(num - 2);

F(4): 
- Is num 1 or 2? No so continue
- F(3) + F(2)
  - F(3) - is num 1 or 2? No, so continue
  - F(3) => F(2) + F(1)
    - F(2) - is num 1 or 2 -> yes, so return 1
    - F(1) - is num 1 or 2 -> yes, so return 1
  - F(2) - is num 1 or 2? Yes, so return 1
- Then work back up: 
  - F(3) is therefore 1 + 1 = 2
  - F(2) is therefore 1
  - F(4) = F(3) + F(2) = 2 + 1 = 3

**NOTES**