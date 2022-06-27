const READLINE = require("readline-sync");

const DECK = [
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  ['H', 'D', 'S', 'C']
];

//Deals cards
//Outputs nested array containing all of the cards dealt so far
//Adds a newly dealt card
//FIX THIS => letting you deal the same card!!
function dealCard(dealtCards) {
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
//Swap out DEALT_CARDS variable
function dealFirstCards(dealtCards) {
  while (dealtCards.length < 4) {
    dealCard(dealtCards);
  }
}

//Deal new card
function dealNewCard(dealtCards) {
  let newCard = dealCard(dealtCards)[dealtCards.length - 1];
  return newCard;
}

//Assign first cards to player
function assignFirstPlayerCards(playerCards, dealtCards) {
  for (let i = 0; i < 2; i++) {
    playerCards.push(dealtCards[i]);
  }
  return playerCards;
}

//Assign first cards to dealer
function assignFirstDealerCards(dealerCards, dealtCards) {
  for (let i = 2; i < 4; i++) {
    dealerCards.push(dealtCards[i]);
  }
  return dealerCards;
}

//Show card to player
function showPlayerCard(card) {
  console.log(`\nYou have been dealt: ${card.join('')}`);
}

function showDealerCard(card) {
  console.log(`\nDealer has been dealt: ${card.join('')}`);
}

//Show all cards to player
//Format this later
function showPlayerHand(playerCards) {
  let cardNames = [];
  let score = calculateScore(playerCards);

  playerCards.forEach(card => {
    card = card.join('');
    cardNames.push(card);
  });

  console.log(`\nYou hold ${cardNames} and have a total score of ${score}`);
}

//Show all of dealer's cards to player
function showDealerHand(dealerCards) {
  let cardNames = [];
  dealerCards.forEach(card => {
    card = card.join('');
    cardNames.push(card);
  });
  console.log(`\nDealer holds: ${cardNames}`);
}

//Show cards to player
//Think about adapting this so that the variables are outside of the function
//Function to loop through arrays and log each card
//Adapt this
function showFirstCards(playerCards, dealerCards) {
  let playerCardOne = playerCards[0].join('');
  let playerCardTwo = playerCards[1].join('');
  let dealerCardOne = dealerCards[0].join('');

  console.log(`You have been dealt: ${playerCardOne} and ${playerCardTwo}`);
  console.log(`Dealer has been dealt: ${dealerCardOne}`);
}

//Calculate score
function calculateScore(cards) {
  let cardValues = cards.map(card => card[0]);
  let sum = 0;

  cardValues.forEach(value => {
    if (value === 'A') {
      sum += 11;
    } else if (['J', 'Q', 'K'].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });
  cardValues.filter(value => value === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });
  return sum;
}

//Evaluate if bust
function evaluateBust(score) {
  return score > 21;
}

//Prints player's results
//Add total score
function printPlayerResults(playerCards) {
  let score = calculateScore(playerCards);
  if (evaluateBust(score)) {
    console.log("\nYou're bust! Bad luck, you lose");
  } else {
    console.log(`\nYou've chosen to stick with a total score of ${score}.\nDealer's go!`);
  }
}

//Prints dealer's results
//What to do with draw
function printOverallResults(dealerCards, playerCards) {
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  if (evaluateBust(dealerScore)) {
    console.log("\nDealer is bust! Well done, you win!");
  } else if (playerScore < dealerScore) {
    console.log(`\nDealer wins with a score of ${dealerScore}. Bad luck`);
  } else if (playerScore === dealerScore) {
    console.log(`\nYou've both scored ${playerScore}. Dealer wins on a draw`);
  } else {
    console.log(`\nDealer loses with a score of ${dealerScore} against your score of ${playerScore}!`);
  }
}

//Ask if hit or stick while player is not bust
//Add validation function
//Can currently enter
function hitOrStick(dealtCards, playerCards) {

  let score = calculateScore(playerCards);

  while (!evaluateBust(score)) {
    console.log("\nHit or stick? Enter 'h' for hit or any other key first to stick");
    let answer = READLINE.question()[0].trim().toLowerCase();

    if (answer === 'h') {
      let card = dealNewCard(dealtCards);
      playerCards.push(card);
      console.clear();
      showPlayerCard(card);
      showPlayerHand(playerCards);
      score = calculateScore(playerCards);

      if (evaluateBust(score)) break;

    } else break;
  }
}

//Play for dealer
function dealerGo(dealtCards, dealerCards, playerCards) {
  let dealerScore = calculateScore(dealerCards);
  let playerScore = calculateScore(playerCards);

  while (dealerScore < 17 || (dealerScore < 21 && playerScore > dealerScore)) {
    let card = dealNewCard(dealtCards);
    dealerCards.push(card);
    showDealerCard(card);
    dealerScore = calculateScore(dealerCards);
  }
}

//Open the game: deal, assign and show cards
function openGame(dealtCards, playerCards, dealerCards) {
  dealFirstCards(dealtCards);
  assignFirstPlayerCards(playerCards, dealtCards);
  assignFirstDealerCards(dealerCards, dealtCards);
  console.clear();
  showFirstCards(playerCards, dealerCards);
}

//Player go
function playerGo(dealtCards, playerCards) {
  hitOrStick(dealtCards, playerCards);
  printPlayerResults(playerCards);
}

//Play again
function playAgain() {
  console.log("Do you want to play again? Press 'y' and enter if yes and any other key to exit");

  let answer = READLINE.question()[0].toLowerCase();
  return answer === 'y';
}

let dealtCards = [];
let playerCards = [];
let dealerCards = [];

openGame(dealtCards, playerCards, dealerCards);
playerGo(dealtCards, playerCards);

if (evaluateBust(calculateScore(playerCards))) {
  console.log('End of game!');

} else {
  dealerGo(dealtCards, dealerCards, playerCards);
  showDealerHand(dealerCards);
  printOverallResults(dealerCards, playerCards);
}

