//See MD notes

/*
- SET empty array -> [resultsArr]
- Create loop -> continues while count > 0
  - Add num to resultsArr
  - Add num to num
- Return resultsArr

OR
- Create newArr with num of elements in count
- Fill newArr with 0
- Call map on newArr -> ([indx + 1) * starting num] 
*/

//Using a while loop
function sequence(count, startingNum) {
  let resultsArr = [];
  let num = startingNum;

  while (count > 0) {
    resultsArr.push(startingNum);
    startingNum += num;
    count -= 1;
  }
  console.log(resultsArr);
}

//Using map
function sequence2(count, startNum) {
  let resultsArr = Array(count).fill(0);
  return resultsArr.map((_, indx) => (indx + 1) * startNum);
}

//Refactored to use spread syntax
function sequence4(count, startNum) {
  return [...Array(count)].map((_, indx) => (indx + 1) * startNum);
}

//TESTS
console.log(sequence2(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7));         // [-7, -14, -21, -28]
console.log(sequence2(3, 0));          // [0, 0, 0]
sequence2(0, 1000000);    // []

//LS solution
function sequence3(count, startNum) {
  let result = [];
  for (let num = 1; num <= count; num++) {
    result.push(num * startNum);
  }
  return result;
}

//Set empty result array
//For loop -> initialise a num counter, to multiply startNum by each time
//Increment num until it is greater than count
//Add num multiplied by startNum to arr

