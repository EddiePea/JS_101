//See MD notes

/*
- Combine ARR1 and ARR2 to create single NEW arr (watch out for mutation)
- Loop through newArr -> remove duplicates
  - Take elements in turn
  - Create subArray of elements following currentElem
  - Return currentElement if it is NOT included in subArray
- Return filtered newArr
*/

function union(arr1, arr2) {
  let combinedArr = arr1.concat(arr2);

  return combinedArr.filter((value, indx) => {
    let remainingValuesArr = combinedArr.slice(indx + 1);
    return !(remainingValuesArr.includes(value));
  });
}

//TESTS
console.log(union3([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
console.log(union3(['cat', 'dog'], ['cat', 'hippo', 'snake']));
console.log(union([{ a: 1, b: 2}, { c: 3}], [{ c: 3}])); //DOESN'T WORK WITH OBJECTS

//LS solutions

function copyNonDupsTo(resultArr, arr) {
  arr.forEach(value => {
    if (!resultArr.includes(value)) {
      resultArr.push(value);
    }
  });
}

function union2(arr1, arr2) {
  let newArr = [];
  copyNonDupsTo(newArray, arr1);
  copyNonDupsTo(NewArr, arr2);
  return newArr;
}

function union3(...args) {
  const newArr = [];
  args.forEach(value => copyNonDupsTo(newArr, value));
  return newArr;
}


