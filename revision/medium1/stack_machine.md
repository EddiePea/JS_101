**INSTRUCTIONS**
- [stack] -> list of values that grows and shrinks [dynamically]
- Stack can be implemented as an array that uses 2 array methods
  - Push
  - Pop
- [A_stack_and_register_programming_language] -> language that uses stack values
  - Each operation in the language operates on a [register]
  - [register] -> the current value
  - [register] is not part of the stack 
- An operation that requires 2 values:
  - Pops topmost item from the stack
  - i.e. the operation: 
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

- Function -> implements mini stack_and_reg based programming language with the following [commands] (aka [operations] or [tokens]) 
  - [n] -> place a value (n) in the register; do not modify the stack
  - [PUSH] -> push register value onto the stack. Leave the value in the register
  - [ADD] -> pop a value from the stack and add it to the register value, storing the result in the register
  - [SUB] -> pop value from the stack and subtract it from the register value; store result in register
  - [MULT] -> pop value from the stack and multiply it by the register value, storing result in register
  - [DIV]  -> pop value from stack, divide register value by popped value, store [INTEGER-RESULT] back in register
  - [REMAINDER] -> pop value from stack, divide register value by popped stack value, store [INTEGER_REMAINDER] of division back in the register
  - [POP] -> remove topmost item from stack and palce in register
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
- INPUT:
- OUTPUT: 

**RULES**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**

**ALGORITHM**

**NOTES**