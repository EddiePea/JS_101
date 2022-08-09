//See MD notes

/*
- Set newArr
- Let arr1 count = 0
- Loop through first arr
  - Let newArr[count] = currentElem
  - count += 2
- Let arr2 count = 1
- Loop through arr2
  - Let newArr[count] = currentElem
  - count += 2;
- Return newArr
*/

function interleave(arr1, arr2) {
  let resultsArr = [];
  let arr1Count = 0;
  let arr2Count = 1;

  arr1.forEach(value => {
    resultsArr[arr1Count] = value;
    arr1Count += 2;
  });

  arr2.forEach(value => {
    resultsArr[arr2Count] = value;
    arr2Count += 2;
  });
  console.log(resultsArr);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//Refactored to use for loop

function interleave2(arr1, arr2) {
  let resultsArr = [];

  for (let i = 0; i < arr1.length; i += 1) {
    resultsArr.push(arr1[i], arr2[i]);
  }
  console.log(resultsArr);
}

interleave2([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//Refactored to use forEach

function interleave3(arr1, arr2) {
  let resultsArr = [];

  arr1.forEach((value, indx) => {
    resultsArr.push(value, arr2[indx]);
  });
  console.log(resultsArr);
}

interleave3([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//Refactored using map

function interleave4(arr1, arr2) {
  return (arr1.map((value, indx) => {
    return [value, arr2[indx]];
  })).flat();
}

console.log(interleave4([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

//Further refactoring using map
function interleave5(arr1, arr2) {
  let result = [];
  arr1.map((value, indx) => result.push(value, arr2[indx]);
  return result;
}

console.log(interleave5([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

//Refactored using reduce

function interleave6(arr1, arr2) {
  arr1.reduce((accum, _, indx) => {
    accum.push(arr1[indx], arr2[indx])
    return accum;
  }, []);
}

//In CBF, push the elements at [i] in both arrs to the empty
//arr accumulator, that filled array then becomes the accumulator
//so new elements are added each time

