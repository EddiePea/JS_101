//See MD notes

const READLINE = require('readline-sync');

function getNum() {
  let num = Number(READLINE.question('Please enter an integer greater than 0:\n'));

  while (isNaN(num) || num <= 0 || (num - Math.floor(num) > 0)) {
    num = Number(READLINE.question('Please enter a valid whole number greater than 0:\n'));
  }
  return num;
}

function getOperation() {
  let operation = (READLINE.question('Enter "s" to compute the sum, or "p" to compute the product of all integers from 1 to your chosen number:\n')).toLowerCase();

  while (operation !== 's' && operation !== 'p') {
    operation = (READLINE.question('Please enter "s" or "p"\n')).toLowerCase();
  }
  return operation;
}

function calculateSumOrProduct(num, operation) {
  let counter = 1;
  let total = 1;

  while (counter < num) {

    if (operation === 's') {
      counter += 1;
      total += counter;

    } else {
      counter += 1;
      total *= counter;
    }
  }
  return total;
}

function printResult(num, operation, result) {

  if (operation === 's') {
    operation = 'sum';

  } else {
    operation = 'product';
  }
  console.log(`The ${operation} of the integers between 1 and ${num} is ${result}.\n`);
}

function sumOrProduct() {
  let num = getNum();
  let operation = getOperation();
  let result = calculateSumOrProduct(num, operation);

  printResult(num, operation, result);
}

sumOrProduct();


//LS solution used for loops
//Could refactor using for loop but would need separate sum/product functions
//Sum: total starts at 0; Product: total starts at 1
