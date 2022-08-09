//See MD notes

/*
- SET new resultsArr
- Loop through inputArr
- Add each element of inputArr to the previous element
  - If indx 0 -> add elem to resultsArr
  - SET runningTotal - currentElem + resultsArr[indx - 1];
  - Add runningTotal to resultsArr
- Add the result to the resultsArr each time
*/

function runningTotal(arr) {
  let resultsArr = [];

  arr.forEach((num, indx) => {
    if (indx === 0) {
      resultsArr.push(num);

    } else {
      let runningTotal = num + resultsArr[indx - 1];
      resultsArr.push(runningTotal);
    }
  });
  console.log(resultsArr);
}

//Refactored to make this simpler
function runningTotal2(arr) {
  let resultsArr = [];
  let runningTotal = 0;

  arr.forEach(num => {
    resultsArr.push((runningTotal += num));
  });
  console.log(resultsArr);
}

//Refactored to use the map method
function runningTotal3(arr) {

  return arr.map((_, indx) => {
    let arraySoFar = arr.slice(0, (indx + 1));
    return arraySoFar.reduce((num1, num2) => num1 + num2);
  });

}

//Refactored to use the map method but in a simpler way!
function runningTotal4(arr) {
  let total = 0;

  return arr.map((_, indx) => {
    total += arr[indx];
    return total;
  });
}


//TESTS
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
runningTotal([1, 5, -3]);         // [1, 6, 3]
runningTotal([2, 5.5, 6.7]);         // [2, 7.5, 14.2]

runningTotal2([2, 5, 13]);             // [2, 7, 20]
runningTotal2([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal2([3]);                    // [3]

console.log(runningTotal4([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal4([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal4([3]));                    // [3]
console.log(runningTotal4([]));

//LS solution

function runningTotal5(arr) {
  let resultArr = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i += 1) {
    resultArr.push((sum += arr[i]));
  }
  return resultArr;
}