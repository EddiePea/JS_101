**INSTRUCTIONS**
- Function
- Takes an array argument (IN-ARR)
- Returns an array (OUT-ARR)
- OUT-ARR contains every other element of IN-ARR
  - i.e. elements 1, 3, 5 etc.

**OUTLINE**
- INPUT: array (IN-ARR)
- OUTPUT: array containing odd elemnets of IN-ARR (OUT-ARR)

**REQUIREMENTS**
- OUT-ARR contains "odd" elements of IN-ARR
- ODD = 1st, 3rd, 5th, i.e. at index positions 0, 2, 4 etc.
- IN-ARR elements can be any data type
- OUT-ARR elements => match IN-ARR data types
- Empty array -> OUT-ARR = emtpy array

**ASSUMPTIONS**
- Return new array
- Does not mutate IN-ARR

**TESTS**
console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

**DATA STRUCTURE**
- Array

**ALGORITHM**
- Could use filter -> elements that are at index positions where [elem % 2 === 0]
  - Initialise newARr
  - Call forEach method on arr argument
  - Push elements for which [elem % 2 === 0] returns true
- Could use loop:
  - SET empty array
  - SET counter at 0;
  - ADD elem at arr[counter] to newArr
  - increment counter by 2
  - Return newArr

**NOTES**
- Filter DOES take 2 args => elem, indx