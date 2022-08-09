//See MD notes

/*
- Loop through one array and access its index numbers in turn
- Multiply arr1[i] by arr2[i]
- Add the products to newArr
- Return newArr
*/


//With map
function multiplyList(arr1, arr2) {
  return arr1.map((value, indx) => {
    return value * arr2[indx];
  });
}

//With forEach
function multiplyList2(arr1, arr2) {
  let newArr = [];
  arr1.forEach((value, indx) => {
    newArr.push(value * arr2[indx]);
  });
  return newArr;
}

//With for loop
function multiplyList3(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1. length; i += 1) {
    newArr.push(arr1[i] * arr2[i]);
  }
  return newArr;
}

//TESTS
console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
console.log(multiplyList2([3, 5, 7], [9, 10, 11]));
console.log(multiplyList3([3, 5, 7], [9, 10, 11]));