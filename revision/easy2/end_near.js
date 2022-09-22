//See MD notes

function penultimate(str) {
  let strArr = str.split(' ');
  return strArr[strArr.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true


function middleWord(str) {
  let strArr = str.split(' ');
  let arrLength = strArr.length;

  switch (arrLength) {
    case 0:
      return '';
    case 1:
      return strArr[0];
    case 2:
      return strArr[1];
    default:
      return strArr[Math.floor(arrLength / 2)];
  }
}

console.log(middleWord('hello madam I am adam')); // 'I'
console.log(middleWord('hello bob')); // 'bob'
console.log(middleWord('hello')); // 'hello'
console.log(middleWord('')); // ''
console.log(middleWord(' ')); // ''
console.log(middleWord('there we go then')); // 'go'
