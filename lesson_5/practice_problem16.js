//Define object
//Key = first item in each sub-array
//Value = second item in each sub-array

//INPUT: multi-dimensional array
//L1 = parent array
//L2 = array elements (arrays)
//L3 = two array elements (strings, numbers, objects, arrays)
//L4 = object/array elements (key-value pairs, strings)

//OUTPUT: object with key value pairs corresponding to number of L2 elements

//STEPS:
//Create empty object to contain results
//Iterate through L1 arr (through each L2 element)
//Add the first element of each sub-array (the first L3 element) to empty object
//Add the second element of each sub-array (the second L2 element) as the value


let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

let obj = {};

arr.forEach(subArr => {
  let [key , value ] = subArr;
  obj[key] = value;
});

console.log(obj);

//Neat solution from LS
//Creates an object from arrays
//Makes first array element the key
//Second array element the corresponding values

console.log(Object.fromEntries(arr));