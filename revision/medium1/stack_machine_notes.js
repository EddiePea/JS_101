/* eslint-disable max-lines-per-function */
const STACK_ERROR = 'ERROR: Empty Stack';
const REG_ERROR = 'ERROR: register value is not a valid number';
const stackArr = [];
let regValue = 0;

function assignToRegVal(num) {
  regValue = num;
}

function push() {
  stackArr.push(regValue);
}

function add() {
  regValue += stackArr.pop() || console.log(STACK_ERROR);
}

function sub() {
  regValue -= stackArr.pop() || console.log(STACK_ERROR);
}

function mult() {
  regValue *= stackArr.pop() || console.log(STACK_ERROR);
}

function div() {
  regValue = Math.floor(regValue / stackArr.pop()) || console.log(STACK_ERROR);
}

function remainder() {
  regValue = Math.floor(regValue % stackArr.pop()) || console.log(STACK_ERROR);
}

function pop() {
  regValue = stackArr.pop() || console.log(STACK_ERROR);
}

function print() {
  if (isNaN(regValue)) {
    console.log(REG_ERROR);

  } else {
    console.log(regValue);
  }
}

function processCommands(command) {
  switch (command) {
    case 'PUSH': push();
      break;
    case 'ADD': add();
      break;
    case 'SUB': sub();
      break;
    case 'MULT': mult();
      break;
    case 'DIV': div();
      break;
    case 'REMAINDER': remainder();
      break;
    case 'POP': pop();
      break;
    case 'PRINT': print();
      break;
    default: assignToRegVal(Number(command));
  }
}

function minilang(stringCommands) {
  stringCommands.split(' ').forEach(command => {
    processCommands(command);
  });
}


//TESTS
minilang('PRINT');
// 0

minilang('PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT BOB');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
