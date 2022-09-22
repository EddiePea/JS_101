/*
INSTRUCTIONS/RULES:
- arg: positive integer (n)
- output:
  - logs [right triangle] to console
  - sides of triangle have n stars
  - hypotenuse (diagonal) -> starts in upper right; ends lower left

ASSUMPTIONS:
- Validation not necessary

INPUT: number (positive integer)

OUTPUT: stars printed to console in triangle shape

EXAMPLES:

DATA STRUCTURE:
- strings
- string manipulation

ALGO:
- Overall -> print square (n x n sides) -> half whitespace, half '*'

- SET row to 1

- Create loop which runs while row <= n
  - print whitespace repeated n - row times + star repeated row times
    can use padstart here OR repeat...
  - increase row by 1

*/

function triangle(num) {

  for (let row = 1; row <= num; row += 1) {
    console.log(' '.repeat(num - row) + '*'.repeat(row));
  }
}

triangle(9);