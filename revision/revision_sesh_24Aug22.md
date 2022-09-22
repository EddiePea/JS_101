**Group 1:**

**FEEDBACK**
- Data structures -> more detail
  - what else will I need? 
  - i.e. two arrays that Mafuz created 
  - say I will use 2 arrays
- Communicative good -> explain your thought process throughout
- Be more detailed in algo -> how to obtain the summed

- Test frequently, e.g. am I getting the right slice?
  - Test every component

- Use numbered algo 
- More detail with data structure
- Separate out helper functions

//STUDY SESSION 
- Possibly a good idea to cover regex for live interview
- Reach out to Allison 

//WRITTEN QUESTIONS

**question 1*

const hello = 'hello';

function printMessage() {
  console.log(hello);
}

console.log(printMessage());

// Describe what this code outputs and why.

/*
This code returns undefined but outputs `hello`. 

On line 1 the constant variable 'hello' is declared and initialised. 

One line 3, the function printMessage() is defined with a functino declaration. Inside the function body, at line 4, the console.log method is called and passed the `hello` variable (a global variable) to it as an argument. The variable can be accessed from within the function body because it has global scope.

There is no explicit return statement inside the function. Consequently, the function will return its implicit return value of undefined.  However, even if the function had included an explicit return statement, the return value of the function would still be undefined, because that is the return value of any console.log call. 

On line 7, the console.log method is passed the return value of the printMessage function. So the output of that function invocation is that it prints undefined. However, as a result of the line 4 console.log method call, the function outputs the string 'hello'. 

//FEEDBACK
- include function invocation -> difference between declaration and invocation 

- Answer only what question asks. 

- Directly answer question first then explain 

- Formatting for backticks in appropriate areas. 
  - String = in backticks AND quotation 
  - piece of code value - wrap in backticks 
  - Backticks around line numbes 
  - Backticks around function names or method calls -> any identifier
  - See 109 study guide for confirmation 

**
  const hello = 'hello';

function printMessage() {
  console.log(hello);
}

console.log(printMessage());

// Describe what this code outputs and why.

/*
This code returns undefined but outputs `hello`. 

On line 1 the constant variable 'hello' is declared and initialised. 

One line 3, the function printMessage() is defined with a functino declaration. Inside the function body, at line 4, the console.log method is called and passed the `hello` variable (a global variable) to it as an argument. The variable can be accessed from within the function body because it has global scope.

There is no explicit return statement inside the function. Consequently, the function will return its implicit return value of undefined.  However, even if the function had included an explicit return statement, the return value of the function would still be undefined, because that is the return value of any console.log call. 

On line 7, the console.log method is passed the return value of the printMessage function. So the output of that function invocation is that it prints undefined. However, as a result of the line 4 console.log method call, the function outputs the string 'hello'. 
*/

// Formatting for backticks in appropriate areas. 
// If I'm conveying any sort of code value, I will wrap it in backticks. 
// Optional; enclose line numbers in backticks. 
// Conveying any identifier (variable name, function name, etc...) in backticks.
// Any method invocation should also be wrapped in backticks.
// Try to answer only what the question asks. 
/*
This code prints both the string `'hello'` and `undefined`.

On `line 1` the constant variable `'hello'` is declared and initialised as a global variable. 

On `line 3`, the function `printMessage()` is defined with a function declaration. Inside the function body, at `line 4`, the `console.log` method is called and passed the `hello` variable to it as an argument. This is valid because the `hello` variable has global scope. The string `'hello'` is logged to the console. 

On `line 7`, the `console.log` method is invoked and passed the invocation of the `printMessage` function, which will return `undefined`, which will in turn be logged to the console on the line after `'hello'`. 

The invocation of `printMessage` returns `undefined` because `printMessage` has no explicit return value, and functions that have no explicit return value will implicitly return `undefined`. 

There is no explicit return statement inside the function. Consequently, the function will return its implicit return value of undefined.  However, even if the function had included an explicit return statement, the return value of the function would still be undefined, because that is the return value of any console.log call. 

*/

**QUESTION 2*
- General advice re time: 
  - Points associated with each question (2-5)
  - Start from bottom up answer 5 pointers, then 4, then 3 then 2 then 1
  - No editing until you get answer to every question -> that sucks time away 

- Deciding on relevance: 
  - Start with a bullet-point list of all the important details that your answer should contain 
  // ------------------------------------
let message = "Everybody ";

function appendMessage(appended) {
  message.concat(appended);
  console.log(`${message}`);
}

appendMessage('dance!');

// What will this code output and why?
// This code will output 'Everybody ' but we want it to output 'Everybody dances'. Provide a fix and explain why your fix works. 

