//See MD notes

function utf16Value(str) {
  return str.split('').reduce((accum, value) => {
    return accum + value.charCodeAt();
  }, 0);
}


//LS solution

function utf16Value2(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i += 1) {
    sum += str.charCodeAt(i);
  }
  return sum;
}

//TESTS

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811