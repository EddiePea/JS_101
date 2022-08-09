**INSTRUCTIONS**
- Write function -> takes ARR
- Counts number of occurences of each element in ARR
- Once counted, log each element alongside num of occurences
- Case sensitive

**OUTLINE**
- INPUT: array
- OUTPUT: string -> each array element + number of occurences

**REQUIREMENTS**

**ASSUMPTIONS**
- Ignore whitespace

**TESTS**

**DATA STRUCTURE**
- Use array inside function
- Potentially use object to record number and corresponding element value

**ALGORITHM**
- Set resultsObj
- Loop through array
- Add element to resultsObj -> element as key, num of occurences as value
  - If element is already in resultsObj -> element += 1; otherwise element = 1
- Loop through resultsObj and print key + => + value

**NOTES**
- Consider splitting into 2 functions