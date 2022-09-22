/*
INSTRUCTIONS/RULES:
- Log all odd nums 1 to 99 inclusive to console
- Each num on separate line

ASSUMPTIONS:
- integers, no floating point nums
- separate line on console

INPUT: n/a

OUTPUT: print nums 1 to 99 to console

EXAMPLES:

DATA STRUCTURE:
- loop and numbers

ALGO:
- Create loop -> runs while num < 100
- SET num to 1
- Print num
- Increment num by 1
- Start loop again

*/

function oddNums() {
  for (let num = 1; num < 100; num += 2) {
    console.log(num);
  }
}

oddNums();