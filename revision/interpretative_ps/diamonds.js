//See MD notes
//Return to this later

/*
- SET midway to Math.ceil[n/2]
- Create loop that runs for [midway] times
  - Print asterisk [line] + [line-1] times with
  [midway-line] whitespace before it

Total length:
- 1: 1 -> midway
- 2: 3 -> 6 -> midway + 1
- 3: 5 -> 7 -> midway + 2
- 4: 7 -> 8 -> midway + 3

- Create loop that runs for [midway-1] times
  - SET multiple to 1
  - Print asterisk [line_-_[2_*_multiple]] times
  - With midway - [line_-_[2_*_multiple]] times
  - Increment multiple by 1

- Length
- 6: 7 -> midway + 3 -> line - 3
- 7: 5 -> midway + 2 -> line - 5
- 8: 3 -> midway + 1 -> line - 7
- 9: 1 -> midway     -> line - 9
*/

function diamond(gridSize) {
  let midway = Math.ceil(gridSize / 2);
  let line = 1;

  while (line <= midway) {
    console.log(('*'.repeat(line + (line - 1))).padStart(midway + (line - 1), ' '));
    line += 1;
  }
  for (let multiple = 1; multiple < midway; multiple += 1) {
    let whiteSpace = 2 * multiple;
    console.log(('*').repeat((line - whiteSpace) + (line - whiteSpace - 1)).padStart(midway + (line - (whiteSpace + 1))));
    line += 1;
  }
}

/*
- Lines: 1 start increment by 1

- Num of asterisks up to midway (inclusive): 1 start increment by 2
- Num of asterisks after midway: [midway + 2 start] decrement by 2

- Total length until midway (inclusive): start at midway and increment by 1
- Total length after midway: [midway - 1] decrement by 1
*/

//Refactor looking at number relationships

function diamond2(gridSize) {
  let midway = Math.ceil(gridSize / 2);
  let asteriskNum = 1;
  let totalLength = midway;

  for (let line = 1; line <= gridSize; line += 1) {
    if (line < midway) {
      console.log('*'.repeat(asteriskNum).padStart(totalLength));
      asteriskNum += 2;
      totalLength += 1;

    } else if (line === midway) {
      console.log('*'.repeat(asteriskNum).padStart(totalLength));

    } else {
      asteriskNum -= 2;
      totalLength -= 1;
      console.log('*'.repeat(asteriskNum).padStart(totalLength));
    }
  }
}


diamond2(11);


//LS solution
function diamond3(num) {
  numberSequence(num).forEach(number => {
    console.log(`${' '.repeat((num - number) / 2)}${'*'.repeat(number)}`);
  });
}

//Function in which the forEach is called on the return value of
//the numberSequence invocation
//For each number, it logs spaces (gridNum - each number in sequence) over 2
//And an asterisk is printed for each number in sequence

function numberSequence(num) {
  let result = [];
  let increment = 2;
  let number = 1;

  while (number > 0) {
    result.push(number);
    if (number === num) {
      increment = -2;
    }
    number += increment;
  }
  return result;
}

//This function returns an array
//A while loop is created which runs while number (starting from 1)
//Is greater than 0
//The number is pushed to the result array
//Then if the number pushed is equal to the gridNum (i.e once
//the midway point is reached), then the increment is reduced
//By 2 on each round
//Otherwise or next, number is increased by the increment

//Example:
//If num is 5
//number starts as 1
//1 is pushed to the array
//as 1 does not equal [5] then number is increased by 2 [3]
//Number is now 3 -> and is pushed to the array
//As number does not equal [5], number is increased by 2 [5]
//Number is now 5 and is pushed to the array
//As number DOES equal [5], the increment is reassigned to -2
//So number is decreased by 2 [3]
//3 is pushed to the array
//As 3 does not equal [5], number is added to -2 [1]
//1 is added to the array
//As 1 does not equal [5], number is added to -2 [-1]
//At the top of the loop, number fails the condition as it
//is less than 0, so the loop stops and the arr is returned
//[1, 3, 5, 3, 1]

function diamond4(gridNum) {
  let stars = 1;

  for (let row = 1; row <= gridNum; row++) {
    console.log(`${' '.repeat((gridNum - stars) / 2)}${'*'.repeat(stars)}`);

    if (row < (gridNum / 2)) {
      stars += 2;
    }  else {
      stars -= 2;
    }
  }
}

//Creates a stars variable for num of asterisks
//Creates a for loop where row = 1 and loop continues until row
//Is greater than gridNum
//If the row is less than the midway point, then stars is incremented
//By 2 on each iteration (1, 3, 5, 7 etc.)
//Otherwise, stars is decremented by 2 (5, 3, 1)