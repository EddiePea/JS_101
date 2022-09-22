**INSTRUCTIONS**
- Bank of [switches]:
  - Numbered 1 to [count], i.e. count = number of switches
  - Each switch is connected to 1 [light]
  - That light is initially [OFF]

- Actions (loop 1):
  - Walk down the [row] of switches and [toggle] each one, i.e. you flip every switch
  - All lights are now [ON]
  - Walk back to start of row and start another [pass]

- Actions (loop 2):
  - Toggle switches 2, 4, 6 etc. until [count]
  - Now every other light is [ON], i.e. odd lights are on

- Actions (loop 3):
  - Back to start of row
  - Toggle switches 3, 6, 9 etc.

- Repeat process until you've made [count] passes

- Write program
  - Takes 1 arg: total number of switches
  - Returns: array of lights that are on after count passes

**OUTLINE**
- INPUT: number (of switches) (switchNum)
- OUTPUT: array -> containing the switch position of switches that are on by the end of switchNum rounds

**RULES**
- On first round -> all switches ON
- From second round -> 
  - switches at multiples of roundNum are changed, e.g. roundNum2 -> switches at 2, 4, 6 etc.

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Create an array of [switchNum] length filled with 'true' for each element [switchArr]
- SET rounds variable to 2
- Create an outer loop which runs while [rounds] <= switchNum
  - Loop through [switchArr] 
    - If [index + 1] % [rounds] with no remainder ->
      [value] is reassigned to ![value] -> i.e. it is made its opposite
  - Increment rounds variable by 1
- Filter switch arr for those elemenents that are still 'true'
- Return filtered arr

**NOTES**