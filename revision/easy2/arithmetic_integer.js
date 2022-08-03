//See MD notes

const READLINE = require('readline-sync');

function getNum1() {
  return parseFloat(READLINE.question('Enter the first number:\n'));
}

function getNum2() {
  return parseFloat(READLINE.question('Enter the second number:\n'));
}

function printOperations(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
}

printOperations(getNum1(), getNum2());

//LS Solution
//For last line: Math.pow(num1, num2)
//Ignores division by 0, Infinity, -Inf and NaN