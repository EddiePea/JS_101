/* The built-in node function require allows us to use the readline sync library to 
get user input. The function returns the library in the form of an object so it can 
be assigned to a variable.
*/

const readline = require('readline-sync');

// Welcome the user - user focused 
console.log('Welcome to Calculator!');

// Ask user for first number using readline-sync question method. Saves input as a variable
console.log("What's the first number?");
let num1 = readline.question();

// Ask user for second number in manner above
console.log("What's the second number?");
let num2 = readline.question();

// Log inputs to the console which come back as strings.
console.log(`${num1} ${num2}`);

/* Ask user for an operation to perform. Uses newline character here. Giving them a numbered
list makes it easier to verify user intent and avoid issues re format (e.g. capitalisation etc.).
*/ 

console.log('What operation would you like to perform?\n1) Add\n2) Subtract\n3) Multiply\n4) Divide');
let operation = readline.question();

/* Perform the operation on the two numbers. We have to coerce the user inputs to numbers because 
readline-sync returns user input as strings and using the addition operator on strings results in 
string concatenation. */ 

let output;

if (operation === '1') {
  output = Number(num1) + Number(num2);
} else if (operation === '2') {
  output = Number(num1) - Number(num2);
} else if (operation === '3') {
  output = Number(num1) * Number(num2);
} else {
  output = Number(num1) / Number(num2);
}

// Print the result to the terminal
console.log(`The result is ${output}!`);