let arr1 = [1,2,3];
let arr2 = [4,5,6];

let merge = (arr1, arr2) => {
  let newArr = [];
  for (i = 0; i < arr1.length; i += 1) {
    newArr.push(arr1[i]);
  }
  return newArr; 
}

console.log(merge(arr1, arr2));

