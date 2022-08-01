**INSTRUCTIONS**
- Create simple tip calculator
- Prompt for bill amount
- Prompt for tip rate
- Compute tip
- Log tip to console
- Log total bill amount to console
- Ignore input validation 
- Assume user will enter nums

**OUTLINE**
- INPUT: user inputs numbers
- OUTPUT: numbers embedded in strings

**REQUIREMENTS**
- Prompt user for bill amount and tip rate
- Compute tip using bill amount and tip rate
- Print tip and total bill

**ASSUMPTIONS**
- In fixed currency
- 2 dp output
- 0 for bill => invalid input
- 0 for tip rate => valid input
- Negative nums => invalid input for both

**ALGO**
- Ask user for bill amount
  - Parse floating num to remove any additional chars
  - If not a number -> prompt for valid num
  - If less than or equal to 0 -> prompt for valid num
- Ask user for tip percentage
  - Parse floating num to remove any additional chars
  - If not a number -> prompt for valid num
  - If less than 0 -> prompt for valid num
- Calculate tip amount: 
  - (Tip % / bill) * 100
  - Convert to 2 dp
- Calculate bill amount
  - Bill + tip
  - Convert to 2 dp
- Print amounts to console

**NOTES**
- toFixed() returns a string representation of a number
- So do NOT used toFixed when trying to produce nums to be used in a calculation