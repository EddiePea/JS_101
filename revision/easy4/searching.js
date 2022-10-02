//See MD notes

/*
- GET NUMS from user -> string form
- Add NUMS [1] to [5] to empty array
  - Consider using separate function to generate array of nums 1-5
- Use method to ask if array includes NUM [6]
   - Maybe 'some'
   - Maybe 'includes'
- Separate function -> run function to check if num included within
print results function
- If [TRUE] -> [results] variable = 'appears'
- If [FALSE] -> [results] variable = 'does not appear'
- Use template literal to insert results
*/

const READLINE = require('readline-sync');

function getNum(place) {
  let num = READLINE.question(`Enter the ${place} number:\n`);

  while (isNaN(Number(num))) {
    num = READLINE.question('Please enter a valid number:\n');
  }
  return num;
}

function returnFiveNumsArr() {
  let places = ['1st', '2nd', '3rd', '4th', '5th'];
  let numArr = [];
  let num;

  places.forEach(place => {
    num = getNum(place);
    numArr.push(num);
  });

  return numArr;
}

function getSixthNum() {
  return getNum('last');
}

function isNumRepeated(num, arr) {
  return !!arr.includes(num);
}

function joinWithOr(arr) {
  let firstPart = (arr.slice(0, -1)).join(', ');
  let secondPart = ' or ' + arr.slice(-1);
  return firstPart + secondPart;
}

function printResults() {
  let arr = returnFiveNumsArr();
  let sixthNum = getSixthNum();
  let result;

  if (isNumRepeated(sixthNum, arr)) {
    result = 'appears';
  } else {
    result = 'does not appear';
  }
  console.log(`The number ${sixthNum} ${result} in ${joinWithOr(arr)}`);
}

printResults();

//LS additional suggestions

function isIncluded(arr, val) {
  return !!arr.some(elem => elem > val);
}

function isLogged() {
  let num;
  let choices = [];
  let places = ['1st', '2nd', '3rd', '4th', '5th', '6th'];

  places.forEach(place => {
    num = READLINE.question(`Enter the ${place} number:\n`);
    choices.push(num);
  });

  return choices;
}


