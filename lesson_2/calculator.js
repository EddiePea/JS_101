/* The built-in node function [require] allows us to use the readline sync
library to get user input. The function returns the library in the form
of an object so it can be assigned to a variable.
*/

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'fr';

let messages = (message, lang='en') => {
  return MESSAGES[lang][message];
};

let prompt = key => {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
};

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome the user - user focused
prompt("welcome");

/* Ask user for first number using readline-sync question method. Saves
input as a variable. */

while (true) {

  prompt("firstNumber");
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt("invalidNumber");
    num1 = readline.question();
  }

  // Ask user for second number in manner above
  prompt("secondNumber");
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt("invalidNumber");
    num2 = readline.question();
  }

// Log inputs to the console which come back as strings.
  console.log(`=> ${num1} ${num2}`);

/* Ask user for an operation to perform. Uses newline character here.
Giving them a numbered list makes it easier to verify user intent and
avoid issues re format (e.g. capitalisation etc.).
*/

  prompt("operation");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("invalidOperation");
    operation = readline.question();
  }

/* Perform the operation on the two numbers. We have to coerce the user
inputs to numbers because readline-sync returns user input as strings and
using the addition operator on strings results in string concatenation. */

//Switch statement clearer than if/else

  let output;

  switch (operation) {
    case '1':
      output = Number(num1) + Number(num2);
      break;
    case '2':
      output = Number(num1) - Number(num2);
      break;
    case '3':
      output = Number(num1) * Number(num2);
      break;
    case '4':
      output = Number(num1) / Number(num2);
      break;
  }

// Print the result to the terminal
  prompt("result");
  console.log(output);

  prompt("repeat");
  let response = readline.question();

  if (response[0].toLowerCase() !== 'y') break;
}