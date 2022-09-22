/*
INSTRUCTIONS/RULES:
- doubleNum:
  - Number
  - even length
  - left side digits === right side digits
  e.g. 44, 3333, 7676 (so NOT mirrored)
  e.g. NOT 444 (not even length)

- Function:
  - arg: number
  - returns:
    - IF num === doubleNum -> num
    - ELSE num * 2

ASSUMPTIONS:
- Args will only be positive integers
- No need for validation

INPUT: number (num)

OUTPUT: number

EXAMPLES:

DATA STRUCTURE:
- Strings
- String manipulation problem

ALGO:
- Work out if num === doubleNum using helper function

  - If YES -> return num
  - If NO -> return num * 2

- Helper function:
  - Turn num into a string
  - If numStr.length / 2 leaves a remainder (i.e. it's odd) -> return false

  Otherwise:
  - Find midpoint of numStr
    e.g. if str.length = 6 -> midpoint = 3
  - Get rightHand of string -> from indx 0 to (midpoint, not inclusive)
  - Get leftHand of string -> from indx midpoint to end

  - If rightHand === leftHand -> return true

  - Otherwise return false

*/

function isDoubleNum(num) {
  let numStr = String(num);

  if (numStr.length % 2 === 1) return false;

  let midpoint = numStr.length / 2;
  let rightHand = numStr.slice(0, midpoint);
  let leftHand = numStr.slice(midpoint);

  return rightHand === leftHand;

}

function twice(num) {
  if (isDoubleNum(num)) {
    return num;
  } else {
    return num * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676