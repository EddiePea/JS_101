//See MD notes

/*
- Validate input:
  - If age = NaN -> invalid
  - If age === Infinity (invalid)
  - If age < 0 -> invalid
  - If retirementAge < currentAge -> invalid
- GET currentAge from user -> coerce to number and round down
- GET retirementAge from user -> coerce to number and round down
- GET current year
- GENERATE currentYear:
  - Date method?
- Calculate yearsOfWorkLeft:
  - retirementAge - currentAge
- Calculate retirementYear:
  - currentYear + yearsOfWorkLeft
- Print results - including variables
*/

const READLINE = require('readline-sync');

//Assumes input coerced to number first
function validInput(input) {
  return !!((!isNaN(input)) && (input !== Infinity) && ((input > 0)));
}

function getCurrentAge() {
  let currentAge = Number(READLINE.question('Please enter your current age:\n'));

  while (!validInput(currentAge)) {
    currentAge = Number(READLINE.question('Please enter a valid number:\n'));
  }
  return currentAge;
}

function getRetirementAge(currentAge) {
  let retirementAge = Number(READLINE.question('At what age would you like to retire?\n'));

  while (!validInput(retirementAge) || currentAge > retirementAge) {
    retirementAge = Number(READLINE.question('Please enter a valid number, e.g. your retirement age must be greater than your current age:\n'));
  }
  return retirementAge;
}

function singleOrMultipleYears(yearsOfWorkLeft) {
  let year;
  if (yearsOfWorkLeft > 1) {
    year = 'years';
  } else {
    year = 'year';
  }
  return year;
}

function printResults(currentYear, retirementYear, yearsOfWorkLeft) {
  console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
  console.log(`You only have ${yearsOfWorkLeft} ${singleOrMultipleYears(yearsOfWorkLeft)} of work to go!`);
}

function retirementCalculator() {
  let currentYear = new Date().getFullYear();
  let currentAge = getCurrentAge();
  let retirementAge = getRetirementAge();
  let yearsOfWorkLeft = retirementAge - currentAge;
  let retirementYear = currentYear + yearsOfWorkLeft;

  printResults(currentYear, retirementYear, yearsOfWorkLeft);
}

retirementCalculator();