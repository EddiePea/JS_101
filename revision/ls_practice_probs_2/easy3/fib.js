/*
INSTRUCTIONS/RULES:
- Fib series -> num1 = 1, num2 = 1, num3 = num1 + num2
  - so num(x) = num(x - 1) + num(x - 2)
- Write function that calculates and returns inde of first fib
num that has number of digits specified by arg

- arg: number (digits of fib num)
- return: indx of first num in fib sequence to have num digits
  e.g. (2) -> 7 -> 1 1 2 3 5 8 13
  because 13 is the first in the sequence to have 2 digits
  and it's the 7th in the sequence

ASSUMPTIONS:
- No need to cater for huge nums
- Can use BigInt -> add 'n' to any numbers used

INPUT: number

OUTPUT: number

EXAMPLES:

DATA STRUCTURE:
- numbers

- count and store problem
- recursion

ALGO:
- SET length to 0;

- Generate fib numbers until digits of sequence === num
  - Loop until length === num
  - SET sequence count to 1
  - Use helper func to generate the 'count' fib num in the sequence
  - Turn fibNum into a string (fibStr)
  - Get length of fibStr
  - Increase count by 1

- Return count

- Helper func: generate fib nums:
  - if n < 3 -> return 1;
  - otherwise, return fib(n - 1) + fib (n - 2)

*/

function fib(num) {
  if (num < 3) return 1;

  return fib(num - 1) + fib(num - 2);
}

function findFib(num) {
  let length = 1;
  let count = 1;

  while (length < num) {
    let fibNum = fib(count);
    length = String(fibNum).length;
    count += 1;
  }
  return count - 1;
}

console.log(findFib(10));