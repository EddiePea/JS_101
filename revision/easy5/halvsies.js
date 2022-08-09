//See MD notes

function halvsies(arr) {
  let splitPoint = Math.ceil(arr.length / 2);
  let subArr1 = arr.slice(0, splitPoint);
  let subArr2 = arr.slice(splitPoint);

  return [subArr1, subArr2];
}

//TESTS
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]