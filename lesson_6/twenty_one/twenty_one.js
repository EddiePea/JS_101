//*** CONSTANT VARIABLES

const READLINE = require("readline-sync");
const EMOJI = require("node-emoji");

const DECK = [
  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
  ["H", "D", "S", "C"]
];

const FIRST_CARDS_DEALT = 4;
const MAX_POINTS = 21;
const MAX_ACE_VALUE = 11;
const ROYALS_VALUE = 10;
//The minimum score for the dealer: he has to hit if his score is below this
const DEALER_MIN_SCORE = 17;
const GAMES_TO_WIN = 3;

//*** MESSAGES

//Prompt
function prompt(message) {
  console.log(`=> ${message}`);
}

//Welcome messages
function printWelcome() {
  console.clear();
  console.log("***WELCOME TO 21s***");
  createEmojis("hearts");
  createEmojis("clubs");
  createEmojis("diamonds");
  createEmojis("spades");
  prompt("The aim is to get cards with the highest total score");
  prompt("BUT if you go over 21, you're bust, and the dealer wins");
  prompt(`If the scores are tied, dealer wins`);
  prompt(`You'll be playing best of ${GAMES_TO_WIN} rounds\n\nGOOD LUCK!`);
  READLINE.question("\nPress ENTER to continue");
}

//Goodbye message
function printGoodbye() {
  console.clear();
  prompt("Bye! Thanks for playing\n");
}

//Creates emojis
function createEmojis(emoji) {
  let loggedEmoji = EMOJI.get(emoji);
  console.log(loggedEmoji);
}

//*** SET UP GAME

//Creates the deck card by card
//Ensures no duplicate cards are dealt
function createDeck(dealtCards) {
  let card = [];

  DECK.forEach(subArr => {
    let randomIndx = Math.floor(Math.random() * subArr.length);
    card.push(subArr[randomIndx]);
  });

  let oneCardStr = card.join('');
  let allCardsStr = dealtCards.map(elem => elem.join(''));

  if (!allCardsStr.includes(oneCardStr)) {
    dealtCards.push(card);
  }
  return dealtCards;
}

//Deals first four cards
function dealFirstCards(dealtCards) {
  while (dealtCards.length < FIRST_CARDS_DEALT) {
    createDeck(dealtCards);
  }
}

//Assigns first cards to players
function assignFirstCards(playerCards, dealerCards, dealtCards) {
  for (let indx = 0; indx < FIRST_CARDS_DEALT; indx += 1) {
    if (indx % 2 === 0) {
      playerCards.push(dealtCards[indx]);
    } else {
      dealerCards.push(dealtCards[indx]);
    }
  }
}

//*** SHOW CARDS

//Formats cards shown
function formatCards(arr, delim = ", ", conj = "and") {

  if (arr.length < 2) {
    return arr.join();

  } else if (arr.length === 2) {
    return arr.join(` ${conj} `);

  } else {
    return arr.slice(0, arr.length - 1).join(delim) +
      `${delim}${conj} ${arr[arr.length - 1]}`;
  }
}

//Shows first cards to player
//This has a separate function b/c dealer's second card must be hidden
function showFirstCards(playerCards, dealerCards) {
  let playerCardNames = [];
  playerCards.forEach(card => playerCardNames.push(card.join('')));
  let playerScore = calculateScore(playerCards);

  console.log(`You have been dealt: ${formatCards(playerCardNames)} and have a score of ${playerScore}`);
  console.log(`Dealer has been dealt: ${dealerCards[0].join('')} and [???]`);
}

//Shows dealt card
function showCard(card, currentPlayer) {
  let name;
  if (currentPlayer === "PLAYER") {
    name = "You have";
  } else {
    name = "Dealer has";
  }
  console.log(`${name} been dealt: ${card.join('')}`);
}

//Show specified player's hand and score
function showStatus(cards, currentPlayer) {
  let score = calculateScore(cards);
  let cardNames = [];
  cards.forEach(card => cardNames.push(card.join('')));

  let name;
  if (currentPlayer === "PLAYER") {
    name = "You hold";
  } else {
    name = "Dealer holds";
  }

  console.log(`\n${name} ${formatCards(cardNames)} with a total score of ${score}`);
}

//*** GAME MOVES

//Deals one new card
//Ensures no card is dealt twice
function dealNewCard(dealtCards) {

  let startLength = dealtCards.length;
  createDeck(dealtCards);

  while (dealtCards.length === startLength) {
    createDeck(dealtCards);
  }
  let newCard = dealtCards[dealtCards.length - 1];
  return newCard;
}

//Ask player to hit or stick
function hitOrStick() {

  console.log("\nHit or stick?\nEnter 'h' for hit or 's' for stick");
  let answer = READLINE.question().toLowerCase();

  while ((answer !== 'h' && answer !== 's') || answer.length > 1) {
    console.log("Hmmm not sure what you want to do. Please enter 'h' to hit and 's' to stick");
    answer = READLINE.question().toLowerCase();
  }
  return answer;
}

//If player hits, this deals and shows them a new card
function playerHits(dealtCards, playerCards) {

  let card = dealNewCard(dealtCards);
  playerCards.push(card);
  console.clear();

  showCard(card, "PLAYER");
  showStatus(playerCards, "PLAYER");
}

//Player go
function playerGo(dealtCards, playerCards) {
  let score = calculateScore(playerCards);

  while (!evaluateBust(score)) {

    let response = hitOrStick();

    if (response === 'h') {
      playerHits(dealtCards, playerCards);
      score = calculateScore(playerCards);

      if (evaluateBust(score)) {
        printPlayerResults(playerCards);
        break;
      }

    } else if (response === 's') {
      printPlayerResults(playerCards);
      break;
    }
  }
}

