/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
//See MD notes

function minilang(stringCommands) {

  let stackArr = [];
  let regValue = 0;

  stringCommands.split(' ').forEach(command => {
    switch (true) {
      case command === 'PUSH':
        stackArr.push(regValue);
        break;
      case command === 'ADD':
        regValue += stackArr.pop() || emptyStackError(stackArr);
        break;
      case command === 'SUB':
        regValue -= stackArr.pop() || emptyStackError(stackArr);
        break;
      case command === 'MULT':
        regValue *= stackArr.pop() || emptyStackError(stackArr);
        break;
      case command === 'DIV':
        regValue = Math.floor(regValue / stackArr.pop()) ||
          emptyStackError(stackArr);
        break;
      case command === 'REMAINDER':
        regValue = Math.floor(regValue % stackArr.pop()) ||
         emptyStackError(stackArr);
        break;
      case command === 'POP':
        regValue = stackArr.pop() || emptyStackError(stackArr);
        break;
      case command === 'PRINT':
        console.log(regValue || 'ERROR: register value is NaN');
        break;
      case (!isNaN(Number(command))):
        regValue = Number(command);
        break;
      default:
        console.log('ERROR: invalid command');
    }
  });
  return regValue;
}

function emptyStackError(stackArr) {
  if (stackArr.length === 0) {
    console.log('ERROR: empty stack');
  }
}


//TESTS
minilang('ADD PRINT');

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT BOB');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)


