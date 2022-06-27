//This program creates a tic-tac-toe (or noughts and crosses) game

//CONSTANTS

//Required files
const COLORS = require("colors");
const EMOJI = require("node-emoji");
const READLINE = require("readline-sync");

//Constant variables
const EMPTY_SQUARE = " ";
const USER_MARKER = "X".brightRed.bold;
const COMP_MARKER = "O".brightCyan.bold;
const GAMES_TO_WIN = 5;

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

//MESSAGE AND FORMATTING FUNCTIONS

//Prompt
function prompt(message) {
  console.log(`*** ${message}`);
}

//Emojis
function createEmojis(emoji) {
  let loggedEmoji = EMOJI.get(emoji);
  console.log(loggedEmoji);
}

//Press any key to continue
//This adds a pause between certain steps to prevent immediate console clearing
function pressAnyKeyToCont() {
  let response = READLINE.question();
}

//Welcome to game
function displayWelcome() {
  console.clear();
  console.log("WELCOME TO TIC-TAC-TOE!\n(or noughts and crosses if you're British)\n".rainbow);
  prompt(`You are ${USER_MARKER}. Computer is ${COMP_MARKER}\n`);
  prompt("Press any key to continue".italic.red);
}

//Say goodbye
function sayGoodbye() {
  console.clear();
  prompt("Goodbye! Thanks for playing\n".rainbow);
}

//COIN TOSS FUNCTIONS

//Get user's coin choice
function getCoinChoice() {
  prompt("Let's toss a coin to see who goes first.\n".brightYellow);
  prompt("Pick heads (h) or tails (t)\n".brightRed.italic);
  createEmojis('coin');
  createEmojis('coin');
  createEmojis('coin');
  let userChoice = READLINE.question().trim().toLowerCase();

  while (userChoice !== 'h' && userChoice !== "t") {
    prompt("Please choose h for heads or t for tails");
    userChoice = READLINE.question().trim().toLowerCase()[0];
  }
  return userChoice;
}

//Choose first player
function decideFirstPlayer(userChoice) {
  let coinToss;
  if (Math.random() < 0.5) {
    coinToss = 'h';
  } else {
    coinToss = 't';
  }
  return userChoice === coinToss;
}

//Display first player
function displayFirstPlayer(userWins) {
  if (userWins === true) {
    prompt("You win the toss! You go first\n".brightYellow);
  } else {
    prompt("Computer wins the toss! Computer goes first\n".brightYellow);
    prompt("Press any key to make the Computer move".brightRed.italic);
  }
}

//FUNCTIONS CREATING THE BOARD

//Creates a board
function displayBoard(board) {
  console.clear();
  console.log("");
  console.log("          |       |      ");
  console.log(`      ${board['1']}   |   ${board['2']}   |   ${board['3']}    `);
  console.log("   1______|2______|3______");
  console.log("          |       |      ");
  console.log(`      ${board['4']}   |   ${board['5']}   |   ${board['6']}    `);
  console.log("   4______|5______|6______");
  console.log("          |       |      ");
  console.log(`      ${board['7']}   |   ${board['8']}   |   ${board['9']}    `);
  console.log("   7      |8      |9     ");
  console.log("");
}

//Start with empty board
function startBoard() {
  let board = {};

  for (let square = 1; square <= 9; square += 1) {
    board[String(square)] = EMPTY_SQUARE;
  }
  return board;
}

//Find empty squares
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === EMPTY_SQUARE);
}

//Determine whether board is full
function fullBoard(board) {
  return emptySquares(board).length === 0;
}

//Formats the remaining square options
function joinOr(arr, delim = ", ", conj = "or") {

  if (arr.length < 2) {
    return arr.join();

  } else if (arr.length === 2) {
    return arr.join(` ${conj} `);

  } else {
    return arr.slice(0, arr.length - 1).join(delim) +
      `${delim}${conj} ${arr[arr.length - 1]}`;
  }
}

//FUNCTIONS GETTING PLAYER CHOICES

//Get user square choice
function getUserChoice(board) {
  let userSquare;

  prompt(`Please choose a square: ${joinOr(emptySquares(board))}`.magenta);
  userSquare = READLINE.question().trim();

  while (!"123456789".includes(userSquare) || !emptySquares(board).includes(userSquare)) {
    createEmojis(':cop:');
    console.log("Please make a valid selection");
    userSquare = READLINE.question().trim();
  }
  board[userSquare] = USER_MARKER;
}

//Get computer defensive choice
// eslint-disable-next-line consistent-return
function getCompDefensiveChoice(board) {

  for (let i = 0; i < WINNING_COMBOS.length; i += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_COMBOS[i];

    if (board[sq1] === USER_MARKER && board[sq2] === USER_MARKER &&
        board[sq3] === EMPTY_SQUARE) {
      board[sq3] = COMP_MARKER;
      return true;

    } else if ((board[sq2] === USER_MARKER && board[sq3] === USER_MARKER &&
       board[sq1] === EMPTY_SQUARE)) {
      board[sq1] = COMP_MARKER;
      return true;

    } else if ((board[sq1] === USER_MARKER && board[sq3] === USER_MARKER &&
        board[sq2] === EMPTY_SQUARE)) {
      board[sq2] = COMP_MARKER;
      return true;
    }
  }
}

