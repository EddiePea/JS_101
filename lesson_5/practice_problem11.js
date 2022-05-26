//Use map to return a new array
//Identical in structure
//But each num incremented by 1
//Don't modify original data structure

let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

//INPUT: array containing 3 elements, each objects
//L1 = parent array
//L2 = object elements
//L3 = key-value pairs within each L2 element

//OUTPUT: array, identical structure
//Each value in each key-value pair increased by 1

//STEPS:
//Go through each L2 element of the L1 array
//Get the keys for each L2 element
//Access the values associated with each key
//Increase each value by 1

let newArr = arr.map(obj => {
  let incrementedObj = {};

  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
});

console.log(newArr);
console.log(arr);


/*
let newArr = arr.slice().map(obj => {
  let keyValueArrs = Object.entries(obj);
  keyValueArrs.map(keyValue => {
    let [ key, value ] = keyValue;
    obj[key] += 1;
  });
  return obj;
});

//This approach fails because it modifies the original array

console.log(newArr);
console.log(arr);

*/