const EMPTY_SQUARE = ' ';
const USER_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const GAMES_TO_WIN = 5;
const READLINE = require("readline-sync");

//Winning combinations
let WINNING_COMBOS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
  ['1', '4', '7'],
  ['2', '5', '8'],
  ['3', '6', '9'],
  ['1', '5', '9'],
  ['3', '5', '7']
];


//Start with empty board
function startBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = EMPTY_SQUARE;
  }
  return board;
}

function joinOr1(arr, delim = ', ', conj = 'or') {

  switch(arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${conj} `);
    default:
      return arr.slice(0, arr.length - 1).join(delim) +
        `${delim}${conj} ${arr[arr.length - 1]}`;
  }
}

function joinOr(arr, delim = ', ', conj = 'or') {

  if (arr.length < 2) {
    return arr.join();

  } else if (arr.length === 2) {
    return arr.join(` ${conj} `);

  } else {
    return arr.slice(0, arr.length - 1).join(delim) +
      `${delim}${conj} ${arr[arr.length - 1]}`;
  }
}

//Tracking score function

function trackScore(board) {
  let winner = findWinner(board);
  let compScore = 0;
  let userScore = 0;

  if (winner === 'You') {
    userScore += 1;
    return userScore;
  } else if (winner === 'Computer') {
    compScore += 1;
    return compScore;
  }
}

//Find the winner
function findWinner(board) {
  for (let combo = 0; combo < WINNING_COMBOS.length; combo += 1) {

    let [ sq1, sq2, sq3 ] = WINNING_COMBOS[combo];

    if (
      board[sq1] === USER_MARKER &&
      board[sq2] === USER_MARKER &&
      board[sq3] === USER_MARKER
    ) {
      return 'You';
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}


let testBoard = {
  1: EMPTY_SQUARE,
  2: EMPTY_SQUARE,
  3: EMPTY_SQUARE,
  4: USER_MARKER,
  5: EMPTY_SQUARE,
  6: EMPTY_SQUARE,
  7: USER_MARKER,
  8: EMPTY_SQUARE,
  9: EMPTY_SQUARE
};

//Get computer defensive choice
function getCompDefensiveChoice(board) {

  for (let i = 0; i < WINNING_COMBOS.length; i += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_COMBOS[i];

    if (board[sq1] === USER_MARKER && board[sq2] === USER_MARKER &&
        board[sq3] === EMPTY_SQUARE) {
      board[sq3] = COMPUTER_MARKER;
      return true;

    } else if ((board[sq2] === USER_MARKER && board[sq3] === USER_MARKER &&
       board[sq1] === EMPTY_SQUARE)) {
      board[sq1] = COMPUTER_MARKER;
      return true;

    } else if ((board[sq1] === USER_MARKER && board[sq3] === USER_MARKER &&
        board[sq2] === EMPTY_SQUARE)) {
      board[sq2] = COMPUTER_MARKER;
      return true;
    }
  }
}


function chooseFirstPlayer() {
  console.log("\n Let's toss a coin to see who goes first. Pick heads (h) or tails (t)");
  let userChoice = READLINE.question().trim().toLowerCase()[0];
  let coinToss;

  if (Math.random() < 0.5) {
    coinToss = 'h';
  } else {
    coinToss = 't';
  }
  return userChoice === coinToss;
}

//Display first player
function displayFirstPlayer() {
  if (chooseFirstPlayer()) {
    console.log("You win the toss! You go first");
  } else {
    console.log("Computer wins the toss! Computer goes first");
  }
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'user') {
    board[3] = USER_MARKER;
  } else if (currentPlayer === 'Computer') {
    board[3] = COMPUTER_MARKER;
  }
}

console.log(testBoard);
chooseSquare(testBoard, 'user');
console.log(testBoard);


