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

  if (!(allCardsStr.includes(oneCardStr))) {
    dealtCards.push(card);
  }
  return dealtCards;
}

function dealNewCard(dealtCards) {

  let startLength = dealtCards.length;
  dealCard(dealtCards);

  while (dealtCards.length === startLength) {
    dealCard(dealtCards);
  }
  let newCard = dealtCards[dealtCards.length - 1];
  return newCard;
}


/*
So when a repeat is dealt, it isn't rolling the dice again, but taking the
last card from the array
*/

let dealtCards3 = [
  [ 'A', 'C' ],  [ '6', 'C' ],  [ '2', 'D' ],
  [ '7', 'D' ],  [ 'Q', 'D' ],  [ '3', 'C' ],
  [ '7', 'C' ],  [ 'A', 'D' ],  [ 'J', 'C' ],
  [ '7', 'H' ],  [ '10', 'D' ], [ '4', 'C' ],
  [ '9', 'C' ],  [ '2', 'S' ],  [ '9', 'S' ],
  [ '8', 'D' ],  [ '6', 'H' ],  [ 'J', 'S' ],
  [ '8', 'H' ],  [ '4', 'S' ],  [ '5', 'C' ],
  [ 'Q', 'H' ],  [ '3', 'H' ],  [ '4', 'D' ],
  [ 'J', 'D' ],  [ 'K', 'D' ],  [ 'A', 'H' ],
  [ '10', 'C' ], [ '10', 'H' ], [ 'Q', 'S' ],
  [ 'J', 'H' ],  [ '5', 'D' ],  [ '3', 'D' ],
  [ '6', 'D' ],  [ '4', 'H' ],  [ '5', 'S' ],
  [ 'K', 'H' ],  [ 'A', 'S' ],  [ '6', 'S' ],
  [ '9', 'D' ],  [ 'K', 'S' ],  [ '7', 'S' ],
  [ '10', 'S' ], [ '9', 'H' ],  [ '8', 'S' ],
  [ '2', 'C' ],  [ '3', 'S' ],  [ '5', 'H' ],
  ['2', 'H']
];

console.log(dealNewCard(dealtCards3));

/*
let dealtCards2 = [
  [ 'A', 'C' ],  [ '6', 'C' ],  [ '2', 'D' ],
  [ '7', 'D' ],  [ 'Q', 'D' ],  [ '3', 'C' ],
  [ '7', 'C' ],  [ 'A', 'D' ],  [ 'J', 'C' ],
  [ '7', 'H' ],  [ '10', 'D' ], [ '4', 'C' ],
  [ '9', 'C' ],  [ '2', 'S' ],  [ '9', 'S' ],
  [ '8', 'D' ],  [ '6', 'H' ],  [ 'J', 'S' ],
  [ '8', 'H' ],  [ '4', 'S' ],  [ '5', 'C' ],
  [ 'Q', 'H' ],  [ '3', 'H' ],  [ '4', 'D' ],
  [ 'J', 'D' ],  [ 'K', 'D' ],  [ 'A', 'H' ],
  [ '10', 'C' ], [ '10', 'H' ], [ 'Q', 'S' ],
  [ 'J', 'H' ],  [ '5', 'D' ],  [ '3', 'D' ],
  [ '6', 'D' ],  [ '4', 'H' ],  [ '5', 'S' ],
  [ 'K', 'H' ],  [ 'A', 'S' ],  [ '6', 'S' ],
  [ '9', 'D' ],  [ 'K', 'S' ],  [ '7', 'S' ],
  [ '10', 'S' ], [ '9', 'H' ],  [ '8', 'S' ],
  [ '2', 'C' ],  [ '3', 'S' ],  [ '5', 'H' ],
  [ 'Q', 'C' ],  [ '8', 'C' ],  [ 'K', 'C' ],
];

*/