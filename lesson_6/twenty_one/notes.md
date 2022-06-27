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
  - Array with 4 sub-arrays as elements
  - Each sub-array made up of one L3 value from L2[0] and one L3 value from L2[1]

RULES: 
- Each card needs to have one value from each L2 sub-array
  - So one suit + one face value
- Cannot repeat cards

STEPS: 
1. Iterate through L1 array 
2. Create 1 empty array to contain the results
3. Iterate through each L2 array
4. On each loop through each L2 array:
  - Select one L3 element at a randomly chosen index position
  - Add the randomly selected elements to the results container
5. Repeat until 4 cards have been selected

PSEUDOCODE: 
- Loop through L1 array => go through each L2 element
- Initialise variable with empty array to contain the results for all cards
  - i.e. a parent array
- For each L2 element:
  - Initialise variable with empty array to contain results for one card
    - i.e. a child sub-array
  - Generate a random index num
    - Generate random number between 0 and 1
    - Multiply that number by the length of the L2 element 
    - Round down to nearest integer
  - Select the L3 element at the index position that corresponds with that random num in each L2 sub-array
  - Return: array containing the two randomly selected elements from  each L2 array
    - Add the elemenets selected to the empty 'card' array
- Join each pair of results to create a single "card" 
  - OR just keep as an array of two elements
  - advantages => can convert second element to num to check value if num
- Return an array containing 4 elements (each containing a pair of string elements to create 1 card)
  - Push each card array to the parent array

NB. Had some difficulties here because object elements are pointers to the mem address (not the underlying value), so the equality operators don't work. Had to convert the array elements into strings first to check for duplicates

***ASSIGN CARDS TO PLAYERS FUNCTION**

INPUT: 
- Output of deal cards function (a multi-dimensional array with 4 elements)

OUTPUT:
- 2 separate arrays corresponding to each user's cards

STEPS: 
- Capture the output of the deal cards function [or just have parameter]
- Assign each pair of elements to 4 separate variables corresponding to each card

NB. This didn't seem to work as a function => it kept on saying that the parameter (representing the array return of the dealCards function) was undefined.

***SHOW CARDS TO PLAYER FUNCTION**

INPUT: 
- Output of the dealCards function
- 1 nested array => think about containing that array in a variable then using those values in this function

OUTPUT: 
- Log to console: 
  - 2 cards which are the players cards 
  - strings describing the cards
  - 1 card which is the dealer's card

STEPS: 
- Capture return value of deal cards func
  - Watch out for this changing value each time it is called - probably need to capture it outside of the function and use the variable within the function
- Take info in the arrays
- Join array elements to create a string
- Output a string containing those string elements so say something coherent
  - e.g. You have been dealt: 2H and JC
  - Think about longer string, e.g. You have been dealt the 2 of hearts and the Jack of clubs
  - e.g. The dealer has been dealt: the ace of spades 

***PLAYER HIT OR STICK FUNCTION**

INPUT:
- User response to question: hit or stick?

OUTPUT:
- If stick => do nothing and end function execution
- If hit => deal another card until: 
  - User says stick 
  - OR user is bust

STEPS:
1. Ask user what they want to do
2. Capture response
3. If response is STICK => do nothing and end function 
4. If response is hit => deal a card:
  - If user bust => end function
  - If user is not bust, ask what they want to do => loop back to step 1 

***IF ACE 1 OR 11 FUNCTION**

INPUT:
- Cards in each player's array

OUTPUT:
- Value of Ace: 1 or 11

STEPS:
- Get return value of count player score function (minus Ace)
- If total score plus 11 > 21 => Ace value = 1;
- Otherwise, if total score plus 11 >= 17 Ace value = 1;
- Otherwise => Ace value = 11;

NB. Abandoned this in the end to collapse it into a single count score function

***BUST ASSESSMENT FUNCTION**

INPUT: 
- Cards in each player's array
  - L1 = parent arrent
    - L2 = sub-array
      - L3 = string elements x2

OUTPUT: 
- Boolean: true if bust, false if not bust

STEPS:
- Return value of count player score function
- If the value is > 21 => return true; otherwise return false

***COUNT PLAYER SCORE [not including Ace]**

INPUT: 
- Cards in player's array
  - L1 = parent arrent
    - L2 = sub-array
      - L3 = string elements x2
- Identify player

OUTPUT: 
- 1 number

STEPS:
- Iterate through player's card array
- Take the first L3 element in each sub-array
- Coerce element into a number
- If result is a number => keep (add to new data structure?)
  - Maybe filter?
- If result is NaN => [watch out because NaN !== NaN]
  - If element = ignore
  - Otherwise => add 10 to new array
- Add together all of the number values in the new array to produce a single value 
  - Use reduce?
  - Maybe separate out a separate function...
- Return single value

NB. Abandoned this in the end to create a single score calculator

***DEALER GO**

INPUT: 
- 2 Cards in dealer's card array
  - L1 = parent array
    - L2 = subarray
      - L3 = string elements x2
- Dealt cards array
  - L1 = parent array
    - L2 = subarrays (one for each card dealt)
      - L3 = string elements x2

OUTPUT: 
- New cards dealt added to dealer card array
- Print that dealer sticks (if not bust and other conditions for hitting not met)

STEPS: 
1. Calculate dealer total score
2. [While total score is less than 17] OR [dealer score is less than 21 AND player score is greater than dealer score]
  - Dealer is dealt a new card
  - New card is added to dealer's hand
  - Card is displayed to player
  - Score is evaluated:
    - If initial conditions met, loops back to start of step 2
    - Otherwise exit loop and continue
3. If score is <= 21:
  - Tell user that dealer stays

PSEUDOCODE: 
- Invoke function which calculates dealer's current score
  - Assign output to variable 'score'
- Create a loop:
  - Looping condition:
    - score < 17 OR
    - score < 21 AND playerScore > score
  - Invoke function to deal new card
    - Assign output to variable 'card'
  - Add card to dealer's cards
  - Invoke function to show card to player
  - Invoke function to calculate score again:
    - If looping conditions met, it starts again
    - Otherwise, exits loop
- Create condition: so if score is <=21:
  - Print 'dealer stays'
- Otherwise: nothing



*NB This function assumes that player is not bust => if player bust, this function is not invoked*


