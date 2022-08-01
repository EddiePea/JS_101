**INSTRUCTIONS**
- Program asks user to enter integer (num)
- Integer must be > 0 
- Asks user whether they want to determine (i) sum or (ii) product of all nums between 1 and num inclusive

**OUTLINE**
- INPUT: string input from user
- OUTPUT: string representation of nums

**REQUIREMENTS**
- Ask user to enter integer
- Integer must be greater than 0 -> otherwise invalid
- Must be integer -> floating point nums invalid
- Ask user for sum or product
- Comput sum/product of all nums from 1 to num (inclusive)
- Output sum/product

**ASSUMPTIONS**
- Integer cannot be Infinity
- Must enter integer -> empty space invalid
- Sum = adding all of the numbers from 1 to num (including num) together
- Product = multiplying all of the nums from 1 to num (including num) together (factorial)

**TESTS**
- num = 5; operation = sum; output = 15
- num = 6; operation = product; output = 720

**ALGORITHM**
- Ask user to enter integer that is greater than 0
  - Transform string intput to num
  - If num <= 0 -> invalid
  - If num is floating point (e.g. num - Math.floor(num) > 0) -> invalid
- Ask user if they want sum or product
  - If input != s or p -> invalid

- If answer = s -> add together all nums between 1 and num
  - Initialise counter to 1
  - Initialise sum to 1
  - Increment counter
  - Reassign sum to sum + counter
  - Continue WHILE counter < num
  - Return sum
  - OR I could put all nums in array and use reduce...

- If answer = p -> find factorial of num
  - Initialise counter to 1
  - Initialse product to 1
  - Increment counter
  - Reassign product to product * counter
  - Continue WHILE counter < num
  - Return product

- Print string to console with sum or product

**NOTES**
- Try with for loops => they are usually more compact than a while loop


**WALK THROUGH TEST OF PRODUCT**
- round 1: 
  - counter 1
  - prod 1
  - counter 2
  - prod = 1 * 2 = 2
- round 2: 
  - counter 2
  - prod 2
  - counter 3
  - prod = 2 * 3 = 6
- round 3: 
  - counter 3
  - prod 6
  - counter 4
  - prod = 6 * 4 = 24
- round 4: 
  - counter 4 
  - prod 24
  - counter 5
  - prod = 24 * 5 = 120
- round 5: 
  - counter 5
  - prod 120
  - counter 6
  - prod = 120 * 6 = 720
- round 6: STOP as counter = num 


**WALK THROUGH TEST OF SUM**
- round 1: 
  - counter 1
  - sum: 1 + (1 + 1) = 3
  - counter 2
- round 2: 
  - counter 2: 
  - sum: [3] + 3 = 6
  - counter 3
- round 3: 
  - counter 3
  - sum: 6 + 4 = 10
  - counter 4
- round 4: 
  - counter 4
  - sum = 10 + 5 = 15
  - counter: 5
- round 5: STOP because counter = num

