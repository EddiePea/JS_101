
/* Spare code for short option 

if (selection[0] !== 's') {
  selection = 
  return selection;

} else {
  selection = (VALID_CHOICES.filter(element =>
    (element[0] + element[1]) === (selection[0] + selection[1]))).join();
  return selection;
}
}
*/


//Required files
const readline = require('readline-sync');

//Combination of possible winning results
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

const SHORT_OPTIONS = {
  r : 'rock',
  p : 'paper',
  sc : 'scissors',
  l : 'lizard',
  sp : 'spock'
};


/*
function shortenName(option) {
  let options = Object.keys(WINNING_COMBOS);
  options.forEach
}

*/

const VALID_CHOICES = Object.keys(WINNING_COMBOS)
  .concat(Object.keys(SHORT_OPTIONS));

// Format messages
function prompt(message) {
  console.log(`=> ${message}`);
}

// Get and return user choice
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

function getResult(user, computer) {
  if (WINNING_COMBOS[user].includes(computer)) {
    return 'user';
  } else if (WINNING_COMBOS[computer].includes(user)) {
    return 'computer';
  } else {
    return 'draw';
  }
}

//Displays message
function displayGameResult(user, computer) {
  console.clear();
  prompt(`You chose: ${user} | Computer chose: ${computer}`);
  console.log('***********************************************');

  let result = (playGame())[2];

  if (result === 'user') {
    prompt ('HURRAH! YOU WIN');

  } else if (result === 'draw') {
    prompt ("IT'S A DRAW!");

  } else {
    prompt ('BAD LUCK, YOU LOSE');
  }
}

function displayScore(round, userScore, computerScore) {
  console.log(`ROUND ${round} => YOU: ${userScore} || COMPUTER: ${computerScore}`);
}

function playMatch(user, computer) {
  let userGames = 0;
  let computerGames = 0;
  let round = 0;

  if (getResult(user, computer) === 'user') {
    userGames += 1;
    round += 1;
  } else if (getResult(user, computer) === 'computer') {
    computerGames += 1;
    round += 1;
  }

  return displayScore(round, userGames, computerGames);

}

function playGame() {
  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();
  let result = getResult(userChoice, computerChoice);
  return [userChoice, computerChoice, result];
}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice();

displayGameResult(userChoice, computerChoice);
playMatch(userChoice, computerChoice);
console.log(getResult(userChoice, computerChoice));
console.log(playGame());






/*
function getUserChoice() {
  prompt(`Please choose one: ${VALID_CHOICES.join(', ')}, e.g. 'p' for paper, 'sc' for scissors etc.`);
  let userChoice = readline.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('That is not a valid choice');
    userChoice = readline.question();

  if (Object.keys((SHORT_OPTIONS).includes(userChoice))) {
    return SHORT_OPTIONS[userChoice];
  }
  return userChoice;
}


  if (userWins < 3 && computerWins < 3) {

    prompt("Would you like to play again? Enter 'y' for 'yes' or 'n' for no");
    answer = readline.question().toLowerCase();
    console.clear();

    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt ("Please enter 'y' or 'n'");
      answer = readline.question().toLowerCase();
    }

  } else if (userWins === 3) {
    prompt("You win the match! Match over");
    answer = 'n';

  } else if (computerWins === 3) {
    prompt ("Computer wins the match! Match over");
    answer = 'n';
  }
}

*/