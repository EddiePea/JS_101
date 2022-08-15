**INSTRUCTIONS**
- Take number (NUM)
- Rotate it by one digit to the left
  - i.e. move first digit to last
  - e.g. 735291 -> 352917
- Next keep first digit in place and rotate remaining digits
  - i.e. move second digit along to last 
  - e.g. 352917 -> 321759
- Next keep first 2 digits in place and rotate again 
  - i.e. move the third digit along to last
  - e.g. 321759 -> 321597
- Next keep first 3 digits in place and rotate
  - i.e. move fourth digit along to last
- Finally keep first four digits in place and rotate final 2
  - i.e. move 5th digit along to last
- Final num = [maximum_rotation] of NUM

- Function
- Arg: integer
- Returns: maximum rotation of integer

**OUTLINE**
- INPUT: integer (NUM)
- OUTPUT: maximum_rotation of NUM (rotatedNum)

**RULES**
- Function takes an integer
- It rotates all of the digits of NUM in turn until all of the numbers have been swapped
- If NUM = single digit -> return NUM
- If rotatedNum = '015' -> drop leading 0
- Number of rotations = NUM.length - 1

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Turn NUM into array of digits (numArr)
- Create a loop that runs (NUM.length - 1) times
- Loop through numbers in numArr -> looping through indices
  - Move the digit at progressively greater index nums to the end
  - e.g. digit at 0 moved to end -> next digit at 1 moved to end etc.
- Join and return transformed numArr

**NOTES**
- Use helper functions where you can -> they help to break down the problem
- Don't just compress for compression's sake
- Think: do I need all iterations of a loop?