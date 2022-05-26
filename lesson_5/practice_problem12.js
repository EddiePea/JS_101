//Use combination of methods, e.g. filter
//Return a new array identical in structure to original
//Contain only multiples of 3

//INPUT: multi-dimensional array
//L1: parent array
//L2: sub-arrays
//L3: number elements

//OUTPUT: multi-dimensional array with 3 levels
//L3 => only multiples of 3

//STEPS:
//Iterate through L2 elements in L1 array
//Itereate through L3 elements in L2 arrays
//Filter L3 elements, returning only multiples of 3

//REMEMBER:
//Don't mutate the original array

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newArr = arr.map(subArr => {
  return subArr.filter(num => {
    return num % 3 === 0;
  });
});

console.log(newArr);
console.log(arr);
