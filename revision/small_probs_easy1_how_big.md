**INSTRUCTIONS**
- Ask user to enter length and width of a room
- Measurements in metres
- Logs area of room to console
- Area logged in square meters and square feet
- 1 sq m == 10.7639 sq ft
- No need to validate input
- Use readlineSync.prompt to collect user input

**OUTLINE**
- INPUT: user input length and width (in numbers)
- OUTPUT: area of room in sq m and sq ft (in numbers embedded in strings)

**REQUIREMENTS**
- Ask user for input
- Use readlineSync.prompt
- Log area of room to console in sq m and sq ft

**ASSUMPTIONS**
- If 0 entered -> 0 output
- If string entered -> invalid
- If whitespace plus number -> remove whitespace
- If whitespace only -> invalid
- If number and string -> take number only
- Floating point numbers are acceptible
- Prints user response
- Output in 2 decimal places
- If negative num entered -> invalid

**TESTS**
- Length: 10; Width: 7; Area: 60 sq m (753.47 sq ft)
- Empty string -> invalid
- 0 -> 0
- Num and string -> use nums only

**ALGO**
- GET user input using readlineSync.prompt
- Convert string input to floating point number (e.g. parseFloat())
  - If result => NaN log 'please enter a valid number'
- Multiply 2 numbers to produce area in sq m
- Make 2 decimal places (num.toFixed(2))
- Multiply result by 10.7639 to produce sq ft
- Make 2 decimal places
- Log results to console in string

**NOTES**
- ReadlineSync output => strings
- Readline trims whitespace automatically
- readline.prompt => you have to log a question separately and prompt awaits an answer
- readline => const READLINE = require('readline-sync')
- toFixed returns a string -> so use it for output, not calculation 