//Get computer offensive choice
// eslint-disable-next-line consistent-return
function getCompOffensiveChoice(board) {

  for (let i = 0; i < WINNING_COMBOS.length; i += 1) {
    let [ sq1, sq2, sq3 ] = WINNING_COMBOS[i];

    if (board[sq1] === COMP_MARKER && board[sq2] === COMP_MARKER &&
        board[sq3] === EMPTY_SQUARE) {
      board[sq3] = COMP_MARKER;
      return true;

    } else if ((board[sq2] === COMP_MARKER && board[sq3] === COMP_MARKER &&
       board[sq1] === EMPTY_SQUARE)) {
      board[sq1] = COMP_MARKER;
      return true;

    } else if ((board[sq1] === COMP_MARKER && board[sq3] === COMP_MARKER &&
        board[sq2] === EMPTY_SQUARE)) {
      board[sq2] = COMP_MARKER;
      return true;
    }
  }
}

//Get computer random square choice
function getCompRandomChoice(board) {

  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let compSquare = emptySquares(board)[randomIndex];

  board[compSquare] = COMP_MARKER;
}

//Get computer choice
//Selects (if available and in this order): (i) central square,
//(ii) best offensive choice, (iii) best defensive choice; (iv) random choice
function getCompChoice(board) {

  if (board[5] === EMPTY_SQUARE) {
    board[5] = COMP_MARKER;

  } else if (!getCompOffensiveChoice(board)) {

    if (!getCompDefensiveChoice(board)) {
      getCompRandomChoice(board);
    }
  }
}

//RESULTS FUNCTIONS

//Determine if there's a winner
function someoneWon(board) {
  return !!findWinner(board);
}

//Find winner
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
      board[sq1] === COMP_MARKER &&
      board[sq2] === COMP_MARKER &&
      board[sq3] === COMP_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

//Increment scores
function updateScores(scores, winner) {
  switch (winner) {
    case "You":
      scores.userWins += 1;
      break;
    case "Computer":
      scores.compWins += 1;
      break;
  }
}

//Increments rounds
function updateRounds(scores) {
  scores.rounds += 1;
}

//Display scores
function displayScores(scores) {
  console.log(`\n\nROUND: ${scores.rounds} || YOUR SCORE: ${scores.userWins} || COMPUTER SCORE: ${scores.compWins}\n\n`);
}

//Resets scores after match
function resetScores(scores) {
  scores.userWins = 0;
  scores.compWins = 0;
  scores.rounds = 0;
}

//Display game winner
function displayGameWinner(board) {
  let winner = findWinner(board);

  if (someoneWon(board)) {
    createEmojis(':collision:');
    prompt(`${winner} won!`.rainbow);

  } else {
    prompt("It's a tie!");
  }
}

//Display match winner
function displayMatchWinner(scores) {

  if (scores.userWins === GAMES_TO_WIN) {
    console.log('\nWELL DONE! You won the match\n');

  } else if (scores.compWins === GAMES_TO_WIN) {
    console.log('\nBAD LUCK! Computer won the match\n');
  }
}

//Determine if someone won the match
function someoneWonMatch(scores) {
  return scores.userWins === GAMES_TO_WIN || scores.compWins === GAMES_TO_WIN;
}

//Process game results
function processGameResults(scores, board) {
  updateScores(scores, findWinner(board));
  displayBoard(board);
  displayGameWinner(board);
  updateRounds(scores);
  displayScores(scores);
}

//PLAY AGAIN FUNCTIONS

//Play another game
function playAnotherGame() {
  prompt("Play another game?".brightBlue);
  prompt("Enter 'y' for yes and any other key to exit".brightYellow.italic);
  let answer = READLINE.question().toLowerCase();

  while (answer.length > 1 && answer[0] === "y") {
    prompt("Sorry that answer isn't clear: please just enter 'y' to play again".italic.red);
    answer = READLINE.question().toLowerCase();
  }
  return answer === "y";
}

//Play another match
function playAnotherMatch() {
  prompt("Play another match? Enter y or n");
  let answer = READLINE.question().toLowerCase();

  while (answer.length > 1 && answer[0] === "y") {
    prompt("Sorry that answer isn't clear: please just enter 'y' to play again");
    answer = READLINE.question().toLowerCase();
  }
  return answer === "y";
}

//PLAY GAME FUNCTIONS

//Choose square depending on current player
function chooseSquare(board, currentPlayer) {
  if (currentPlayer === 'user') {
    getUserChoice(board);

  } else if (currentPlayer === 'computer') {
    getCompChoice(board);
  }
}

//Alternate player
function alternatePlayer(currentPlayer) {
  if (currentPlayer === 'user') {
    return 'computer';

  } else return 'user';
}

//Play one game; user goes first
function playGameUserFirst(board, scores) {

  let currentPlayer = 'user';

  while (true) {
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || fullBoard(board)) break;
    displayBoard(board);
  }
  processGameResults(scores, board);
}

//Play one game; computer goes first
function playGameCompFirst(board, scores) {

  while (true) {
    getCompChoice(board);
    if (someoneWon(board) || fullBoard(board)) break;
    pressAnyKeyToCont();
    displayBoard(board);

    getUserChoice(board);
    if (someoneWon(board) || fullBoard(board)) break;
    displayBoard(board);
  }
  processGameResults(scores, board);
}

//GAME LOOP

while (true) {
  let scores = { userWins: 0, compWins: 0, rounds: 0 };
  displayWelcome();
  pressAnyKeyToCont();

  while (true) {

    let board = startBoard();
    displayBoard(board);

    let userChoice = getCoinChoice();
    let userWinsToss = decideFirstPlayer(userChoice);
    displayBoard(board);
    displayFirstPlayer(userWinsToss);

    if (userWinsToss === true) {
      playGameUserFirst(board, scores);
    } else {
      playGameCompFirst(board, scores);
    }

    if (someoneWonMatch(scores)) {
      displayMatchWinner(scores);

      if (playAnotherMatch()) {
        resetScores(scores);
        console.clear();
      } else break;

    } else if (playAnotherGame()) {
      console.clear();

    } else break;
  }
  sayGoodbye();
  break;
}