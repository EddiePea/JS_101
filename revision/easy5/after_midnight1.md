**INSTRUCTIONS**
- Time of day -> num of mins before or after midnight
- If num of mins positive -> time after midnight
- If negative -> time before midnight

- Function - takes time using minute based formula (positive, negative)
- Returns TOD in 24 hr format (hh:mm)
- Should work with any integer input
- Cannot use Date class methods

**OUTLINE**
- INPUT: integer (positive of negative) that represents minutes pre/post midnight
- OUTPUT: string (time in 24 hr clock format)

**REQUIREMENTS**
- 1440 mins in a day
- 0 === midnight => 00:00

**ASSUMPTIONS**

**TESTS**
console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

**DATA STRUCTURE**


**ALGORITHM**
- 1440 mins in a day
- Work out if num is positive or negative
- If it's less than 1440:
  - and positive: 
    - [/60] - to get hours
    - Take integer for hours
    - * remainder by 60 to get minutes
    - Round to nearest whole num
  - and negative:
    - [1440 + num]
    - Same as above
- If it's more than 1440
  - and positive:
    - i. num/1440 = timesInto1440
    - ii. Multiply 1440 by integer of tiemsInto1440 = days
    - iii. num - days = remainder
    - iv. Do same to remainder
      - Then same as above (divide by 60), take integer as hours
      - Multiply remainder by 60 and round to nearest whole num (up or down)
  - and negative: 
    - Follow steps i to iii above 
    - Then follow route for negatives above, i.e. add 1440

**NOTES**
- If you are working out the remainder yourself, use the % operator instead - it will probably have neater results
- Need to come back to the Date object