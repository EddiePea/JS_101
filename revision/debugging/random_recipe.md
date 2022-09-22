**INSTRUCTIONS**
- Random recipe generator
- Raises TypeError -> dishName.join is not a function

**PARSING CODE**
- One line 1, we have a function declaration which defines the `random` function. That function takes 2 parameters (array and `n`).

- Inside the function body, on line 4 we have an `if` statement. The conditional expression asks if the local variable `n` is exactly equal (using the strict equality operator) to undefined. If that statement evaluates as true, then `n` is reassigned the number value `1`.

- On line 8, the `elements` variable is declared and initialized with the return value of calling the `slice()` method on the `array` local variable, and passing `slice` no arguments. This produces a copy of the array. 

- On line 9, the `randomElements` variable is declared and initialized with an empty array. 

- On line 11, we have a `while` loop. This loop runs while `n` is greater than 0 && the lenght property of the `elements` array is greater than 0.

- Inside the while loop, on line 12 the `randomIndex` variable is declared and initialized with the return value of passing to the `Math.floor` method the result of (i) calling the `Math.random` method (which generates a random number between 0 and 1 (not-inclusive)) and (ii) multiplying that number by the length property of the elements array. The `Math.floor` method rounds the product down to the nearest, lowest integer. 

- On line 13, the `randomElement` variable is declared and initialized with the value of accessing the element at index position `randomIndex` of the `elements` array.

- On line 15, the `push` method is called on the `randomElements` array and is passed the `randomElement` variable as an argument. This effectively adds the value of the `randomElement` variable to the `randomElements` array.

- On line 16, the `splice` method is called on the `elements` array, and it is passed (i) randomIndx as the starting point at which to start modifying the array and (ii) 1 as the delete count. This effectively removes the random element added to the `randomElements` array from the elements array, so that it cannot be selected twice. 

- On line 17, the `n` varaible is then decremented by 1.

- On 20, the function explicitly returns the `randomElements` array

- On lines 25, 28, 31, and 35 to 37, the `ingredients`, `spices`, `extras`, `adjective`, `firstNoun` and `secondNoun` variables (respectively) are declared and each initialized with an array of strings.

- On line 41, the `dishName` variable is declared and initialized with the concatenated return values of the following function invocations:
  - the `random` function, passed the `adjective` array as an argument (with no second argument)
  - the `random` function, passed the `firstNoun` array as an argument (with no second argument)
    - the `random` function, passed the `secondNoun` array as an argument (with no second argument)

- Skipping forward to line 44, the following is passed to the `console.log` method as an argument: 
  - The string `How about ' + the return value of calling the `join` method on the `dishName` variable's value (and passing it an empty string as an argument)

- This is where the problem arises: 
  - The return values of the function invocations on line 41 are all arrays.
  - However, the use of the binary `+` operator does not concatenate the arrays to create a single array. 
  - Instead, it coerces the arrays to strings of their elements separated by commas and concatenates those strings to form a single string
  - Therefore when the `join` method is called on that string value it gives rise to a TypeError, because an array method is being called on a string (not an array)

  - The error is repeated on line 45, when the `join` method is called on the string value of the `dish` variable. 