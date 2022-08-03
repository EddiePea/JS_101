//See MD notes

/*
- Loop
- SET counter to 1
- While counter <= num
  - Print whitespace padding (num - counter) + (star.repeat(counter))
  - Increment counter
*/

function triangle(sideLength) {

  for (let counter = 1; counter <= sideLength; counter += 1) {
    let star = '*'.repeat(counter);
    console.log(star.padStart(sideLength, ' '));
  }
}

triangle(5);
triangle(9);
triangle(0);

//LS solution

function triangle2(height) {
  let spaces = height - 1;
  let stars = 1;

  while (height < 0) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 1;
    height -= 1;
  }
}