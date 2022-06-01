1. Initialise deck - nested array
2. Deal cards to player and dealer
    - Select cards at random from the deck
    - Assign selected cards to player and dealer
    - Show 2 cards to player
    - Show 1 of dealer's cards to player
3. Player turn: hit or stay
    - Repeat until bust or stay
    - If bust, dealer wins (?)
4. Dealer turn: hit or stay
    - Repeat until total >= 17 or bust
    - If dealer goes bust, player wins
5. Compare cards
    - If player has higher score than dealer, player wins
    - If dealer has higher score than player, dealer wins
6. Declare winner
    - If player has gone bust at step 2 => dealer
    - If dealer has gone bust at step 4 => player
    - If player has higher score than dealer in step 5 => player
    - If dealer has higher score than player in step 5 => dealer

***DEAL CARDS FUNCTION**

INPUT:
- Multi-dimensional array
- L1 = parent array
  - L2 = 2 sub-arrays
    - L3 = string elements (names of cards)

OUTPUT: 
- 4 randomly selected cards
- 2 assigned to player
- 2 assigned to dealer

RULES: 
- Each card needs to have one value from each L2 sub-array
  - So one suit + one face value
- 


