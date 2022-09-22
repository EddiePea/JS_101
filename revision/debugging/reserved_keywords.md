**INSTRUCTIONS**
- Implemeting a function that determines whether or not a given word = a [reserved_keyword]
- Not getting expected result from tests

**PARSING CODE**
- The constant variable 'RESERVED_KEYWORDS' is declared on line 1 and initialized with an array value. The array contains a series of strings, each one of which comprises alphabetic characters.

- On line 8, there is a function declaration which defines the `isReserved` function. That function takes a single parameter (name).

- On line 9, inside the function body, the `forEach` method is called on the `RESERVED_KEYWORDS` array. 

- ForEach takes a callback function (CBF) as an argument. The CBF takes a single parameter (reserved), which represents each of the elements of the `RESERVED_KEYWORDS` array passed to the CBF in turn on each iteration of the `forEach` method. 

- Inside the CBF function body, there is an `if` statement on line 10. The conditional expression asks if the name local variable is exactly equal (using the strict equality operator) to the reserved local variable. If that expression evaluates as truthy, then the CBF returns true to forEach.

- However, regardless of whether or not the CBF returns true or false to forEach, forEach always returns undefined. That return value is also irrelevant, because there is no express return statement at the start of line 9 to require the `isReserved` function to return `undefined`.

- Instead, there is a return statement at the start of line 15. This requires the function to return false every time, regardless of the value of the name argument passed to it. 
