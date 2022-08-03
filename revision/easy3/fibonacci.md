**INSTRUCTIONS**
- Fib series = num series [1, 1, ... [n = (n - 1) + (n - 2)]]]
- Function
- Calculates and returns index (INX)
- INX -> 1st fib num that has the num of digits specified by the arg
- First fib num INX = 1
- Assume argument = INT >= 2
- BigInt type -> works with v big integers
- To use BigInt integers append 'n' to nums in solution

**OUTLINE**
- INPUT: number value (with or without BigInt 'n')
- OUTPUT: number value (index of 1st fib num with specified num of digits)

**REQUIREMENTS**
- Index of fib sequence starts at 1
- Can assume arg = integer >= 2 always (so not 1, 0 or floating point)
- Function takes 1 arg = number of digits required
- Returns the index num of the first num in the fib sequence that has that number of digits

**ASSUMPTIONS**

**TESTS**
findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

**DATA STRUCTURE**
- Number output
- Maybe array for index num (+ 1)

**ALGORITHM**
- While loop
  - Generate fib sequence
    - recursion
    - function fib (num) {
      if (num < 2) return num;

      return fib(num - 1) + fib(num -2)
    }
  - Convert each fib number to string
  - Measure length of string
  - Add each string to array
- CONTINUE until length of string produced === num arg
- GET index num of last string generated
- Add one to that index num
- Return

**NOTES**
- Try to think simply about how to work these things out
- Think about reassigning first and second variables