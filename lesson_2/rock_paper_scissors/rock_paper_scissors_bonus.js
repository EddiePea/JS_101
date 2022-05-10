//Required files
const READLINE = require("readline-sync");
const MESSAGES = require("./rps_bonus_messages.json");
const CLC = require("cli-color");

//Combination of possible winning results
const WINNING_COMBOS = MESSAGES["winning_combos"];
const SHORT_OPTIONS = MESSAGES["short_options"];

const VALID_CHOICES = Object.keys(WINNING_COMBOS)
  .concat(Object.keys(SHORT_OPTIONS));

//Three points win a match
const WINNING_POINT = 3;

//Logs styled messages; refers to MESSAGES
function logStyledMessage(key, value) {
  let message = CLC.yellowBright.italic(MESSAGES[key][value]);
  console.log(`=> ${message}`);
}

//Logs unstyled messages; refers to MESSAGES
function logMessage(key,value) {
  let message = MESSAGES[key][value];
  console.log(message);
}

//Greets user and explains the rules
function logGreeting() {
  console.clear();
  logStyledMessage("greetings", "welcome");
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
  logStyledMessage("greetings", "new_greeting");
}

//Says goodbye to the user
function logGoodbye() {
  console.clear();
  logStyledMessage("greetings", "goodbye");
}

//Formats user input
function formatInput(input) {
  return input.toLowerCase().trimStart();
}

// Gets and returns user choice
function getUserChoice() {

  logStyledMessage("user_chooses", "get_choice");
  console.log(`${Object.keys(WINNING_COMBOS).join(', ')}\n`);
  logStyledMessage("user_chooses", "or");
  console.log(`${Object.keys(SHORT_OPTIONS).join(', ')}`);

  let userChoice = formatInput(READLINE.question());

  while (!VALID_CHOICES.includes(userChoice)) {
    logStyledMessage("user_chooses", "invalid_choice");
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
  console.log("\n***********************************************\n");
}

//Returns the result of one game
function getResult(userChoice, computerChoice) {
  if ((WINNING_COMBOS[userChoice]).includes(computerChoice)) {
    return "user";
  } else if ((WINNING_COMBOS[computerChoice]).includes(userChoice)) {
    return "computer";
  } else {
    return "draw";
  }
}

//Displays score after each game
function displayScore(scores) {
  console.log(`ROUND ${scores.rounds} => YOU: ${scores.userWins} || COMPUTER: ${scores.computerWins}\n`);
}

//Displays results of one game
function displayGameResults(userChoice, computerChoice) {
  logChoices(userChoice, computerChoice);
  let result = getResult(userChoice, computerChoice);

  if (result === "user") {
    logStyledMessage("game_results", "win");

  } else if (result === "computer") {
    logStyledMessage("game_results", "lose");

  } else {
    logStyledMessage("game_results", "draw");
  }
}

//Increments the score
function updateScore(scores, result) {
  switch (result) {
    case "user":
      scores.userWins += 1;
      break;
    case "computer":
      scores.computerWins += 1;
      break;
  }
}

//Increments rounds
function updateRounds(scores) {
  scores.rounds += 1;
}

//Logs results of a match
function logMatchResults(scores) {
  if (scores.userWins === WINNING_POINT) {
    logStyledMessage("match_results", "user_win");

  } else if (scores.computerWins === WINNING_POINT) {
    logStyledMessage("match_results", "computer_win");
  }
}

//Asks user if they want to play again
function goAgain() {
  logStyledMessage("play_again", "ask");
  let response = formatInput(READLINE.question());

  while (response !== "n" && response !== "y") {
    logMessage("play_again", "invalid_response");
    response = formatInput(READLINE.question());
  }
  return response === "y";
}

//Resets the score after a match
function resetScore(scores) {
  scores.userWins = 0;
  scores.computerWins = 0;
}

//Resets rounds after a match
function resetRounds(scores) {
  scores.rounds = 0;
}

//Plays one game: displays results, updates and displays scores and rounds
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

    if (goAgain()) {
      logNewGreeting();
    } else break;
  }
}

//Main program
logGreeting();
playMatch();
logGoodbye();
