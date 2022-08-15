**INSTRUCTIONS**
- Function
- Args: 
  - Number (NUM)
  - Digit count (COUNT)
- Returns: number with last COUNT digits [rotated]
  - Rotation -> move [first] of the digits you want to rotate to the end
  - Digit to move -> Count from right to left
  - Shift remaining digits to the left

**OUTLINE**
- INPUT: NUM and COUNT (both Numbers)
- OUTPUT: number -> NUM rearranged by moving the COUNT digit to the end of NUM and shifting other digits left

**RULES**
- Function takes 2 number arguments -> NUM and COUNT
- Function takes the COUNT number digit (i.e. the digit COUNT places to the left starting from the right hand side)
- Then it moves that number to the end of the digit (i.e. to the far right hand side)
- The remaining digits are moved to the left
- Returns a new transformed number
- Same number of digits in the returned number
- If COUNT = 1, NUM remains the same

**ASSUMPTIONS**
- If COUNT = 0, NUM remains the same
- If COUNT > number of digits in NUM -> COUNT = number of digits in NUM
- If NUM = 0, it will always output 0
- The function will always receive two number arguments, so no need to verify
  - Won't receive, e.g. Infinity or NaN
- Deals with floating point numbers in the same way -> digits just move around the floating point

**TESTS**
console.log(rotateDigits(0, 5))   // 0
console.log(rotateDigits(345, 5)) // 453
console.log(rotateDigits(454.564, 4)) // 455.644

**DATA STRUCTURE**
- Array to loop through number

**ALGORITHM**
- Convert NUM into string (numStr)
- Convert numStr into an array of separate characters (numArr)
- Select digit to move by reference to COUNT
  - Access element at (numArr.length -1 - COUNT)
  - If that element === '.' - access element at numArr.length -2 - COUNT
- Remove that element
  - Maybe use slice? -> returns extract
  - OR use splice(start, delete count 1) -> returns array containing deleted elements
- Add element to the end of the numArr - concat?
- Join and return transformed numArr

**NOTES**
- always stick to your inputs and outputs -> if it says output a number, do that NOT string