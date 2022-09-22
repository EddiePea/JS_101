**INSTRUCTIONS**
- Code to determine average and median scores on exams

- Work out why test cases are failing
- Write code for program to work

**PARSING CODE**
- Average seems to be working -> check
- Median not working -> returning false for 1 and 4

- At line 8, inside the `median` function body, the `sort()` method is called on the nums local variable. 
- When no arguments are passed to the sort method, the values in the calling array will be coerced to string values and compared by reference to their UTF-16 code points, character by character (so that 100 comes before 2 etc.).
- That is what happens when the `median` function is invoked on lines 34 to 37. This sorts the arrays into an order that is not numerical and then the middle value is taken.
- Could use an inline arrow function with a CBF instead