//Required files
const readline = require('readline-sync');

// Logs formatted messages
function prompt(message) {
  console.log(`=> ${message}`);
}

//Combination of possible winning results
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors']
};

//Consider creating a function to create these
const SHORT_OPTIONS = {
  r : 'rock',
  p : 'paper',
  sc : 'scissors',
  sp : 'spock',
  l : 'lizard'
};

const VALID_CHOICES = Object.keys(WINNING_COMBOS)
  .concat(Object.keys(SHORT_OPTIONS));


function getUserChoice() {
  prompt(`Please choose one:\n${Object.keys(WINNING_COMBOS).join(', ')}\nor ${Object.keys(SHORT_OPTIONS).join(', ')}`);
  let userChoice = readline.question().toLowerCase();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('That is not a valid choice. Please try again');
    userChoice = readline.question().toLowerCase();
  }

  if (Object.keys(SHORT_OPTIONS).includes(userChoice)) {
    return SHORT_OPTIONS[userChoice];

  } else {
    return userChoice;
  }
}

function getComputerChoice() {
  let randomIndex =
    Math.floor(Math.random() * (Object.keys(WINNING_COMBOS).length));
  let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];
  return computerChoice;
}

function logChoices(user, computer) {
  console.clear();
  prompt(`You chose: ${user.toUpperCase()} | Computer chose: ${computer.toUpperCase()}`);
  console.log('\n***********************************************\n');
}

function getResult(user, computer) {
  if ((WINNING_COMBOS[user]).includes(computer)) {
    return 'user';
  } else if ((WINNING_COMBOS[computer]).includes(user)) {
    return 'computer';
  } else {
    return 'draw';
  }
}

function displayGameResults(user, computer) {

  logChoices(user, computer);
  let result = getResult(user, computer);

  if (result === 'user') {
    prompt ('HURRAH! YOU WIN\n');

  } else if (result === 'computer') {
    prompt ('BAD LUCK, YOU LOSE\n');

  } else {
    prompt ("IT'S A DRAW!\n");
  }
}

function incrementScore(score, result) {
  switch (result) {
    case 'user':
      score.userWins += 1;
      break;
    case 'computer':
      score.computerWinCount += 1;
      break;
  }
}

function goAgain() {
  prompt('Would you like to play again? Enter "y" for yes or any other key to exit the game');
  let response = readline.question().toLowerCase();

  if (response[0].toLowerCase() === 'y') {
    return true;
  } else {
    return false;
  }
}

//Test below this line

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();
let results = getResult(userChoice, computerChoice);

let scores = {
  userWins : 0,
  computerWins : 0,
  round : 0
};

displayGameResults(userChoice, computerChoice);
goAgain();
