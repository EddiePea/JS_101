/*
INSTRUCTIONS/RULES:
- Get integer greater than 0 from user
- Asks user for sum or product
- Return: sum or product of all numbers between 1 and num (inclusive)

ASSUMPTIONS:

INPUT:
- Numeric string and string from user

OUTPUT:
- String with calculations interpolated

EXAMPLES:

DATA STRUCTURE:
- Tempalate literal
- numbers

ALGO:
- Get integer from user (num)
  - verify if input is number
  - verify if input is number > 0
- Get 's' or 'p' from user
- Calculate sum or product of numbers between 1 and num:
  - SUM:
    - SET total to 1;
    - Create loop with num at 2 -> loop continues until num > inputNum
    - Add num to total
    - increment by 1
  - PRODUCT:
    - Set total to 1:
    - Create loop with num at 2 -> loop continues until num > inputNum
    - Multiply total by num
    - Increment num by 1
- Print string with result
*/

const READLINE = require('readline-sync');

function getNum() {
  let num = READLINE.question('Please enter an integer greater than 0:\n');

  while (isNaN(Number(num)) || Number(num) < 1) {
    num = READLINE.question('Please enter a valid integer:\n');
  }
  return num;
}

function getOperation() {
  let operation = (READLINE.question('Enter "s" to compute the sum, or "p" to compute the product:\n')).toLowerCase();

  while (operation !== 's' && operation !== 'p') {
    operation = (READLINE.question('Please enter "s" or "p":\n')).toLowerCase();
  }
  return operation;
}

function calculateSumOrProduct(num1, operation) {
  let total = 1;

  for (let num2 = 2; num2 <= num1; num2 += 1) {
    if (operation === 's') {
      total += num2;
    } else {
      total *= num2;
    }
  }
  return total;
}

function printResult(operationOutput, num1, result) {
  console.log(`The ${operationOutput} of the integers between 1 and ${num1} is ${result}`);
}

function sumOrProduct() {
  let num1 = getNum();
  let operation = getOperation();
  let result = calculateSumOrProduct(Number(num1), operation);

  if (operation === 's') {
    operation = 'sum';
  } else {
    operation = 'product';
  }

  printResult(operation, num1, result);
}

sumOrProduct();