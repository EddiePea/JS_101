//See MD notes

function multisum(num) {
  let sum = 0;

  for (let counter = 1; counter <= num; counter += 1) {
    if ((counter % 3 === 0) || (counter % 5 === 0)) {
      sum += counter;
    }
  }
  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

//LS solution
//Extra helper function to determine if a num is a multiple

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum2(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}