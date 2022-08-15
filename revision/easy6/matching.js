//See MD notes

/*
- Convert string into array
- Filter array ->
  - Create filtered array of `)`
  - Create filtered array of `(`
  - Create filtered array of only brackets
- Return false if:
  - Length of filtered arrays does not match
  - FilteredArr starts with )
- Return true if:
  - Length of filtered arr is 0

*/

function isBalanced(text) {
  let strArr = text.split('');
  let totalBracketsArr = strArr.filter(char => char === '(' || char === ')');
  let openingBracketsArr = strArr.filter(char => char === '(');
  let closingBracketsArr = strArr.filter(char => char === ')');

  if (((openingBracketsArr.length === closingBracketsArr.length) &&
  (totalBracketsArr[0] === ('(')) &&
  (totalBracketsArr[totalBracketsArr.length - 1] === ')')) ||
  (totalBracketsArr.length === 0)) return true;
}

/*
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false); //
console.log(isBalanced("What (is this?") === false); //
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false); //
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false); //
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced("What (()is)))() )up)") === false);
console.log(isBalanced("(What))()(()) is up") === false);
*/

//LS solution

function isBalanced2(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
      console.log(parens);
    } else if (string[idx] === ")") {
      parens -= 1;
      console.log(parens);
    }
    console.log(parens);
    if (parens < 0) return false;
  }
  return parens === 0;
}

//Initialse parens variable with 0
//Create for loop to loop over string
//If loop encounters an opening bracket -> adds 1 to parens
//If loop encounters a closing bracket -> minuses 1 from parens
//If within the loop parens is ever less than 0 (which it will be if
//we have a closing bracket before corresponding closing) then return false
//Otherwise return boolean: if parens is 0 (which it will be if
//opening and closing brackets match)

//Refactored to take advantage of 'includes'
function isBalanced3(string) {
  let parenString = string.split('').filter(elem => {
    return (elem === '(' || elem === ')');
  }).join('');

  while (parenString.includes('()')) {
    parenString = parenString.split('()').join('');
  }

  if (parenString.length === 0) return true;
}

//Create filtered array of all brackets
//Turn it into string
//Loop whilst filteredStr includes a complete pair ()
//Reassign value of filteredStr to it converted to array split
//along the bracket pairs (thus removing them) and rejoining, leaving
//Only left over brackets (which could then form a pair)
//If all bracket pairs are removed and nothing is left, return true
//Otherwise false

console.log(isBalanced2("What (is) this?") === true);
console.log(isBalanced2("What is) this?") === false); //
console.log(isBalanced2("What (is this?") === false); //
console.log(isBalanced2("((What) (is this))?") === true);
console.log(isBalanced2("((What)) (is this))?") === false); //
console.log(isBalanced2("Hey!") === true);
console.log(isBalanced2(")Hey!(") === false); //
console.log(isBalanced2("What ((is))) up(") === false);
console.log(isBalanced2("What (()is)))() )up)") === false);
console.log(isBalanced2("(What))()(()) is up") === false);

//Refactored to include other pairs
function isBalanced4(string) {
  let possibleCharsToBalance = ['(', ')', '[', ']', '{', '}', '"', "''"];  // Matching for ' might not be the best idea
  let possiblePairs = ['()', '[]', '{}', '""', "''"];
  let remaining = string.split('').filter(char => possibleCharsToBalance.includes(char)).join('');

  let len;
  do {
    len = remaining.length;
    possiblePairs.forEach(pair => remaining = remaining.split(pair).join(''));
    console.log(remaining);
  } while (remaining.length < len);

  if (remaining.length === 0) return true;
}

//Create array of all possible chars
//Create array of all possible pairs
//Filter string so that it only includes the chars in the possibble chars array
//Create len variable
//Do while loop
//len variable is assigned value of filteredArrStr length
//forEach method loops over possiblePairs array
//for each pair, the filteredArrStr is reassigned the value of splitting that
//string into an array where the pair appears and joining it back into a string
//That process continues while there are still elements in the filteredArrStr
//to remove
//If the str left has nothing in - all pairs removed, returns true

console.log(isBalanced4("What {is) this?") === false);
console.log(isBalanced4("What {(is)} this?") === true); //
console.log(isBalanced4("What '('is) this?") === true); //
console.log(isBalanced4("((What) (is this))?") === true);
console.log(isBalanced4("((What)) (is this))?") === false); //
console.log(isBalanced4("Hey!") === true);
console.log(isBalanced4(")Hey!(") === false); //
console.log(isBalanced4("What ((is))) up(") === false);
console.log(isBalanced4("What (()is)))() )up)") === false);
console.log(isBalanced4("(What))()(()) is up") === false);