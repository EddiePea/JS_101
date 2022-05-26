//This program creates a tic-tac-toe (or noughts and crosses) game
const READLINE = require("readline-sync");

//Creates a board
function displayBoard(board) {
  console.log('');
  console.log('          |       |      ');
  console.log(`     ${board['1']}    |   ${board['2']}   |   ${board['3']}    `);
  console.log('   1______|2______|3______');
  console.log('          |       |      ');
  console.log(`      ${board['4']}   |   ${board['5']}   |   ${board['6']}    `);
  console.log('   4______|5______|6______');
  console.log('          |       |      ');
  console.log(`      ${board['7']}   |   ${board['8']}   |   ${board['9']}    `);
  console.log('   7      |8      |9     ');
  console.log('');
}

function startBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = ' ';
  }
  return board;
}

//Get user square choice
function getUserChoice() {
  console.log('Please choose a square (1 to 9)');
  let userChoice = READLINE.question();

  while (!'123456789'.includes(userChoice)) {
    console.log('Please make a valid selection');
    userChoice = READLINE.question();
  }
}

let board = startBoard();
displayBoard(board);
getUserChoice();

let board2 = {
  1: 'X',
  2: 'O',
  3: 'O',
  4: 'O',
  5: 'X',
  6: 'O',
  7: 'O',
  8: 'O',
  9: 'X',
};