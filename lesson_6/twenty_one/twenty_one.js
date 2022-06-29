//CONSTANT VARIABLES

const READLINE = require("readline-sync");

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

//SET UP GAME

//Creates the deck
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

//Assign first cards to player
function assignFirstCards(playerCards, dealerCards, dealtCards) {
  for (let indx = 0; indx < FIRST_CARDS_DEALT; indx += 1) {
    if (indx % 2 === 0) {
      playerCards.push(dealtCards[indx]);
    } else {
      dealerCards.push(dealtCards[indx]);
    }
  }
}

//SHOW CARDS

//Shows dealt card to player
function showPlayerCard(card) {
  console.log(`You have been dealt: ${card.join('')}`);
}

//Shows dealer's card when dealt
function showDealerCard(card) {
  console.log(`\nDealer has been dealt: ${card.join('')}`);
}

//Show all player cards and score to player
//Format this
function showPlayerStatus(playerCards) {
  let cardNames = [];
  let score = calculateScore(playerCards);

  playerCards.forEach(card => {
    cardNames.push(card.join(''));
  });

  console.log(`\nYou hold ${cardNames} and have a total score of ${score}`);
}

//Show all of dealer's cards to player
//Format this
function showDealerHand(dealerCards) {
  let cardNames = [];

  dealerCards.forEach(card => {
    cardNames.push(card.join(''));
  });
  console.log(`\nDealer holds: ${cardNames}`);
}

//Show cards to player
//Function to loop through arrays and log each card
//Maybe use the "and" formatting you're going to use above
function showFirstCards(playerCards, dealerCards) {
  let playerCardOne = playerCards[0].join('');
  let playerCardTwo = playerCards[1].join('');
  let dealerCardOne = dealerCards[0].join('');
  let playerScore = calculateScore(playerCards);

  console.log(`You have been dealt: ${playerCardOne} and ${playerCardTwo} and have a score of ${playerScore}`);
  console.log(`Dealer has been dealt: ${dealerCardOne} and ???`);
}

//GAME MOVES

//Deals one new card
//Makes sure that no card is dealt twice
function dealNewCard(dealtCards) {

  let startLength = dealtCards.length;
  createDeck(dealtCards);

  while (dealtCards.length === startLength) {
    createDeck(dealtCards);
  }
  let newCard = dealtCards[dealtCards.length - 1];
  return newCard;
}

//Deals and shows player new card
function playerHits(dealtCards, playerCards) {
  let card = dealNewCard(dealtCards);
  playerCards.push(card);
  console.clear();

  showPlayerCard(card);
  showPlayerStatus(playerCards);
}

//Ask if hit or stick while player is not bust
//Maybe add a validate answer function separately
function hitOrStick(dealtCards, playerCards) {
  let score = calculateScore(playerCards);

  while (!evaluateBust(score)) {
    console.log("\nHit or stick? Enter 'h' for hit or 's' for stick");
    let answer = READLINE.question().trimStart().toLowerCase();

    while ((answer !== 'h' && answer !== 's') || answer.length > 1) {
      console.log("Hmmm not sure what you want to do. Please enter 'h' to hit and 's' to stick");
      answer = READLINE.question().trimStart().toLowerCase();
    }

    if (answer === 'h') {
      playerHits(dealtCards, playerCards);
      score = calculateScore(playerCards);

      if (evaluateBust(score)) break;

    } else break;
  }
}

//Player go
function playerGo(dealtCards, playerCards) {
  hitOrStick(dealtCards, playerCards);
  printPlayerResults(playerCards);
}

//Dealer go
function dealerGo(dealtCards, dealerCards, playerCards) {
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  while (dealerScore < DEALER_MIN_SCORE ||
    (dealerScore < MAX_POINTS && playerScore > dealerScore)) {

    let card = dealNewCard(dealtCards);
    dealerCards.push(card);
    showDealerCard(card);
    dealerScore = calculateScore(dealerCards);
  }
}

//RESULTS

//Calculate score
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

//Evaluate if bust
function evaluateBust(score) {
  return score > MAX_POINTS;
}

//Print player's results after their go
function printPlayerResults(playerCards) {

  let score = calculateScore(playerCards);

  if (evaluateBust(score)) {
    console.log(`\nYou're bust with a total score of ${score}! Bad luck, you lose.\nEnd of game :(`);

  } else {
    console.clear();
    console.log(`You've chosen to stick with a total score of ${score}.\nDealer's go!`);
  }
}

//Calculate game result at end
function calculateTotalResult(dealerCards, playerCards) {
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  if (evaluateBust(dealerScore)) {
    return 'DEALER_BUST';

  } else if (playerScore < dealerScore) {
    return 'DEALER';

  } else if (playerScore === dealerScore) {
    return 'DRAW';

  } else {
    return 'PLAYER';
  }
}

//Print game result after dealer go
function printResult(dealerCards, playerCards) {
  let result = calculateTotalResult(dealerCards, playerCards);
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  switch (result) {
    case 'DEALER_BUST':
      console.log(`\nDealer is bust with a score of ${dealerScore}. Well done, you win!`);
      break;
    case 'DEALER':
      console.log(`\nDealer wins with a score of ${dealerScore}. Bad luck :(`);
      break;
    case 'DRAW':
      console.log(`\nYou've both scored ${playerScore}. Dealer wins on a draw :()`);
      break;
    case 'PLAYER':
      console.log(`\nDealer loses with a score of ${dealerScore} against your score of ${playerScore}!`);
  }
}

//PLAY GAME

//Open the game: deal, assign and show cards
function openGame(dealtCards, playerCards, dealerCards) {
  dealFirstCards(dealtCards);
  assignFirstCards(playerCards, dealerCards, dealtCards);
  console.clear();
  showFirstCards(playerCards, dealerCards);
}

//Play again
function playAgain() {

  console.log("\nDo you want to play again? Press 'y' and enter if yes\nPress any other key to exit");
  let answer = READLINE.question().toLowerCase();

  while (answer[0] === 'y' && answer.length > 1) {
    console.log("Hmmm sorry not sure what you want to do here. Just enter 'y' to play again or any other key to exit");
    answer = READLINE.question().toLowerCase();
  }

  return answer === 'y';
}

//Game loop
//Remove console log of results...
while (true) {
  let dealtCards = [];
  let playerCards = [];
  let dealerCards = [];

  openGame(dealtCards, playerCards, dealerCards);
  playerGo(dealtCards, playerCards);

  if (!evaluateBust(calculateScore(playerCards))) {
    dealerGo(dealtCards, dealerCards, playerCards);
    showDealerHand(dealerCards);
    printResult(dealerCards, playerCards);
  }

  if (!playAgain()) break;

}

