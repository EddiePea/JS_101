**INSTRUCTIONS**
- Problem:
  - Program to generate [word_ladders]
  - Transforming one word into another word one char at a time
  - Involves printing resulting ladder to screen

- Ladder:
  - An array of word strings
  - G wants to transform arr into a single string -> each word in string separated by hyphen ('-')

- Issue: 
  - Code throws TypeError -> cannot read property forEach of undefined

**PARSE**
- On line 1, the ladder variable is declared and initialised with an empty string
- Line 3 -> we have an array of strings 
- Same line, the forEach method is called on that array
  - forEach takes a callback function as an argument
  - the callback function doesn't return anything explicitly to forEach and so implicitly returns undefined
  - forEach ignores all return values from CBFs anyway and returns undefined in any event

- Inside the body of the CBF, on line 4 we have an 'if' statement
  - The conditional clause asks if ladder is not an empty string
  - If that is truthy, then a dash will be added to ladder
  - Then on each loop of forEach, thanks to line 8, where the value of ladder is reassigned by adding 'word' to it on each iteration of forEach, each word in the calling array shoud be added to the ladder string in turn.

- The reason that this isn't working is that ladder is missing a semi-colon
- JS automatically inserts a semi-colon -> so first 3 lines are parsed:
  let ladder = ''['head'...].forEach()
- Because the line 1 statement is not explicitly terminated with a semicolon, the array on line 3 is not parsed as an array, but as an [accessor] on the empty string.
  - 'acde'[3] -> valid syntax' evaluting to e (3 is the accessor or index)
  - ''['head' etc.] is valid syntax, evaluating to undefined => anything but a valid index num in those brackets will evaluate to undefined
  - This leads to a call of undefined.forEach