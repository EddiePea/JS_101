**INSTRUCTIONS**
- Function 
- ARG: [floating_point] num representing [angle] between 0 and 360 degrees
- Returns: string representing angle in (i) [degrees], (ii) [minutes], (iii) [seconds]
  - 60 mins in a degree
  - 60 seconds in a minute
- Use degrees symbol to represent degrees
- Use single quote to represent minutes
- Use double quote to represent seconds

**OUTLINE**
- INPUT: number (representing an angle in degrees)
- OUTPUT: string -> [degrees_num]°[minutes_num]'[seconds_num]"

**REQUIREMENTS**
- ARG_NUM = [degrees_num]°
- MINS_NUM = Math.floor([degrees_num/60])'
- SECS_NUM = Math.floor([mins_num/60])"
- If ARG = 0 -> 0°00'00"
- If ARG = 360 -> 360°00'00"
- All nums = at least 2dp - num.toFixed() ? 

**ASSUMPTIONS**
- Round down all nums to lowest integer, e.g. 76.73 -> 76°
- Rounding the secs_num using the mins_num won't lead to relevant discrepancies

**TESTS**
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

**DATA STRUCTURE**
- Number input -> perform calculations first
- Convert to string -> use template literal?

**ALGORITHM**
- Generate minutes => degrees / 60
- Generate seconds => minutes / 60
- Generate degrees string => 
  - Get degrees -> round down to nearest integer
  - Convert to string: 
    - String([Math.floor(degrees)]) + ° [OR add it to template literal]
- Generate minutes string => 
  - toFixed(Math.floor(minutes)) + '
- Generate seconds string => 
  - toFixed(Math.floor(seconds)) + "
- Add to string literal and print

**NOTES**
- Look carefully at the numbers -> if something seems strange, interrogate it carefully 
- If you are coming up with multiple ways to patch something up, see if there is one cover all way