//Return array containing only objects where all numbers are even

//INPUT:multi-dimensional array
//L1 = parent array
//L2 = elements, each objects
//L3 = key-value pairs (values = arrays)
//L4 = array elements (numbers)


//OUTPUT: array containing L2 objects where all L4 elements are numbers

//STEPS:
//Iterate through L2 elements
//Access L4 array elements
//Check all L4 array elements are even (use every?)
//If they are, return that object (filter L2 elements?)

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr = arr.filter(element => {
  let valuesArr = Object.values(element).flat();
  return valuesArr.every(num => num % 2 === 0);
});

console.log(newArr);

//LS solution below

let newArr2 = arr.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

console.log(newArr2);

//Filter returns elements for which the CBF returns truthy value
//CBF takes each array element (obj) as parameter
//CBF return value: Object.values call producing array of arrays
//Then every method call on each sub-array (produces boolean)
//Every CBF takes each subArr as parameter
//CBF return value: every method call on each sub-Arr
//Will return true if every num is even