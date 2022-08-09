**INSTRUCTIONS**
- function
- year input
- returns century
- return value -> string [century num + st/nd/rd/th]
- new century -> year ends in 01, e.g. 1901-2000 = 20th

**OUTLINE**
- INPUT: number (YEAR)
- OUTPUT: string (numeric with -suffix)

**REQUIREMENTS**
- Take number
- Work out which century it corresponds to
- Return string of century + appropriate suffix
- New century starts with [01]

**ASSUMPTIONS**
- 0 -> empty string
- Will only get positive integer input (no need for validation)

**TESTS**
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
century(0);           // ""

**DATA STRUCTURE**
- string output
- consider using object for suffixes

**ALGORITHM**
- SET num ending and suffix object
  - ends in [1] - st 
  - ends in [2] - nd
  - ends in [3] - rd
  - ends in [11] - th
  - ends in [12] - th 
  - ends in [13] - th
  - everything else (including 0) - th

- Get relevant century
  - SET CENT variable:
    - Divide NUM by 100
    - Math.floor() -> ignore nums post decimal point
  - Deal with 00/01:
    - Convert NUM to string
    - Create substring of last 2 chars
    - If substr = [00]
      - leave CENT as is
    - Otherwise
      - CENT += 1
- Turn CENT into string
  - String()
- Get relevant suffix depending on number
  - separate out into separate function
  - Might be best to use conditional -> so that we can isolate 11, 12, 13 first
  - IF CENT.endsWith(11) - th
  - IF CENT.endsWith(12) and 13 etc/
  - IF CENT.endsWith(1) - st
  - IF ce 2 - nd
  - IF 3 - rd
  - Default - th
- Add suffix to CENT_STRING
- Return string

**NOTES**
- If there are exceptions, consider dealing with those in a separate function altogether
- Remember % remainder function -> If you do that by 100, you get the last 2 nums; by 10, the last num etc. 