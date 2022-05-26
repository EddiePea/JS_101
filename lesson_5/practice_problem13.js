//Sort the array so that sub-arrays are ordered
//based on the sum of the odd numbers they contain

//INPUT: multi-dimensional array
//L1: parent array
//L2: sub-arrays
//L3: number elements

//OUTPUT: multi-dimensional array with L1 and L3 elements the same
//L2 elements reordered

//STEPS:
//Iterate through the L2 elements
//Sum the odd L3 elements
//Sort L2 elements from smallest odd sum to greatest
//Return multi-d array with L2 elements reordered

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.slice().sort((a, b) => {

  let oddSumA = a.filter(num => num % 2 === 1)
    .reduce((num1, num2) => num1 + num2);

  let oddSumB = b.filter(num => num % 2 === 1)
    .reduce((num1, num2) => num1 + num2);

  return oddSumA - oddSumB;
});

console.log(newArr);
console.log(arr);