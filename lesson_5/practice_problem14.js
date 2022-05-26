//Return array containing (i) colors of fruit and (ii) size of veg
//Sizes uppercase
//Colors capitalized

//INPUT: Object with key-value pairs
//L1: parent object
//L2: keys (fruits)
//L3: values (objects)
//L4: key-value pairs (strings or arrays)
//L5: values (string elements of arrays)

//OUTPUT: multi-dimensional array
//L1: parent array
//L2: array or string
//L3: string elements of arrays

//STEPS:
//Iterate through each L2 element
//[for...in]
//Select colors of fruit and size of vegetables
//Access value (at L4) associated with colors key and size key (at L3)
//Push to empty array
//Iterate through each L4 colors array and capitalise L5 values
//Access L4 strings and change to uppercase
//2 map functions => layer 1 for strings, layer 2 for strings within arrs
//Return array

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};


let arr = [];

for (let key in obj) {

  if (obj[key]['type'] === 'fruit') {
    arr.push(obj[key]['colors']);
  } else if (obj[key]['type'] === 'vegetable') {
    arr.push(obj[key]['size']);
  }
}

let newArr = arr.map(element => {
  if (typeof element === 'string') {
    return element.toUpperCase();
  } else {
    return element.map(word => {
      return word[0].toUpperCase() + word.substring(1);
    });
  }
});

console.log(newArr);

//LS's solution

let capitalize = word => word[0].toUpperCase() + word.slice(1);

let newObj = Object.values(obj).map(attributes => {
  if (attributes['type'] === 'fruit') {
    return attributes['colors'].map(char => capitalize(char));
  } else {
    return attributes['size'].toUpperCase();
  }
});

console.log(newObj);

//Object.values creates an array of the values (objects here)
//map iterates through each object element and accesses each color and size