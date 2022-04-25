/*This program creates a mortgage calculator.
INPUTS: loan amount, APR, loan term
OUTPUTS: monthly payment, total payment, total interest
*/

const readline = require('readline-sync');
const MESSAGES = require('./mortgage_calculator_messages.json');
let loanAmount, annualRate, loanTerm, monthlyPayments;

//Format messages printed to the console
const prompt = key => {
  let message = MESSAGES[key];
  console.log(`=> ${message}`);
};

//Format number inputs to allow comma separators, $ and %
const formatInputs = input => {
  if (input[input.length - 1] === '%') {
    input = input.slice(0, -1);
  }
  return input.replaceAll(",", "").replaceAll("$", "");
};

// Format currency outputs
const formatOutputs = output => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(output);
};

//Check input is valid
let checkInput = input => {
  return input.trimStart() === ''    ||
         Number.isNaN(Number(input)) ||
         Number(input) <= 0          ||
         Number(input) === Infinity;
};

//Get loan amount
let getLoanAmount = () => {

  prompt("amount");
  loanAmount = formatInputs(readline.question());

  while (checkInput(loanAmount)) {
    prompt("invalidAmount");
    loanAmount = formatInputs(readline.question());
  }
  loanAmount = Number(loanAmount);
  return loanAmount;
};

//Get annual rate
let getAnnualRate = () => {

  prompt("rate");
  annualRate = formatInputs(readline.question());

  while (checkInput(annualRate)) {
    prompt("invalidRate");
    annualRate = formatInputs(readline.question());
  }
  annualRate = Number(annualRate) / 100;
  return annualRate;
};

//Get loan term in years (e.g. 1.5 for 1 year 6 months)
let getTerm = () => {

  prompt("term");
  loanTerm = formatInputs(readline.question());

  while (checkInput(loanTerm)) {
    prompt("invalidTerm");
    loanTerm = formatInputs(readline.question());
  }
  loanTerm = Number(loanTerm);
  return loanTerm;
};

//Calculate monthly payments
let getMonthlyPayments = () => {
  let monthlyRate = annualRate / 12;
  let termInMonths = loanTerm * 12;

  monthlyPayments =
    (loanAmount) * (monthlyRate /
    (1 - Math.pow((1 + monthlyRate), (-termInMonths))));
  return monthlyPayments;
};

//Print inputs
let printInputs = () => {
  console.clear();
  console.log('Loan Amount: ' + formatOutputs((loanAmount)));
  console.log('APR: ' + (annualRate * 100).toFixed(1) + '%');
  console.log('Loan Term: ' + loanTerm.toFixed(1) + ' year(s)');
};

//Print outputs
let printOutputs = () => {
  let totalPayments = monthlyPayments * loanTerm * 12;
  let totalInterest = totalPayments - loanAmount;
  console.log('You must make monthly payments of: ' + formatOutputs(monthlyPayments));
  console.log('The total amount you have to repay is: ' + formatOutputs(totalPayments));
  console.log('The total interest you have to pay is: ' + formatOutputs(totalInterest));
  console.log("************************************************************************");
};

//Ask user if they want to go again
let goAgain = () => {

  prompt("goAgain");
  let response = readline.question().toLowerCase();

  while (response.length > 1 && response[0] === 'y') {
    prompt("unclearResponse");
    response = readline.question().toLowerCase();
  }
  return response;
};

//Start program

let startProgram = () => {
  console.clear();
  prompt("welcome");
};

//Call functions to run program

while (true) {
  startProgram();
  getLoanAmount();
  getAnnualRate();
  getTerm();
  getMonthlyPayments();
  printInputs();
  printOutputs();
  if (goAgain() !== 'y') {
    prompt("goodbye");
    break;
  }
}