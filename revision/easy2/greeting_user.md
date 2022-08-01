**INSTRUCTIONS**
- Program
- Asks for user's name
- Program greets user
- If user writes 'name!' computer responds in capitals (with joke re screaming)

**OUTLINE**
- INPUT: user name string
- OUTPUT:
  - greeting string (normal, if no exclamation mark)
  - capitalised greeting string + joke (exclamation mark)

**REQUIREMENTS**
- Get user name
- If empty string -> invalid
- If user input[endIndx] !== [!] - print normal string greeting
- If user input[endIdx] === [!] - print capitalised string greeting plus joke

**ASSUMPTIONS**
- Numeric or symbolic string input -> valid, e.g. C3P0
- User writing 'name!' => end of their name input is an exclamation mark
- Computer yelling back => capitalised message + joke 

**TESTS**
What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

**DATA STRUCTURE**
- Conditional logic flow
- String output

**ALGORITHM**
- Get user name input
- Validate input:
  - If input.length <= 0 - invalid
- IF char at last index postn === '!'
  - Return [capitalised] 'HELLO name. WHY ARE WE SCREAMING?'
  - Could use name[name.length] to access char OR [name].endsWith('!');
- ELSE return 'Hello [name]'

**NOTES**
- LS's version broke down the name variable to slice it
- Break down steps -> reassign to new variable 
- Avoid doing too much in a template literal