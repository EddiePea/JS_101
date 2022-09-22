**INSTRUCTIONS**
- Club directory management program: 
  - Small club -> can keep member names and numbers in object
  - Wants to add functionality to [write_this_object_to_a_file]

- Input validation important:
  - only alphabetic letters in members' names
  - separated by a space
  - BUT typo when entering info -> that's not the case

- Instructions: 
  - Work out why input validation doesn't work
  - Fix code
  - Create test cases to ensure input validation requirement met

**PARSE CODE**
- It appears that the `isValidName` function declared on line 8 is not working properly -> it is allowing an invalid name to be added

- Line 9 returns the return value of calling the test function on a regex pattern and passing a `name` to test as an argument.  This effectively asks if the name includes the pattern in the regex.

- The regex pattern searches for any [words]?

- The pattern is identified, in that the name does contain alphabetic chars. But it does not test whether the name contains exclusively 

- This character class includes numbers and underscore. 