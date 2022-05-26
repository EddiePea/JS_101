//Return new array with same structure
//But values in each sub-array reordered (ascending)

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

//Multi-dimensional array
//L1 = parent array [arr]
//L2 = sub-arrays
//L3 = elements of sub-arrays

//Select each L2 element
//Iterate through all L3 elements within L2 elements
//Reorder L3 elements
//Return reordered L2 element
//Return L1 element containing reordered L2 elements

//map => returns a new transformed array
//sort => sorts array elements in order

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort();
  } else {
    return subArr.slice().sort((a, b) => a - b);
  }
});
//Warning: you need slice() otherwise you'll mutate the
//sub-arrays, even if you've saved the output to a new variable
console.log(newArr);
console.log(arr);

//Problem 10
//Sort the elements in descending order

let newArr2 = arr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

console.log(newArr2);
console.log(arr);

let newArr3 = arr.map(subArr => {
  return subArr.slice().sort((a, b) => {
    if (typeof a === 'number') {
      return b - a;
    }
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
});

console.log(newArr3);

//Called map method on arr
//CBF parameter (subArr) = each sub-array element
//Return value of CBF: return value of calling sort() method on
//Copy of each sub-arr

//Sort takes a CBF as an argument.

//CBF takes two parameters: a and b (each represent pairs of nums
//in each sub-arr)

//