**INSTRUCTIONS**
- Get six numbers from user
- Log message -> whether 6th num appears among 1st 5 nums

**OUTLINE**
- INPUT: user numerical string input [6 NUMS]
- OUTPUT: string -> state whether NUM 6 appears within previous 5 NUMS

**REQUIREMENTS**
- Ask user for 6 numbers (NUMS)
- Checks whether NUMS 1 to 5 include NUM 6 
- Prints string stating whether or not NUM 6 appears within NUMS 1 - 5

**ASSUMPTIONS**
- Numbers can include positive or negative nums
- Numbers can include Infinity or -Infinity
- Numbers can include 0
- Numbers can include floating point numbers
- Number match must be exact, e.g. 17 !== 17.5

**TESTS**

**DATA STRUCTURE**
- String input 
- String output -> template literal
- Maybe use array within function -> so can check if 'includes'
- Can then use join(', ') to create list of NUMS 1-5

**ALGORITHM**
- GET NUMS from user -> string form
- Add NUMS [1] to [5] to empty array 
  - Consider using separate function to generate array of nums 1-5
- Use method to ask if array includes NUM [6]
   - Maybe 'some'
   - Maybe 'includes'
- Separate function -> run function to check if num included within print results function
- If [TRUE] -> [results] variable = 'appears'
- If [FALSE] -> [results] variable = 'does not appear'
- Use template literal to insert results

**NOTES**
- Consider formatting for conjunction 'or'
- If it seems too long and repetitive, there must be a fix -> think of putting repeated stuff in an array and using forEach