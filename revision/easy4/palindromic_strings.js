//See MD notes

//LS solution

function isPal(str) {
  return str === str.split('').reverse().join('');
}
//This was all unnecessary in the end...
//REMEMBER: palindrome => whole str forward = whole str backwards
function isPalindrome(str) {
  if ((str === '') || (str === ' ')) return false;

  let splitPoint = Math.floor(str.length / 2);
  let firstHalf;

  if (str.length % 2 === 0) {
    firstHalf = str.slice(0, splitPoint);
  } else {
    firstHalf = str.slice(0, (splitPoint + 1));
  }

  let secondHalf = (str.slice(splitPoint)).split('').reverse().join('');

  return !!(firstHalf === secondHalf);
}

//TESTS
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false
console.log(isPalindrome("madam i'm adam"));      // false
console.log(isPalindrome('356653'));              // true
console.log(isPalindrome(''));                   // false
console.log(isPalindrome(' '));                  //false
console.log(isPalindrome('$$$$'));               // true
