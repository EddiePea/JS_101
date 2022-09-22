function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range2(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range2(5));