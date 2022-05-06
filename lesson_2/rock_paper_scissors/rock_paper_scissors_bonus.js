//Required files
const READLINE = require('readline-sync');
const MESSAGES = require('./rps_bonus_messages.json');
const CLC = require("cli-color");

//Combination of possible winning results
const WINNING_COMBOS = MESSAGES["winning_combos"];
const SHORT_OPTIONS = MESSAGES["short_options"];
const VALID_CHOICES = Object.keys(WINNING_COMBOS)
  .concat(Object.keys(SHORT_OPTIONS));

//Three points win a match
const WINNING_POINT = 3;

//Styles text
function styleText(text) {
  return CLC.green.underline(text);
}
//Logs message with 'prompt' (=>) and refers to MESSAGES
function prompt(key, value) {
  let message = MESSAGES[key][value];
  console.log(`=> ${message}`);
}

//Logs message without prompt (=>) and refer to MESSAGES
function logMessage(key,value) {
  let message = MESSAGES[key][value];
  console.log(message);
}

//Greets user and explains the rules
function logGreeting() {
  console.clear();
  prompt("greetings", "welcome");
  logMessage("rules", "rule_title");
  logMessage("rules", "rule_one");
  logMessage("rules", "rule_two");
  logMessage("rules", "rule_three");
  logMessage("rules", "rule_four");
  logMessage("rules", "rule_five");
  logMessage("rules", "rule_six");
}

//Starts new match with greeting
function logNewGreeting() {
  console.clear();
  prompt("greetings", "new_greeting");
}

//Says goodbye to the user
function logGoodbye() {
  console.clear();
  prompt("greetings", "goodbye");
}

//Formats user input
function formatInput(input) {
  return input.toLowerCase().trimStart();
}

// Gets and returns user choice
function getUserChoice() {
  prompt("user_chooses", "get_choice");
  console.log(`\n${Object.keys(WINNING_COMBOS).join(', ')}\n\nOR\n`);
  console.log(`abbreviate to: ${Object.keys(SHORT_OPTIONS).join(', ')}`);

  let userChoice = formatInput(READLINE.question());

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt("user_chooses", "invalid_choice");
    userChoice = formatInput(READLINE.question());
  }
  if (Object.keys(SHORT_OPTIONS).includes(userChoice)) {
    return SHORT_OPTIONS[userChoice];
  } else {
    return userChoice;
  }
}

//Gets and returns computer choice
//I initially used Math.round but it returned undefined sometimes. Why is that?
function getComputerChoice() {
  let randomIndex =
    Math.floor(Math.random() * (Object.keys(WINNING_COMBOS).length));
  let computerChoice = Object.keys(WINNING_COMBOS)[randomIndex];
  return computerChoice;
}

//Logs user and computer choices
function logChoices(userChoice, computerChoice) {
  console.clear();
  console.log(`=> You chose: ${userChoice.toUpperCase()} | Computer chose: ${computerChoice.toUpperCase()}`);
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
//Is it ok to refer to the values of an (as yet) undefined object (e.g. rounds)?
//I tried adding the values as parameters, but it didn't work
function displayScore(scores) {
  console.log(`ROUND ${scores.rounds} => YOU: ${scores.userWins} || COMPUTER: ${scores.computerWins}\n`);
}

//Displays results of one game
//Should functions be completely independent?
//e.g. is it ok to refer to the getResult and logChoices functions here?
function displayGameResults(userChoice, computerChoice) {

  logChoices(userChoice, computerChoice);
  let result = getResult(userChoice, computerChoice);

  if (result === 'user') {
    prompt ("game_results", "win");

  } else if (result === 'computer') {
    prompt ("game_results", "lose");

  } else {
    prompt ("game_results", "draw");
  }
}

//Increments the score
function updateScore(scores, result) {
  switch (result) {
    case 'user':
      scores.userWins += 1;
      break;
    case 'computer':
      scores.computerWins += 1;
      break;
  }
}

//Increments rounds
function updateRounds(scores) {
  scores.rounds += 1;
}

//Lots results of a match
function logMatchResults(scores) {
  if (scores.userWins === WINNING_POINT) {
    prompt("match_results", "user_win");
  } else if (scores.computerWins === WINNING_POINT) {
    prompt("match_results", "computer_win");
  }
}

//Asks user if they want to play again
function goAgain() {
  prompt("play_again", "ask");
  let response = formatInput(READLINE.question());

  while (response[0] !== 'n' && response[0] !== 'y') {
    prompt ("play_again", "invalid_response");
    response = formatInput(READLINE.question());
  }
  if (response[0] === 'y') {
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

//Plays one game: displays results, updates and displays scores and rounds
//Is it ok to abstract out functions like this?
//I'm mindful of the advice that functions should only do one thing
function playOneGame(userChoice, computerChoice, scores, result) {
  displayGameResults(userChoice, computerChoice);
  updateScore(scores, result);
  updateRounds(scores);
  displayScore(scores);
}

//Displays scores from previous match and resets scores and rounds
function endMatch(scores) {
  logMatchResults(scores);
  resetScore(scores);
  resetRounds(scores);
}

//Plays matches until user quits
function playMatch() {
  while (true) {
    let scores = { userWins : 0, computerWins : 0, rounds: 0 };

    while ((scores.userWins < WINNING_POINT) &&
            (scores.computerWins < WINNING_POINT)) {

      let userChoice = getUserChoice();
      let computerChoice = getComputerChoice();
      let result = getResult(userChoice, computerChoice);

      playOneGame(userChoice, computerChoice, scores, result);
    }
    endMatch(scores);
    // Is it ok to call the function inside an if statement like this?
    if (goAgain()) {
      logNewGreeting();
    } else break;
  }
}

//Main program
logGreeting();
playMatch();
logGoodbye();
