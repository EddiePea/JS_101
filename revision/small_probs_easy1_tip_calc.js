//See MD notes

const READLINE = require('readline-sync');

function getBillAmount() {
  let billAmount = parseFloat(READLINE.question('What is the bill?\n'));

  while (isNaN(billAmount) || billAmount <= 0) {
    billAmount = parseFloat(READLINE.question('Please enter a valid number\n'));
  }
  return billAmount;
}

function getTipPercentage() {
  let tipPercentage = parseFloat(READLINE.question('What is the tip percentage?\n'));

  while (isNaN(tipPercentage) || tipPercentage < 0) {
    tipPercentage = parseFloat(READLINE.question('Please enter a valid number\n'));
  }
  return (tipPercentage / 100);
}

function calculateTip(tipPercentage, billAmount) {
  return tipPercentage * billAmount;
}

function calculateBillTotal(billAmount, tipAmount) {
  return billAmount + tipAmount;
}

function printTip(tipAmount) {
  console.log(`The tip is: £${tipAmount.toFixed(2)}`);
}

function printTotalBill(billTotal) {
  console.log(`The total payable is: £${billTotal.toFixed(2)}`);
}

function tipCalculator() {
  let billAmount = getBillAmount();
  let tipPercentage = getTipPercentage();
  let tipAmount = calculateTip(tipPercentage, billAmount);
  let billTotal = calculateBillTotal(billAmount, tipAmount);

  printTip(tipAmount);
  printTotalBill(billTotal);
}

tipCalculator();

