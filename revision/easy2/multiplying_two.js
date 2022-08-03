//See MD notes

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 5) === 15);

//LS solution

let multiply2 = (num1, num2) => num1 * num2;

console.log(multiply2(10, 20));

//Squaring an argument

function square(num) {
  return multiply(num, num);
}

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true