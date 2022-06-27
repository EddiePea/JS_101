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
  console.log(card);
  let oneCardStr = card.join('');
  console.log(oneCardStr);
  let allCardsStr = dealtCards.map(elem => elem.join(''));
  console.log(allCardsStr);

  if (!(allCardsStr.includes(oneCardStr))) {
    dealtCards.push(card);
    console.log(dealtCards);
  }
  return dealtCards;
}

function dealFirstCards(dealtCards) {
  while (dealtCards.length < 100) {
    dealCard(dealtCards);
  }
}
let dealtCards = [];

dealFirstCards(dealtCards);
console.log(dealtCards);