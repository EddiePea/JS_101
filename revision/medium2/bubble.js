/* eslint-disable max-lines-per-function */
//See MD notes

/*
- Create outer loop (which runs until no more swaps are carried out)
  - SET index to 0
  - SET swapsCounter to 0
  - Loop through ARR using index numbers to access ARR elements
    - Loop runs while i < ARR.length
    - If ARR[i] > ARR[i + 1]
      - ARR[i + 1] is reassigned to ARR[i]
      - AND swapsCounter is increased by 1
    - Increase [i] by 1 on each loop
  - If at the end of inner loop swapsCounter === 0 -> break out of outerloop
  - Return ARR
*/

function bubbleSort(arr) {
  while (true) {
    let index = 0;
    let swapsCounter = 0;

    while (index < arr.length) {

      if (arr[index] > arr[index + 1]) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
        swapsCounter += 1;
      }
      index += 1;
    }
    if (swapsCounter === 0) break;
  }
  return arr;
}

//Using forEach
//Didn't return array here => mutating a non-local variable (rather than
//returning a meaningful value)
function bubbleSort3(arr) {
  while (true) {
    let swapsCounter = 0;

    arr.forEach((value, indx) => {
      if (value > arr[indx + 1]) {
        [arr[indx], arr[indx + 1]] = [arr[indx + 1], arr[indx]];
        swapsCounter += 1;
      }
    });
    if (swapsCounter === 0) break;
  }
}

//Refactored to make more efficient
//They use destructuring assignment here
function bubbleSort2(arr) {
  while (true) {
    let swapped = false;

    for (let indx = 0; indx < arr.length; indx += 1) {
      if (arr[indx] > arr[indx + 1]) {
        [arr[indx], arr[indx + 1]] = [arr[indx + 1], arr[indx]];
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

let array1 = [5, 3];
bubbleSort3(array1);
console.log(array1);    // [3, 5]


let array2 = [6, 2, 7, 1, 4];
bubbleSort3(array2);
console.log(array2);    // [1, 2, 4, 6, 7]


let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort3(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"];