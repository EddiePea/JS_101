/* The built-in node function [require] allows us to use the readline sync
library to get user input. The function returns the library in the form
of an object so it can be assigned to a variable.
*/

const readline = require('readline-sync');

const prompt = message => console.log(`=> ${message}`);

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

// Welcome the user - user focused
prompt('Welcome to Calculator!');

/* Ask user for first number using readline-sync question method. Saves
input as a variable. */

while (true) {

  prompt("What's the first number?");
  let num1 = readline.question();

  while (invalidNumber(num1)) {
    prompt("Hmm...that doesn't look like a valid number.");
    num1 = readline.question();
  }

  // Ask user for second number in manner above
  prompt("What's the second number?");
  let num2 = readline.question();

  while (invalidNumber(num2)) {
    prompt("Hmm...that doesn't look like a valid number.");
    num2 = readline.question();
  }

// Log inputs to the console which come back as strings.
  prompt(`${num1} ${num2}`);

/* Ask user for an operation to perform. Uses newline character here.
Giving them a numbered list makes it easier to verify user intent and
avoid issues re format (e.g. capitalisation etc.).
*/

  prompt('What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('You must enter 1, 2, 3 or 4');
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
  prompt(`The result is ${output}!`);

  prompt('Would you like to perform another calculation? (y/n)');
  let response = readline.question();

  if (response[0].toLowerCase() !== 'y') break;
}