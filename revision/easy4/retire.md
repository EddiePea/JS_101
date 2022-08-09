**INSTRUCTIONS**
- Logs when user will retire
- How many more years till retirement

**OUTLINE**
- INPUT: User string input -> current age and retirement age
- OUTPUT: string -> states (i) current year, (ii) retirement year, (iii) number of years to go before retirement

**REQUIREMENTS**
- Get user age
- Get user retirement age
- Calculate: 
  - Retirement year [retirementAge - currentAge + current year]
  - Years of work left [retirementYear - currentYear] OR [retirementAge - currentAge]
- Print: 
  - Current year
  - RetirementYear
  - workYearsLeft

**ASSUMPTIONS**
- Validate nums -> 
  - if NaN when Number() used -> invalid
  - if Infinity or [-Infinity] -> invalid
  - if < 0 -> invalid
- RetirementAge must be greater than currentAge -> otherwise invalid

**TESTS**

**DATA STRUCTURE**
- Input strings -> numbers
- Template literals (plus number variables)

**ALGORITHM**
- Validate input: 
  - If age = NaN -> invalid
  - If age === Infinity (invalid)
  - If age < 0 -> invalid
  - If retirementAge < currentAge -> invalid
- GET currentAge from user -> coerce to number and round down
- GET retirementAge from user -> coerce to number and round down
- GET current year
- GENERATE currentYear:
  - Date method?
- Calculate yearsOfWorkLeft:
  - retirementAge - currentAge
- Calculate retirementYear:
  - currentYear + yearsOfWorkLeft
- Print results - including variables

**NOTES**
- Inaccuracies depending on birthday?
- new Date().getFullYear() method generates current year
- getYear() is deprecated so avoid