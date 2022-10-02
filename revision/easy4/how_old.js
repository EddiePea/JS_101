//See MD notes

/*
- Generate random num between 20 and 120:
  - Generate a random num between 0 and 1 (non-inclusive)
  - Multiply it by 1000 - to stand any chance of getting to 120
  - Round down
  - While num < 20 && > 120 -> keep doing it
- SET variable to NUM
- Print string to console inserting NUM
*/

function generateRandomNum() {
  return Math.floor(Math.random() * 121);
}
//If you multiply by 120, you will never get 120
//Math.random() generates a num between 0 and 1 (exclusive)
//Math.floor() will always round down e.g. 119.99999 to 119

function generateTeddyAge() {
  let age = generateRandomNum();

  while (age < 20) {
    age = generateRandomNum();
  }
  return age;
}

function printTeddyAge(age) {
  console.log(`Teddy is ${age} years old!`);
}

printTeddyAge(generateTeddyAge());

function generateRandomNum2() {
  return Math.ceil((Math.random() * 100) + 20);
}

console.log(`The random Num is ${generateRandomNum2()}`);

//LS solution

function randomNumBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumBetween2(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomNumBetween3(num1, num2) {
  let min = Math.min(num1, num2);
  let max = Math.max(num1, num2);

  return Math.ceil((Math.random() * (max - min)) + min);
}

console.log(randomNumBetween3(20, 120));
