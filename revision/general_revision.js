function genString() {
  let sections = [8, 4, 4, 4, 12];
  let randomChars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

  return sections.map(num => {
    let resultStr = '';

    while (num > 0) {
      let randomIndx = Math.floor(Math.random() * randomChars.length);
      resultStr += randomChars[randomIndx];
      num -= 1;
    }
    return resultStr;
  }).join('-');
}

console.log(genString());

function isNumeric(arr) {
  return arr.every(elem => (!isNaN(elem)) && (typeof Number(elem) === 'number'));
}


function sortNestedArr(arr) {
  return arr.map(subArr => {
    if (isNumeric(subArr)) {
      return subArr.slice().sort((a, b) => a - b);
    } else {
      return subArr.slice().sort();
    }
  });
}

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

console.log(sortNestedArr(arr));
console.log(arr);