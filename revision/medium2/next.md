**INSTRUCTIONS**
- [featured_num]: 
  - odd number
  - [multiple] of 7
  - all digits [occur_exactly_once] each

- Example of featured_num: 
  - 49 -> odd, 7 divides into it with no remainder, 4 and 9 are different digits, not repeated
  - 98 -> NO: not odd
  - 97 -> NO: 7 does not divide in with no remainder
  - 133 -> NO (odd, multiple of 7 BUT digit 3 appears twice)

- Function: 
  - Arg: [integer] (num)
  - Returns: number -> next [featured_num] > num
  - IF no next featured_num => error message

- Largest featured_num = [9876543201]

**OUTLINE**
- INPUT: number (any) (num)
- OUTPUT: number (next largest featured num)

**RULES**

**ASSUMPTIONS**
- [multiple_of_n] -> n divides into num with no remainder
- 0 is an integer
- Always get integers -> no validation needed 
- negative integers are not possible

**TESTS**

**DATA STRUCTURE**
- Series of conditional statements
- Might need array for working out if digits repeated

**ALGORITHM**
- Create isFeatured helper function -> returns true if: 
  - num % 2 === 1
  - num % 7 === 0
  - There are no repeated digits: 
    - num turned into array of separate digits 
    - loop through digitsArr
    - if num is NOT included in the array extracted from right after num 

- Create featured function:
  - Takes num as argument
  - If Math.abs(num) >= [greatest_possible] return error
  - SET counter to num + 1
  - SET nextFeatured = 0;

  - Run loop while nextFeatured = 0
    - if passing counter to the isFeatured function is true 
      - nextFeatured += counter;
      - break;
    - else
      - counter is increased by 1
  - Return nextFeatured;

**NOTES**
- Try to think of mathematical fixes, e.g. incrementing in steps fo 14 -> spend some time looking at the relevant patterns
