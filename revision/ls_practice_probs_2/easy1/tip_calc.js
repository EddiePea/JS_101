/*
INSTRUCTIONS/RULES:
- Create tip calculator
- prompt for bill amount
- prompt for tip rate
- compute tip
- log tip and total bill amount to console
- all printed nums are 2 decimal places

ASSUMPTIONS:
- Ingore input validation
- Assume user will enter numbers

INPUT:
- user input: numeric strings

OUTPUT:
- Strings with numeric strings interpolated

EXAMPLES:

DATA STRUCTURE:

ALGO:
- Get bill amount from user
- Get tip percentage from user
- calculate total tip
- calculate total bill
- print total tip -> 2 dp
- print total bill -> 2dp

*/

const READLINE = require('readline-sync');

function getAmount(amountType) {
  let amount = READLINE.question(`What is the ${amountType}:\n`);

  if (isNaN(Number(amount))) {
    amount = READLINE.question('Please enter a valid number:\n');
  }
  return amount;
}

function calculateTip(billAmount, tipPercentage) {
  return Number(billAmount) * (Number(tipPercentage) / 100);
}

function calculateTotalBill(billAmount, tipAmount) {
  return Number(billAmount) + Number(tipAmount);
}

function tipCalculator() {
  let billAmount = getAmount('bill');
  let tipPercentage = getAmount('tip percentage');
  let tipAmount = calculateTip(billAmount, tipPercentage);
  let totalBill = calculateTotalBill(billAmount, tipAmount);

  console.log(`The tip is $${(tipAmount).toFixed(2)}`);
  console.log(`The bill is $${(totalBill).toFixed(2)}`);
}

tipCalculator();