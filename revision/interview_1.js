/*
INSTRUCTIONS/RULES:
- Function
- Argument: positive integer number (NUM)
- Returns:
  - The [next bigger number] formed by the same digits [OUTPUT_NUM]
  - OR -1 if no bigger number can be composed from those digits

- OUTPUT_NUM has same number of digits as NUM
- OUTPUT_NUM is composed of the same digits as NUM (unless -1)
- Where NUM is formed of the same digit (repeated) -> returns -1
- Where NUM is a single digit -> returns -1

ASSUMPTIONS:
- Positive integer includes 0
- Integer = whole number, so no floating point numbers
- Function will always receive a positive integer -> so no need
to verify

INPUT:
- Positive integer (NUM)

OUTPUT:
- OUTPUT_NUM -> positive integer containing the same digits as NUM
but the next biggest number (counting up from NUM)
- OR -1 (if no OUTPUT_NUM is possible)

EXAMPLES:
- 12 => 21
- 513 => 531
- 9 => -1
- 111 => -1
- 531 => -1

DATA STRUCTURE:
- Take the example 513 to 531:
  - Need to get from one Number to another Number made up of the same digits
    and the same length therefore

- Take the example 531 to -1:
  - Need to get from one Number to -1

- So an array structure ->
  - Then can use NUM length -> to ensure OUTPUT_NUM has same number of digits
  - Can use a method that searches through an array to check that a given
    number includes the digits in the array

ALGORITHM:

nextBiggerNum function:
- Convert NUM into an array of string digits (NUM_ARR)
- SET OUTPUT_NUM variable and initialize to NUM
- Turn OUTPUT_NUM variable into an array of string digits (OUTPUT_NUM_ARR)
- Increment OUTPUT_NUM by one until OUTPUT_NUM_ARR has a length property
greater than NUM_ARR
- Each time OUTPUT_NUM is incremented and converted into an array:
  - Ask if the digits in OUTPUT_NUM_ARR are all included in NUM_ARR
    => helper function
  - If yes -> return OUTPUT_NUM_ARR
  - If no, continue
- If the function hasn't returned already -> return -1 by default

Helper function: check if digits in arr1 are the same as those in arr2
- Takes 2 args: arr1 and arr2
- Loop through arr1 -> check that arr2 includes each arr1 digit in turn:
  - Return true if each arr1 digit is included in arr2
  - False otherwise
*/

function nextBiggerNum(num) {
  let numArr = toArray(num);

  for (let outputNum = num + 1; toArray(outputNum).length === numArr.length;
    outputNum += 1) {
    if (sameArrayDigits(numArr, toArray(outputNum))) {
      return outputNum;
    }
  }
  return -1;
}

function sameArrayDigits(arr1, arr2) {
  return arr1.every(numString => {
    return arr2.includes(numString);
  });
}

function toArray(num) {
  return [...String(num)];
}

console.log(nextBiggerNum(518));