/*
This code will print the string `'Everybody '` to the console.

On `line 43`, the `message` variable is declared in the global scope and initialized with the string value `'Everybody `'.

On `line 45`, the `appendMessage` function is declared. It takes one parameter `appended`. 

On `line 46` inside the function body, the `concat` method is called on the `message` variable. The `concat` method call returns a new string. It does not mutate the value of the calling string (the `message` variable here) because strings are primitive values which cannot be mutated. 

On `line 47`, the `console.log` method is invoked and is passed a template literal as an argument, within which the `message` variable is referenced. This is valid because the `message` variable is within global scope.

Consequently, when the `appendMessage` function is invoked on line 50, the function logs the string `'Everybody '` to the console. 

The string passed to the function as an argument on `line 50` is not utilised in the output because of the reasons given in `line 61` above.
*/

// General advice to help with time. 
// Answer highest-point questions first; then all the questions; then go back and edit.
// If you're having a hard time deciding what's relevant and what's not, you can start with a bullet-point list of all the important details that your answer should contain.  

//Evaluate as truthy NOT true -> safer
//Clause => bit in curly braces (if clause)
//Return value of -> evaluation of that reassignment is 3 -> expressions evaluate to a value...

const hello = 'hello';

function printMessage() {
  console.log(hello);
}

console.log(printMessage());

// Describe what this code outputs and why.

/*
This code returns undefined but outputs `hello`. 

On line 1 the constant variable 'hello' is declared and initialised. 

One line 3, the function printMessage() is defined with a functino declaration. Inside the function body, at line 4, the console.log method is called and passed the `hello` variable (a global variable) to it as an argument. The variable can be accessed from within the function body because it has global scope.

There is no explicit return statement inside the function. Consequently, the function will return its implicit return value of undefined.  However, even if the function had included an explicit return statement, the return value of the function would still be undefined, because that is the return value of any console.log call. 

On line 7, the console.log method is passed the return value of the printMessage function. So the output of that function invocation is that it prints undefined. However, as a result of the line 4 console.log method call, the function outputs the string 'hello'. 
*/

// Formatting for backticks in appropriate areas. 
// If I'm conveying any sort of code value, I will wrap it in backticks. 
// Optional; enclose line numbers in backticks. 
// Conveying any identifier (variable name, function name, etc...) in backticks.
// Any method invocation should also be wrapped in backticks.
// Try to answer only what the question asks. 
/*
This code prints both the string `'hello'` and `undefined`.

On `line 1` the constant variable `'hello'` is declared and initialised as a global variable. 

On `line 3`, the function `printMessage()` is defined with a function declaration. Inside the function body, at `line 4`, the `console.log` method is called and passed the `hello` variable to it as an argument. This is valid because the `hello` variable has global scope. The string `'hello'` is logged to the console. 

On `line 7`, the `console.log` method is invoked and passed the invocation of the `printMessage` funciton, which will return `undefined`, which will in turn be logged to the console on the line after `'hello'`. 

The invocation of `printMessage` returns `undefined` because `printMessage` has no explicit return value, and functions that have no explicit return value will implicitly return `undefined`. 
*/


// ------------------------------------
let message = "Everybody ";

function appendMessage(appended) {
  message.concat(appended);
  console.log(`${message}`);
}

appendMessage('dance!');

// What will this code output and why?
// This code will output 'Everybody ' but we want it to output 'Everybody dances'. Provide a fix and explain why your fix works. 

/*
This code will print the string `'Everybody '` to the console.

On `line 43`, the `message` variable is declared in the global scope and initialized with the string value `'Everybody `'.

On `line 45`, the `appendMessage` function is declared. It takes one parameter `appended`. 

On `line 46` inside the function body, the `concat` method is called on the `message` variable. The `concat` method call returns a new string. It does not mutate the value of the calling string (the `message` variable here) because strings are primitive values which cannot be mutated. 

On `line 47`, the `console.log` method is invoked and is passed a template literal as an argument, within which the `message` variable is referenced. This is valid because the `message` variable is within global scope.

Consequently, when the `appendMessage` function is invoked on line 50, the function logs the string `'Everybody '` to the console. 

The string passed to the function as an argument on `line 50` is not utilised in the output because of the reasons given in `line 61` above.
*/

// General advice to help with time. 
// Answer highest-point questions first; then all the questions; then go back and edit.
// If you're having a hard time deciding what's relevant and what's not, you can start with a bullet-point list of all the important details that your answer should contain.  


// ------------------------------------

let num = 0;

if (num = 3) {
  console.log(num);
} else if (true) {}
// Explain what this code will do and why? 

/*

This code will print the number `3` to the console.

On `line 78`, the `num` variable is declared in the global scope and initialized with the number value `0`.

On line 80, we have an `if` statement. The condition which must evaluate as truthy for the subsequent code block to run is `num = 3`. 

This is a reassignment operation, where the global variable `num` is reassigned the number value `3`. The return value of that reassignment is `3`, a truthy value. Consequently, the code in the code block will execute. 

Inside the code block, on `line 81`, the `console.log` method is invoked and passed the value of the `num` variable as an argument. 

As the `num` variable has been reassigned on line `80`, that `console.log` method call results in the number `3` being logged to the console.

*/