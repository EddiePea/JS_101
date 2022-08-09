//See MD notes

/*
- Transform str into array
- Create filtered, lowercase forward string:
  - Remove all non-alphanumeric chars
    - Is >= '0' && <= '9' ||
    - Is >= A && <= Z ||
    - Is >= 'a' && <= 'z'
  - Transform all chars to lowercase
  - Join to string
- Create filtered, lowercase backward string:
  - Same steps as above, but then reverse
  - Then join to string
- Compare forwards string to backwards string
*/

function isAlphanumeric(char) {
  return ((char === ' ') ||
    ((char >= '0') && (char <= '9')) ||
    ((char >= 'a') && (char <= 'z')));
}

function isPalindrome(str) {
  if ((str === '') || (str === ' ')) return false;

  let filteredArr = str.toLowerCase().split('').filter(char => isAlphanumeric(char));
  let filteredArrReversed = filteredArr.reverse();

  return !!(filteredArr.join('') === filteredArrReversed.join(''));
}

//TESTS
console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
console.log(isPalindrome(''));
console.log(isPalindrome(' '));
console.log(isPalindrome('$$$$'));
