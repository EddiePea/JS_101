const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

let displayWinner = (choice, computerChoice) => {

  prompt(`You chose ${choice}; the computer chose ${computerChoice}`);

  let winningMessage = 'Hurrah! You win';
  let losingMessage = 'Bad luck. You lose';
  let drawMessage = "It's a draw!";

  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'rock' && computerChoice === 'paper') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper') ||
      (choice === 'scissors' && computerChoice === 'rock')) {
    prompt (winningMessage);
  } else if (choice === computerChoice) {
    prompt (drawMessage);
  } else {
    prompt (losingMessage);
  }
};

const prompt = message => {
  console.log(`=> ${message}`);
};


let answer = 'y';

while (answer[0] === 'y') {
  prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That is not a valid choice');
    choice = readline.question();
  }

  let randomIndex = Math.round(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? Enter 'y' for 'yes' or 'n' for no");
  answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt ("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
}
