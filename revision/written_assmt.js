let greeting = ["Hello"];

const test = arr => {
  arr = arr.push("World!");
  return arr;
};

console.log(test(greeting));
console.log(greeting);

//

let animal = "dog";

const speak = animal => {
  if (animal) {
    console.log("Bark");
  } else {
    console.log("Meow");
  }
};

speak();

//No argument passed => passes in undefined
//Undefined evaluates as falsy
//Animal => variable shadowing

let pets = ["dog", "fish", "parrot"];
let myPets = pets;
console.log(myPets === ["dog", "fish", "parrot"]);

//False printed
//Does non-strict equality change anything? No
//Object => have to be the exact same object to return true
//ID comparison, not individual value in the object comparison
//If myPets === pets// true

console.log([] == "");

//Evaluates as true
//With non-strict equality operator
//Values of diff types are coerced (different coercion depending on type)
//of operand
//Empty array coerced to empty string
//Then both coerced to zero?