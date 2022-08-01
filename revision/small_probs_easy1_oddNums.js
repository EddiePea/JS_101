//SEE MD NOTES

let counter = 0;

while (counter < 100) {
  if (counter % 2 === 1) {
    console.log(counter);
  }
  counter += 1;
}

//LS SOLUTION

for (let counter = 1; counter < 100; counter += 2) {
  console.log(counter);
}

//ADDITIONAL SOLUTION

function printOddNums(numLimit) {
  let counter = 1;

  do {
    console.log(counter);
    counter += 2;
  } while (counter < numLimit);

}

printOddNums(50);


function printOddNums2(numLimit) {
  for (let counter = 1; counter < numLimit; counter += 2) {
    console.log(counter);
  }
}

printOddNums2(40);