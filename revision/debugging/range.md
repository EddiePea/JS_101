**INSTRUCTIONS**
- Implement range function 
  - Returns array of integers
  - Starting with start num
  - Ending with end num

- If single arg provided:
  - Used as end num
  - Start num = 0

**PARSING CODE**
- We have 2 function declarations - one on line 1 and one on line 11, both of which have the same name `range`

- In the first function invocation on line 17, JS looks to the later function declaration (which is 'nearer') at line 11. The second argument passed to that function is ignored (because it only expects one argument). Instead, the first argument (10) is passed in as the value of the `end` variable. 

- On line 12 of the second `range` function, it then invokes itself recursively, with the number `0` passed in as the argument and the `end` variable ignored (because the second `range` function only expects a single argument). 

- That leads to an infinite loop of recursive function calls, with no stopping condition. 

- To fix this, we would need to change the names of one of the functions. 

- This is because JS does not support `function_overloading` -> where you can use multiple functions of the same name with different signatures