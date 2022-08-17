**INSTRUCTIONS**
- Function
  - Arg: year -> number (YEAR)
  - Returns: Friday 13ths in that year -> number (unluckyDays)

- Assume: 
  - YEAR > 1752 (year of adoption of Gregorian calendar)
  - Same calendar in use in future

**OUTLINE**
- INPUT: number (YEAR)
- OUTPUT: number (unluckyDays)

**RULES**

**ASSUMPTIONS**
- Will only get a number arg -> no need for validation
- Will only get a number small enough for JS to cope with -> no need to check for massive numbers passed as args

**TESTS**

**DATA STRUCTURE**

**ALGORITHM**
- getDate() -> returns day of month (1-31) for specified date
- getDay() -> returns day of week (0-6) for specified date
  - Initialise a new date with 'MONTH DAY YEAR'
- getMonth() -> returns month (0-11) in specified date

- SET unluckyDays to 0
- Break down YEAR into months
  - SET list of month names
- Loop through months
  - For each month, SET date to [MONTH 13 YEAR]
  - If date.getDay() === 4 (i.e. Friday) -> increase value of unluckyDays by 1
- Return unluckyDays

**NOTES**
- Remember: you always have array indices at your disposal