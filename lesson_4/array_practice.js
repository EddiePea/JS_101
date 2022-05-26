let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flintstonesArr = Object.entries(flintstones);
let flintstonesObj = {};

flintstonesArr.forEach(keyValue => {
  let [ value, key ] = keyValue;
  flintstonesObj[key] = value;
});

//A simpler way of doing this is to take advantage of the fact that
//forEach takes 2 arguments (element and index)

let fStones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let fObj = {};

fStones.forEach((elem, index) => {
  fObj[elem] = index;
});

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


let ageValues = Object.values(ages);


let sumOfAges = ageValues.reduce((num1, num2) => {
  return num1 + num2;
}, 0);

console.log(sumOfAges);

let totalAges = 0;
// eslint-disable-next-line no-return-assign
Object.values(ages).forEach(age => totalAges += age);
console.log(totalAges);

/*
let sumOfAge = 0;

for (i = 0; i < ageValues.length; i += 1) {
  sumOfAge += ageValues[i];
}

console.log(sumOfAge);
*/

//Problem 10

let agesArr = Object.values(ages);
let minAge = agesArr[0];

for (let i = 0; i < agesArr.length; i += 1) {
  if (agesArr[i] < minAge) {
    minAge = agesArr[i];
  }
}

console.log(minAge);

agesArr.forEach(age => {
  if (age < minAge) {
    minAge = age;
  }
});

console.log(minAge);

//Simple way: use the Math.min function

console.log(Math.min(...agesArr));
//Here use use the spread operator to convert the array into a list of arguments
//Those arguments are passed to the Math.min function
//That function returns the minimum of the numbers passed to it as args

//Exercise 11

//Input: string
//Output: object
//Object keys: character (case sensitive)
//Object values: frequency of occurence in input string

//Requirements
//Ignore whitespaces
//Case sensitive keys

//1. Get array of string chars
//2. Take each element and see how many matching elements there are in the array
//3. Capture the number of matching elements for each char
// WATCH OUT for repeating elements in a loop
// WATCH OUT for whitespace
//4. Capture the value of the element
//5. Return each element only once with its corresponding repeat value

let statement = "The Flintstones Rock";
let statementArr = statement.split('').filter(char => char !== ' ');
// ['T', 'h', 'e', 'f', 'l' etc.]

let result = {};

statementArr.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);