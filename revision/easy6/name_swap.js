//See MD notes

/*
- Convert string to array
  - Split words where whitespace occurs
- Reverse the array
- Convert array to string
  - Join array - adding ', ' as separator
*/

function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

console.log(swapName('Eddie Pea'));

//Refactor to include middle names

function swapName2(name) {
  let nameArr = name.split(' ');
  let lastName = nameArr.slice(-1) + ', ';
  return lastName + nameArr.slice(0, -1).join(' ');
}

//Refactored to use pop
function swapNames3(name) {
  let nameArr = name.split(' ');
  return nameArr.pop() + ', ' + nameArr.join(' ');
}

console.log(swapNames3('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"