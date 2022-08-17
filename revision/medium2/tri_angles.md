**INSTRUCTIONS**
- Triangle classification: 
  - Right: one angle === 90 degrees (a right angle)
  - Acute: all 3 angles < 90 degrees
  - Obtuse: 1 angle > 90 degrees

- Valid triangle: 
  - Sum of all angles === 180 degrees
  - Each angle > 0 degrees

- Write function: 
  - Args: 3 angles of triangle (numbers)
  - Returns: string -> classifying triangle (i.e. invalid, right, acute, obtuse)

- Assume: 
  - All angles have [integer] values -> so ignore floating point errors
  - Assume args are in degrees

**OUTLINE**
- INPUT: 3 nums
- OUTPUT: string -> classifying triangle

**RULES**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Convert args into an array of numbers -> sort in order
- Assign variable names to the three angle elements (if necessary)
- Check if valid:
  - If small angle < 0 OR if sum of angles !== 180
  - Return invalid
- Check triangle type:
  - If array includes 90 -> return right
  - If every angle < 90 -> return acute 
  - Otherwise return obtuse

**NOTES**
- You can pass functions directly to certain methods as CBF -> omit args and parentheses