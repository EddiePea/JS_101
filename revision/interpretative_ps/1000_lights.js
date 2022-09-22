/* eslint-disable no-return-assign */
//See MD notes

function lightsOn(switchNum) {
  let switchArr = Array(switchNum).fill(true);

  for (let rounds = 2; rounds <= switchNum; rounds++) {
    for (let indx = 1; indx < switchNum; indx += 1) {
      if ((indx + 1) % rounds === 0) {
        switchArr[indx] = !(switchArr[indx]);
      }
    }
    rounds += 1;
  }
  return switchArr
    .map((value, indx) => value = [ value, indx + 1 ])
    .filter(subArr => subArr.includes(true))
    .map(subArr => subArr = subArr[1]);
}

//Second attempt -> using simple object rather than array
function lightsOn2(switchNum) {
  let resultsArr = [];
  let switchBoard = {};

  for (let lights = 1; lights <= switchNum; lights += 1) {
    switchBoard[lights] = true;
  }
  for (let rounds = 2; rounds <= switchNum; rounds += 1) {
    for (let key = 1; key <= switchNum; key += 1) {
      if (key % rounds === 0) {
        switchBoard[key] = !switchBoard[key];
      }
    }
  }
  for (let key in switchBoard) {
    if (switchBoard[key] === true) {
      resultsArr.push(Number(key));
    }
  }
  return resultsArr;
}

//Refactored to make it more efficient
function lightsOn2b(switchNum) {
  let switchBoard = {};

  for (let rounds = 1; rounds <= switchNum; rounds += 1) {
    for (let lightNum = 1; lightNum <= switchNum; lightNum += 1) {
      if (lightNum % rounds === 0) {
        switchBoard[lightNum] = !switchBoard[lightNum];
      }
    }
  }
  return Object.keys(switchBoard).filter(key => switchBoard[key] === true)
    .map(num => Number(num));
}


console.log(lightsOn2b(16)); // [1, 4]

//Third attempt using maths innit
function lightsOn3(switchNum) {
  let arr = [];
  for (let indx = 1; indx <= Math.floor(Math.sqrt(switchNum)); indx += 1) {
    arr.push(indx ** 2);
  }
  console.log(Math.floor(Math.sqrt(switchNum)));
  return arr;
}

//Simple while loop and object
function lightsOn4(switchNum) {
  let switchBoard = {};

  for (let count = 1; count <= switchNum; count += 1) {
    for (let lightNum = count; lightNum <= switchNum; lightNum += count) {
      switchBoard[lightNum] = !switchBoard[lightNum] || false;
    }
  }
  return Object.keys(switchBoard).filter(key => switchBoard[key] === true)
    .map(num => Number(num));
}

//You can use an object and access certain keys by reference to its values
//Even if you are filtering an array of keys
//You can also populate an empty object with switched values or false


function lightsOn5(switches) {
  const onSwitches = {};
  let count = 1;

  while (count <= switches) {
    for (let light = count; light <= switches; light += count) {
      onSwitches[light] = !onSwitches[light] || false;
    }
    count++;
  }
  return Object.keys(onSwitches).filter(key => onSwitches[key] === true)
    .map(num => Number(num));
}

//Outer while loop runs until count > switches -> so there are, e.g.
//10 switches and 10 full loops

//The for loop runs while light (which starts as 1) is less than or
//equal to switches (e.g. 10) and it's incremented by count each time

//First iteration, light = count (1), onSwitches[1] = true (b/c there's
//nothing there (so it's a falsy value) and it is now a truthy value
//because of the not operator)

//Second iteration of the for loop, light is incremented by count (1)
//so is now 2, Then onSwitches[2] = true and so on

//When the whole row of switches has been gone through, count is
//incremneted by 1. Then the inner for loop runs again. This time
//count is 2, so light = 2
//So onSwitches[2] is now false (because it was true, the not operator)
//Made it false, so then the second part of the statement returns (false)
//On the second round of the for loop, light is incremented by 2 to become
//4, so onSwitches[4] is now false etc.

//The \\false is unnecessary!