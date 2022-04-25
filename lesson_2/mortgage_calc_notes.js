

//Check input is valid
let checkInput = input => {
  input = input.replaceAll(",", "").replaceAll("$", "");
  if (input[input.length - 1] === '%') {
    input = input.slice(0, -1);
  }
  return input.trimStart() === ''    ||
         Number.isNaN(Number(input)) ||
         Number(input) <= 0          ||
         Number(input) === Infinity;
};
