**INSTRUCTIONS**
- If num of mins = positive -> time after midnight
- If num of mins = negative -> time before midnight
- Function 1 
  - Arg: time of day in 24 hr format 
  - Return num of mins before midnight
- Function 2: 
  - Arg: time of day in 24 hr format
  - Return num of mins after midnight

**OUTLINE**
- INPUT: time in 24 hr format => string
- OUTPUT: number (representing mins before or after midnight)

**REQUIREMENTS**
- Value range 0 to 1439 

**ASSUMPTIONS**

**TESTS**
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

**DATA STRUCTURE**

**ALGORITHM**
- Access hours part of input string and convert to number
- Access minutes part of input string and convert to number
- Convert hours num to minutes 
- Sum hoursInMins to mins -> totalMins
- If beforeMidnight -> [1440] - totalMins
- If afterMidnight -> totalMins

**NOTES**
- If you're repeating yourself inside 2 different funtions -> call func1 inside func2!
- Remember: you can save variables directly in an array - array destructuring