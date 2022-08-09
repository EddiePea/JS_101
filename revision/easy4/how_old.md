**INSTRUCTIONS**
- Program
- Randomly generate teddy age (AGE)
- AGE -> num between 20 and 120 (inclusive)
- Log AGE to console

**OUTLINE**
- INPUT: none
- OUTPUT: random num between 20 and 120 logged to console in string

**REQUIREMENTS**
- Generate random num (NUM)
- 20 <= NUM >= 120 (inclusive)
- Log string to console including NUM 

**ASSUMPTIONS**

**TESTS**

**DATA STRUCTURE**
- Template literal - insert AGE variable

**ALGORITHM**
- Generate random num between 20 and 120:
  - Generate a random num between 0 and 1 (non-inclusive)
  - Multiply it by 1000 - to stand any chance of getting to 120
  - Round down
  - While num < 20 && > 120 -> keep doing it
- SET variable to NUM
- Print string to console inserting NUM

**NOTES**
LS solution: 
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

- Math.random generates random num between 0 (inclusive) and 1 (exclusive)
- Max - Min gives us the range between the 2 numbers (100) then adds 1 because we want max and min inclusive -> range of 101
- Then we add min to the result -> so that the range of possible nums is between 20 and 120