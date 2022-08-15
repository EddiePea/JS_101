//See MD notes

/*
- Set empty arr -> newArr
- Loop through arr1
  - for loop OR forEach
- Loop through arr2
  - for loop OR forEach
- Take each arr1 element and multiply it by each arr2 element
- Add to new array (newArr)
- Sort newArr in ascending order
  - Use sort(a, b)
- Return newArr

*/

function multiplyAllPairs(arr1, arr2) {
  let resultsArr = [];
  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      resultsArr.push(num1 * num2);
    });
  });
  return resultsArr.sort((a, b) => a - b);
}


//TESTS
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]