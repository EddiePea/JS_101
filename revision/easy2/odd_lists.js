//See MD notes

//Solution using forEach
function oddities1(arr) {
  let newArr = [];

  arr.forEach((elem, indx) => {
    if (indx % 2 === 0) {
      newArr.push(elem);
    }
  });
  return newArr;
}

//Solution using filter

function oddities(arr) {
  return arr.filter((_, indx) => indx % 2 === 0);
}

//Evens + solution using for loop

function evens(arr) {
  let evensArr = [];

  for (let i = 1; i < arr.length; i += 2) {
    evensArr.push(arr[i]);
  }
  return evensArr;
}

//TESTS FOR ODDS

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//TESTS FOR EVENS

console.log(evens([2, 3, 4, 5, 6]));
console.log(evens([1, 2, 3, 4, 5, 6]));
console.log(evens(["abc", "def"]));
console.log(evens([123]));
console.log(evens([])); // logs []