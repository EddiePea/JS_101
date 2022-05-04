//Required files
const readline = require('readline-sync');

//Combination of possible winning results
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors']
};

//Consider creating a function to generate short options
const SHORT_OPTIONS = {
  r : 'rock',
  p : 'paper',
  sc : 'scissors',
  sp : 'spock',
  l : 'lizard'
};

const VALID_CHOICES = Object.keys(WINNING_COMBOS)
  .concat(Object.keys(SHORT_OPTIONS));

//Three points win a match
const WINNING_POINT = 3;

// Logs formatted messages
function prompt(message) {
  console.log(`=> ${message}`);
}

//Greets user and explains the rules
function logGreeting() {
  console.clear();
  prompt('WELCOME TO ROCK, PAPER, SCISSORS, LIZARD, SPOCK!\n');
  prompt("**RULES**");
  console.log("ROCK beats SCISSORS and LIZARD");
  console.log("PAPER beats ROCK and SPOCK");
  console.log("SCISSORS beats PAPER and LIZARD");
  console.log("LIZARD beats PAPER and SPOCK");
  console.log("SPOCK beats ROCK and SCISSORS\n");
  console.log("First to win 3 GAMES wins the MATCH!\n");
}

//Starts new match with greeting
function logNewGreeting() {
  console.clear();
  prompt('Welcome to a new match!\n');
}

//Says goodbye to the user
function logGoodbye() {
  console.clear();
  prompt('Thanks for playing! Goodbye!\n');
}

// Gets and returns user choice
// Consider separate function to allow white space etc.
function getUserChoice() {
  prompt(`Please choose one:`);
  console.log(`\n${Object.keys(WINNING_COMBOS).join(', ')}\nOR`);
  console.log(`abbreviate to: ${Object.keys(SHORT_OPTIONS).join(', ')}`);

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

//Gets and returns computer choice
//Why did Math.round return undefined sometimes?
function getComputerChoice() {
  let randomIndex =
    Math.floor(Math.random() * (Object.keys(WINNING_COMBOS).length));
  let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];
  return computerChoice;
}

//Logs user and computer choices
function logChoices(userChoice, computerChoice) {
  console.clear();
  prompt(`You chose: ${userChoice.toUpperCase()} | Computer chose: ${computerChoice.toUpperCase()}`);
  console.log('\n***********************************************\n');
}

//Returns the result of one game
function getResult(userChoice, computerChoice) {
  if ((WINNING_COMBOS[userChoice]).includes(computerChoice)) {
    return 'user';
  } else if ((WINNING_COMBOS[computerChoice]).includes(userChoice)) {
    return 'computer';
  } else {
    return 'draw';
  }
}

//Displays score after each game
function displayScore(scores) {
  console.log(`ROUND ${scores.rounds} => YOU: ${scores.userWins} || COMPUTER: ${scores.computerWins}\n`);
}

//Displays results of one game
//Should you create completely independent functions?
//Is it ok to refer to the getResult function here?
function displayGameResults(userChoice, computerChoice) {

  logChoices(userChoice, computerChoice);
  let result = getResult(userChoice, computerChoice);

  if (result === 'user') {
    prompt ('HURRAH! YOU WIN\n');

  } else if (result === 'computer') {
    prompt ('BAD LUCK, YOU LOSE\n');

  } else {
    prompt ("IT'S A DRAW!\n");
  }
}

//Increments the score
function incrementScore(score, result) {
  switch (result) {
    case 'user':
      score.userWins += 1;
      break;
    case 'computer':
      score.computerWins += 1;
      break;
  }
}

//Play one game
//Just experimenting: is this too much for a function to do?
//OR is it ok/desirable to parcel up functions like this?
function playOneGame(userChoice, computerChoice, scores, result) {
  displayGameResults(userChoice, computerChoice);
  incrementScore(scores, result);
  scores.rounds += 1;
  displayScore(scores);
}

//Displays results of a match
function displayMatchResults(scores) {
  if (scores.userWins === WINNING_POINT) {
    prompt('You win the match! Congrats!\n');
  } else if (scores.computerWins === WINNING_POINT) {
    prompt('Computer wins the match! Bad luck\n');
  }
}

//Asks user if they want to play again
//Consider using validating function here
function goAgain() {
  prompt('Would you like to play again? Enter "y" for yes or any other key to exit the game');
  let response = readline.question().toLowerCase();

  while (response[0] !== 'n' && response[0] !== 'y') {
    prompt ("Please enter 'y' or 'n'");
    response = readline.question().toLowerCase();
  }

  if (response[0].toLowerCase() === 'y') {
    return true;
  } else {
    return false;
  }
}

//Resets the score after a match
function resetScore (scores) {
  scores.userWins = 0;
  scores.computerWins = 0;
}

//Resets rounds after a match
function resetRounds (scores) {
  scores.rounds = 0;
}

//Play match until user quits
//NTS: play around with this more to undertand it
logGreeting();

while (true) {

  let scores = { userWins : 0, computerWins : 0, rounds: 0 };

  while ((scores.userWins < WINNING_POINT) &&
          (scores.computerWins < WINNING_POINT)) {

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    let result = getResult(userChoice, computerChoice);

    playOneGame(userChoice, computerChoice, scores, result);
  }

  //Would it be desirable to bundle up these functions into a single function?
  displayMatchResults(scores);
  resetScore(scores);
  resetRounds(scores);

  if (goAgain()) {
    logNewGreeting();
  } else break;
}

logGoodbye();
