//Copying objects

function copyObj(obj, keys) {
  let copyOfObj = {};

  if (keys) {
    keys.forEach(key => {
      copyOfObj[key] = obj[key];
    });
    return copyOfObj;

  } else {
    return Object.assign(copyOfObj, obj);
  }
}

let testObj = { a: 1, b: 2, c: 3, d: 4};

console.log(copyObj(testObj));
console.log(copyObj(testObj, ['a', 'b']));

//Converting arrs to objs

let arr1430 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let emptyObj = {};

arr1430.forEach(subArr => {
  let [ key, value ] = subArr;
  emptyObj[key] = value;
});

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


//Iterating over objects

let obj1422 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let objArr = [];

for (let item in obj1422) {

  if (obj1422[item].type === 'fruit') {
    let colorArr = obj1422[item].colors;
    let capitalizedColorArr = colorArr.map(color => {
      return color[0].toUpperCase() + color.slice(1);
    });

    objArr.push(capitalizedColorArr);

  } else if (obj1422[item].type === 'vegetable') {
    let sizeAllCaps = obj1422[item].size.toUpperCase();
    objArr.push(sizeAllCaps);
  }
}

//Using map

let arr1810 = [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ];

let printArr1810 = arr1810.map(obj => {
  Object.entries(obj).forEach(keyValue => {
    let [ key, value ] = keyValue;
    obj[key] += 1;
  });
  return obj;
});

//Random num generation => array to string

function uuidMaker() {
  let chars = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f'];
  let sections = [8, 4, 4, 4, 12];
  let uuid = '';

  sections.forEach((section, sectionIndx) => {
    for (let indx = 1; indx <= section; indx += 1) {
      let randomIndx = Math.floor(Math.random() * chars.length);
      uuid += chars[randomIndx];
    }
    if (sectionIndx < (sections.length - 1)) {
      uuid += '-';
    }
  });
  return uuid;
}


//Using every and filter

let arr12 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

let newArr12 = arr12.filter(obj => {
  return Object.values(obj).every(subArr => {
    return subArr.every(num => num % 2 === 0);
  });
});

//Using filter, reduce and sort

let arr11 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr11 = arr11.slice().sort((a, b) => {
  let sumOfOddA = a.filter(num => num % 2 === 1)
    .reduce((accum, value) => accum + value, 0);

  let sumOfOddB = b.filter(num => num % 2 === 1)
    .reduce((accum, value) => accum + value, 0);

  return sumOfOddA - sumOfOddB;
});

//Using the filter method
let filterTestArr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let newFTA = filterTestArr.map(subArr => {
  return subArr.filter(num => num % 3 === 0);
});


//Using map and reassigning nested object values

let mapTestArr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

let printMapTest = mapTestArr.map(obj => {
  let incrementedObj = {};
  for (let key in obj) {
    incrementedObj[key] = obj[key] + 1;
  }
  return incrementedObj;
});

//Sorting nested arrays

let sortTestArr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let printedArr = sortTestArr.map(subArr => {
  if (typeof subArr[0] === 'string') {
    return subArr.slice().sort().reverse();
  } else {
    return subArr.slice().sort((a, b) => b - a);
  }
});

//Extracting chars from strings using forEach

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

/*
Object.values(obj).forEach(subArr => {
  subArr.forEach(word => {
    word.split('').forEach(char => {
      if ('aeiou'.includes(char)) {
        console.log(char);
      }
    });
  });
});

*/

//Accessing values from nested objects

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];

  console.log(`${name} is a ${age} years old ${gender}.`);
});

//Sorting arrays with nested objects

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});

//Sorting arrays

let sortArr = ['10', '11', '9', '7', '8'];

sortArr.sort((a, b) => Number(b) - Number(a));

//Using reduce on object values

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function countAges(obj) {

  return Object.values(obj).reduce((accum, elem) => accum + elem, 0);

}

function minAge(obj) {
  let ageArr = Object.values(obj);
  return ageArr.sort((a, b) => a - b)[0];
}


let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrToObj(arr) {
  let newObj = {};

  arr.forEach((elem, indx) => {
    newObj[elem] = indx;
  });

  return newObj;
}

let munstersDescription = "The Munsters are creepy and spooky."

let newMD = munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}).join('');

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkForNum(arr, num) {
  return arr.includes(num);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.map(str => str.length)
    .filter(num => num % 2 !== 0);
}

let array = [3, 5, 7];

function sumOfSquares(arr) {
  return arr.reduce((accum, elem) => {
    return accum + (elem * elem);
  }, 0);
}

//

let myArray2 = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray2.length; i += 1) {
  for (let j = 0; j < myArray2[i].length; j += 1) {
    let num = myArray2[i][j];
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let newArr = myArray3.map(num => {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});


let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
  return arr.filter(value => {
    return Number.isInteger(value);
  });
}

//DON'T FORGET: functions and methods need return values

let integers = findIntegers(things);

let str = "hELLO THERE bob";

function switchCase(str) {

  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
}

function switchCase2(str) {
  let newStr = str.split('').map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join('');
  return newStr;
}


let str2 = 'bobobobobo';

function countChars(str, char) {
  let arr = str.split('').filter(elem => elem === char);
  return arr.length;
}

let str3 = 'hello there my name is Gordon';

function removeWhiteSpace(str) {
  let noWhiteSpaceArr = str.split('').filter(char => char !== ' ');
  return noWhiteSpaceArr;
}

function countChars2(str) {
  let arr = removeWhiteSpace(str);

  let obj = {};

  arr.forEach(char => {
    obj[char] = obj[char] || 0;
    obj[char] += 1;
  });

  return obj;
}
