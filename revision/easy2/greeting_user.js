/*
- Get user name input
- Validate input:
  - If input.length <= 0 - invalid
- IF char at last index postn === '!'
  - Return [capitalised] 'HELLO name. WHY ARE WE SCREAMING?'
  - Could use name[name.length] to access char OR [name].endsWith('!');
- ELSE return 'Hello [name]'

*/

const READLINE = require('readline-sync');

function getUserName() {
  let userName = READLINE.question('What is your name?\n');

  while (userName.length === 0) {
    userName = READLINE.question('Please enter a valid name\n');
  }
  return userName;
}

function printResponse(userName) {

  if (userName.endsWith('!')) {
    userName = userName.slice(0, -1).toUpperCase();
    console.log(`HELLO ${userName}. WHY ARE WE SCREAMING?`);

  } else {
    console.log(`Hello ${userName}`);
  }
}

printResponse(getUserName());