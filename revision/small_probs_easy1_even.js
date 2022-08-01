//See MD notes

for (let counter = 2; counter < 100; counter += 2) {
  console.log(counter);
}

//LS Solution

for (let counter = 1; counter < 100; counter += 1) {
  if (counter % 2 === 1) {
    continue;
  }
  console.log(counter);
}

