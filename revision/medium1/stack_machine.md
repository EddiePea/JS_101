**INSTRUCTIONS and RULES**
- [stack] -> list of values that grows and shrinks [dynamically]
- Stack can be implemented as an array that uses 2 arr methods -> pop and push
- [A_stack_and_register_programming_language] -> language that uses stack values
  - Each operation in the language operates on a [register]
  - [register] -> the current value
  - [register] is not part of the stack 

- An operation that requires 2 values:
  - [Pops] topmost item from the stack; i.e. the operation: 
    - removes the most recently [pushed_value] from the stack
    - operates on the popped value and the [register_value]
    - stores the result back in the register
  
- [MULT] operation in a [stack_and_register] language
  - Removes the value from the stack
  - Multiplies the removed stack value with the register value
  - Stores result back in the register

- EXAMPLE:
  - Start with stack [3, 6, 4]
    - 4 => topmost item in the stack
    - Register value => 7
  - MULT operation: 
    - Mutates stack to [3, 6] (4 is removed)
    - Result of the multiplication (4 * register value 7) = 28 -> left in the register
    - If we do another MULT, stack is mutated to [3], register is left with value 168 [28 * 6]

- Function -> implements mini stack_and_reg based programming language with the following [commands] (aka [operations] or [tokens]): 
  - [n] -> place a value (n) in the register; do not modify the stack
  - [PUSH] -> push register value onto the stack. Leave the value in the register
  - [ADD] -> pop a value from the stack and add it to the register value, storing the result in the register
  - [SUB] -> pop value from the stack and subtract it from the register value; store result in register
  - [MULT] -> pop value from the stack and multiply it by the register value, storing result in register
  - [DIV]  -> pop value from stack, divide register value by popped value, store [INTEGER-RESULT] back in register
  - [REMAINDER] -> pop value from stack, divide register value by popped stack value, store [INTEGER_REMAINDER] of division back in the register
  - [POP] -> remove topmost item from stack and place in register
  - [PRINT] -> print register value

- All operations => [integer_operations]

- [programs] supplied to my language function via a string argument 
- Function may assume that all args = valid programs
  - i.e. they will not do anything like try to pop non-existent value from the stack
  - Won't contain any unknown toeksn

- Initialise the stack and register to values:
  - stack -> []
  - register 0

**OUTLINE**
- INPUT: String of commands and values
- OUTPUT: numbers -> result of carrying out operations

**RULES**
- PRINT alone -> will print current register value

- [num] -> places a value in the register

- 'num PUSH' -> places num as the register value then pushes the register value onto the stack

- '5 PUSH 3 MULT PRINT'
  - 5 is placed as a value in the register
  - push -> adds register value fo the stack
  - 3 -> 3 is placed as a value in the register
  - MULT -> pops value from stack (5) and multiplies it by the register value (3) -> 15, which becomes the reg value
  - PRINT - prints the reg value

- '5 PRINT PUSH 3 PRINT ADD PRINT'
  - 5 -> 5 becomes the register value
  - PRINT -> prints the register value
  - PUSH -> adds the register value 5 onto the stack whilst leaving 5 as the register value as well
  - 3 -> make 3 the register value
  - PRINT -> prints 3 as the current register value
  - ADD -> takes top value from the stack (5) and adds it to the register value (3) -> 8 and that becomes the register value
  - PRINT -> prints the register value (8)

**ASSUMPTIONS**
- Integer value = lowest possible integer (not rounded up)

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Create a separate function for each token which take one or more of the following args:
  - Arr -> the stack if a stack value is required
  - Register value

  - num function:
    - Takes two args:
      - RegValue
      - NUMBER to be added to regValue
    - Reassigns register value to become that number
  
  - PUSH function: 
    - Takes 2 args
      - Register value (num)
      - Stack (arr)
    - Adds register value as last element of stackArr
    - Does not change the register value

  - ADD function: 
    - Takes 2 args: 
      - Register value (num)
      - Stack (arr)
    - Removes last element from stackArr
    - Adds popped element to register value -> this becomes the new register value

  - SUB function: 
   - Takes 2 args: 
      - Register value (num)
      - Stack (arr)
  - Removes last element from stackArr
  - Subtracts popped value from register value -> this becomes the new register value

  - MULT function: 
   - Takes 2 args: 
      - Register value (num)
      - Stack (arr)
  - Removes last element from stackArr
  - Multiplies popped element by regValue -> this becomes new register value

  - DIV function: 
     - Takes 2 args: 
      - Register value (num)
      - Stack (arr)
    - Removes last element from stackArr
    - Divides regValue by popped value 
    - Takes lowest integer from result -> this becomes register value
  
  - REMAINDER function:
     - Takes 2 args: 
      - Register value (num)
      - Stack (arr)
    - Removes last element from stackArr
    - Divdides reg value by popped stack value 
    - Stores integer remainder of the division as register value
      - Take whole number
    
  - POP function: 
    - Takes two args: 
      - stackArr (arr)
      - regValue (num)
    - Removes last element of stackArr
    - Reassigns regValue to value of removed element

  - PRINT function:   
    - Takes one arg: regValue
    - Logs regValue to the console

- minilang function: 
  - Takes string arg
  - Converts string into array of different elements (nums and commands)
  - Loops through array elements
    - Works out what data type each element is (num or string once converted into num)
    - If num -> then the num command is activated
    - If string -> the corresponding string command is activated
    - Each command will modify the stackArr and the regValue

**NOTES**
- Remember: test each step as you go
- Think carefully about scope and how functions make use of global/local variables => esp implications of variable shadowing