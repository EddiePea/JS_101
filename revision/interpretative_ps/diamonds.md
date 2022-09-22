**INSTRUCTIONS**
- Function: 
  - Displays [4_pointed_diamond]
  - In [n_x_n] [grid]
  - [n] = odd integer supplied as argument to the func
  - Assume arg = always odd integer

**OUTLINE**
- INPUT: number
- OUTPUT: string -> made up of asterisks
  - printed in diamond formation
  - within n x n grid (e.g. widest parts of diamond = [n])

**RULES**

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Number

**ALGORITHM**

**Example*
n = 9
- Line 1: print 1 asterisk at [n/2 -> rounded up] (halfway)
- Line 2: print 3 asterisks at halfway - 1, halfway, halfway + 1
- Line 3: print 5 asterisks at halfway - 2, halfway - 1, halfway, halfway, halfway + 1, halfway + 2
- Line 4: print 7 asterisks 
  - halfway - 3
  - halfway - 2
  - halfway - 1
  - halfway 
  - halfway + 1
  - halfway + 2
  - halfway + 3
- Line 5: print [n] -> 9 asterisks at: 
  - halfway - 4
  - halfway - 3
  - halfway - 2
  - halfway - 1
  - halfway 
  - halfway + 1
  - halfway + 2
  - halfway + 3
  - halfway + 4
- Line 6: repeat lines 4 to 1 > until line = [n]

- Longest line [midway] -> extends out to [line_-_1] beyond halfway
- Each line extends out to [line_-_1] beyond halfway

- Line 1: 1
- Line 2: 3
- Line 3: 5
- Line 4: 7
- Line 5: 9
- Line 6: 7 

- SET midway to Math.ceil[n/2]
- Create loop that runs for [midway] times
  - Print asterisk [line] + [line-1] times with [midway-line] whitespace before it

- Create loop that runs for [midway-1] times
  - SET multiple to 1
  - Print asterisk [[line - 2*multiple]_-_[2_*_multiple]] times
  - With midway - [line_-_[2_*_multiple]] times
  - Increment multiple by 1

- Print [Line_minus_2*Multiple_times] + [[Line_mins_2*m_times]-1]

  - Line 6 -> print 7 times - line - [-1]
    Line 4 - copy line - 2
  - Line 7 -> print 5 times - line - 2
    - Line 3 - copy line - 4 
  - Line 8 -> print 3 times - line - 5
    - Line 2 - copy line - 6
  - Line 9 -> print 1 time - line - 8
    - Line 1 - copy line - 8

- 1: 


- Line > asterisk num > total length 
- 1: 1 -> 5 -> midway 
- 2: 3 -> 6 -> midway + 1
- 3: 5 -> 7 -> midway + 2
- 4: 7 -> 8 -> midway + 3
- 5: 9 -> 9 -> midway
- 6: 7 -> 8 -> midway + 3
- 7: 5 -> 7 -> midway + 2
- 8: 3 -> 6 -> midway + 1
- 9: 1 -> 5 -> midway

- Lines: 1 start increment by 1

- Num of asterisks up to midway (inclusive): 1 start increment by 2
- Num of asterisks after midway: [midway + 2 start] decrement by 2 

- Total length until midway (inclusive): start at midway and increment by 1
- Total length after midway: [midway - 1] decrement by 1 



**NOTES**

