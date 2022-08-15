//See MD notes
/*
- Loop through ARR
- Remove last element of ARR
- Add the removed elements to a newArr
- Loop through newArr
- Add the last element back to ARR until there are no elements left in newArr
- Return ARR
*/

function reverse(list) {
  let copyArr = list.slice();
  let copyArrIndx = 0;

  for (let i = (list.length - 1); i >= 0; i -= 1) {
    list[i] = copyArr[copyArrIndx];
    copyArrIndx += 1;
  }
  return list;
}

let list = [1, 2, 3, 4];
let list1 = ["a", "b", "c", "d", "e"];

console.log(reverse(list));
console.log(list);

console.log(reverse(list1));
console.log(list1);

//LS solution

function reverse2(list) {
  let leftIndx = 0;
  let rightIndx = list.length - 1;

  while (leftIndx < list.length / 2) {

    [list[leftIndx], list[rightIndx]] =
      [list[rightIndx], list[leftIndx]];

    leftIndx += 1;
    rightIndx -= 1;
  }
  return list;
}

//Set leftIndx -> starts index count at start of array
//Set rightIndx => starts index count at end of array
//Creates while loop which continues until the lftIndx reaches midway
//Reassigns elements on either side of the array
//Increments leftIndx -> move to next
//Decrements rightIndx -> move inwards
//Stops halfway (or would reverse the change)

//Using splice

function reverse3(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 0, arr.pop());
  }
  return arr;
}