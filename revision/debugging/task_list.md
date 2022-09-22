**INSTRUCTIONS**
- Implement task list and functionality: 
  - add new task
  - complete a given num of existing tasks
  - display task list

- Tasks: 
  - Strings
  - Completing task => deleting string from array of tasks


**PARSING CODE**
- On line 15, inside the `completeTasks` function body, we have a `while` loop, which runs while (i) the length of the todos array is greater than zero and (ii) the tasksComplete variable (declared and initialized with 0 on line 13) is less than `n` (the value passed to the `completeTasks` function as an argument)

- On line 16, the `console.log` method is called on a template literal in which the element at index position 0 of the `todos` array is accessed. 

- On line 17, the `delete` operator is then called on the same element.  

- Whilst the `delete` operator can be used with arrays (as objects), it can lead to some unexpected results. In particular, `delete` will no reindex the array or update its length => so accessing the "deleted" elements will return undefined.  

- As a result, line 17 will effectively attempt to delete the same element at index position 0 `n` times, leaving the length of the `todo` array unchanged. 

- This means that when the `completeTasks` function is invoked on line 44, and passed the number 3 as an argument, it logs the `car wash` string when line 16 runs, and then removes that string when line 17 runs, but leaves an empty item in its place whose return value is undefined

- This means that the subsequent 2 console.log method calls on each iteration of the `while` loop results in printing `undefined complete!` to the console. 

- Further, when line 24 of the `completeTasks` function runs, it correctly prints the todo array's length as 11 -> as delete leaves its length unchanged. 

- When the `displayTaskList` function is invoked on line 45, it accesses the element at indx position 0, whose return value is now undefined.  