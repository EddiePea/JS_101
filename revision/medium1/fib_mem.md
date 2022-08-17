**INSTRUCTIONS**
- Recursive fib function is not efficient -> slows down from arg 35

- Can improve recursion functions using [memorization]
  - Saving a computed answer for future reuse
  - Rather than computing it from scratch every time it's needed

- Fib memorisation: 
  - No need to call F(n - 2) -> necessary values computed in recursive calls to F(n - 1)

- Refactor fib function to use memorization


**OUTLINE**
- INPUT: number (the nth num of the fib sequence)
- OUTPUT: number (the corresponding number of the fib sequence)

**RULES**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**

**ALGORITHM**
- F(7)
- F(6) + F(5)
  - F(6) = F(5) + F(4)
  - F(5) = F(4) + F(3)
    - F(4) = F(3) + F(2)
    - F(3) = F(2) + F(1)

- F(n)
  - F(n-1) + F(n-2)
    - F(n-1) = F(n-2) + F(n-3)
    - F(n-2)

**NOTES**
- Need to revisit this -> it's the only problem question I couldn't answer