//Dealer go
function dealerGo(dealtCards, dealerCards, playerCards) {
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  while (dealerScore < DEALER_MIN_SCORE ||
    (dealerScore < MAX_POINTS && playerScore > dealerScore)) {

    let card = dealNewCard(dealtCards);
    dealerCards.push(card);
    showCard(card);
    dealerScore = calculateScore(dealerCards);
  }
}

//*** RESULTS

//Calculates score
function calculateScore(cards) {

  let cardValues = cards.map(card => card[0]);
  let sum = 0;

  cardValues.forEach(value => {
    if (value === 'A') {
      sum += MAX_ACE_VALUE;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += ROYALS_VALUE;
    } else {
      sum += Number(value);
    }
  });

  cardValues.filter(value => value === 'A').forEach(_ => {
    if (sum > MAX_POINTS) sum -= (MAX_ACE_VALUE - 1);
  });
  return sum;
}

//Evaluates if bust
function evaluateBust(score) {
  return score > MAX_POINTS;
}

//Prints player's results after their go
function printPlayerResults(playerCards) {

  let score = calculateScore(playerCards);

  if (evaluateBust(score)) {
    console.log(`\nYou're bust with a total score of ${score}! Bad luck, you lose :(`);

  } else {
    console.clear();
    console.log(`You've chosen to stick with a total score of ${score}.\nDealer's go!\n`);
  }
}

//Calculates game result
function calculateResult(dealerCards, playerCards) {
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  if (evaluateBust(playerScore)) {
    return "PLAYER_BUST";

  } else if (evaluateBust(dealerScore)) {
    return "DEALER_BUST";

  } else if (playerScore < dealerScore) {
    return "DEALER";

  } else if (playerScore === dealerScore) {
    return "DRAW";

  } else {
    return "PLAYER";
  }
}

//Prints game result
function printResult(dealerCards, playerCards) {
  let result = calculateResult(dealerCards, playerCards);
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  switch (result) {
    case "DEALER_BUST":
      console.log(`\nDealer is bust with a score of ${dealerScore}. Well done, you win!`);
      break;
    case "DEALER":
      console.log(`\nDealer wins with a score of ${dealerScore}. Bad luck :(`);
      break;
    case "DRAW":
      console.log(`\nYou've both scored ${playerScore}. Dealer wins on a draw :()`);
      break;
    case "PLAYER":
      console.log(`\nDealer loses with a score of ${dealerScore} against your score of ${playerScore}!`);
  }
}

//Displays match winner
function showMatchWinner(scores) {

  if (scores.playerWins === GAMES_TO_WIN) {
    console.log("\nWELL DONE! You've won the match!");

  } else if (scores.dealerWins === GAMES_TO_WIN) {
    console.log("\nBAD LUCK - dealer won the match!");
  }
}

//Increments scores
function updateScores(scores, result) {

  if (result === "PLAYER_BUST" || result === "DEALER" || result === "DRAW") {
    scores.dealerWins += 1;

  } else if (result === "DEALER_BUST" || result === "PLAYER") {
    scores.playerWins += 1;
  }
}

//Increments rounds
function updateRounds(scores) {
  scores.rounds += 1;
}

//Displays scores
function displayScores(scores) {
  console.log(`\nROUND: ${scores.rounds} || YOUR SCORE: ${scores.playerWins} || DEALER SCORE: ${scores.dealerWins}`);
}

//*** PLAYING THE GAME

//Opens the game
//Deals, assigns and shows cards
function openGame(dealtCards, playerCards, dealerCards) {
  dealFirstCards(dealtCards);
  assignFirstCards(playerCards, dealerCards, dealtCards);
  console.clear();
  showFirstCards(playerCards, dealerCards);
}

//Plays one round
function playRound(scores) {
  let dealtCards = [];
  let playerCards = [];
  let dealerCards = [];

  openGame(dealtCards, playerCards, dealerCards);
  playerGo(dealtCards, playerCards);

  if (!evaluateBust(calculateScore(playerCards))) {
    dealerGo(dealtCards, dealerCards, playerCards);
    showStatus(dealerCards);
    printResult(dealerCards, playerCards);
  }

  updateScores(scores, calculateResult(dealerCards, playerCards));
  updateRounds(scores);
  displayScores(scores);
  READLINE.question("\nPress ENTER to continue");
}

//Asks player if they want to play again
function playAgain() {

  console.log("\nDo you want to play another match? Enter 'y' if yes\nPress any other key to exit");
  let answer = READLINE.question().toLowerCase();

  while (answer[0] === 'y' && answer.length > 1) {
    console.log("Hmmm sorry not sure what you want to do here. Just enter 'y' to play again or any other key to exit");
    answer = READLINE.question().toLowerCase();
  }

  return answer === 'y';
}

//Plays rounds until one person wins the match
function playMatch() {

  let scores = { playerWins: 0, dealerWins: 0, rounds: 0 };

  while (scores.playerWins < GAMES_TO_WIN && scores.dealerWins < GAMES_TO_WIN) {
    playRound(scores);
  }
  showMatchWinner(scores);
}

//Plays matches until player quits
function playTwentyOnes() {
  do {
    printWelcome();
    playMatch();

  } while (playAgain());

  printGoodbye();
}

//*** PROGRAM

playTwentyOnes();
