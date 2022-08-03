**INSTRUCTIONS**
- function
- arg: string (text line)
- output: log text to console in box

**OUTLINE**
- INPUT: string
- OUTPUT: string in box

**REQUIREMENTS**
- Take input string
- Create box around it
- If empty string - empty box
- Corners -> +
- Width -> | (min 3)
- Length -> - (min 2) 

**ASSUMPTIONS**
- Text never goes over 1 line, i.e. no need to flex width

**TESTS**

**DATA STRUCTURE**
- Series of console.log calls
- Look at length of string

**ALGORITHM**
- Get string length
- If length < 1 -> default
- Otherwise:
   - log + plus [repeated - * (length + 2)]
   - log | plus [repeated whitespace * (length + 2)] plus |
   - log | plus whitespace plus TEXT plus whitespace plus |
   - log repeat of line 2
   - log repeat of line 1

**NOTES**
- Stop hacking and slashing