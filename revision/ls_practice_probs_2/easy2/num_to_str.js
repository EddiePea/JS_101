/*
INSTRUCTIONS/RULES:
- Arg: number (num)
- Return: string version of num
- Not use built in methods

ASSUMPTIONS:
- No need to validate
- Number won't have positive or negative signs

INPUT: number

OUTPUT: string

EXAMPLES:

DATA STRUCTURE:
- Array -> use stringified index nums (i.e. the keys of the array)

ALGO:
- number -> string (num)
- Set array of nums from 0 to 9
- Set array of string versions of numsArr -> use for in loop
-> get string indices
- Transform numsArr -> nestedArr each subArr: [originalNum, stringsArr[indx]]

- Get each digit of num in turn by dividing by 10 and taking the remainder
 e.g. 4321 / 10 -> 432.1 -> % 10 -> (.1) -> * 10 -> 1
 next loop num = 432 (round down using Math.floor) repeat -> 2
- Add to arr

- Loop through arr -> transform
  - For each num:
    - Filter nestedArr for subArr where elem [0] === num
    - return subArr[1]

- Return joined arr

*/

function createNestedArr() {
  let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let stringsArr = Object.keys(numArr);

  return numArr.map((num, indx) => {
    return [num, stringsArr[indx]];
  });
}

function createDigitsArr(num) {
  let digitsArr = [];

  if (num === 0) {
    digitsArr.push(num);
  }

  while (num > 0) {
    digitsArr.push(num % 10);
    num = Math.floor(num / 10);
  }

  return digitsArr.reverse();
}

function integerToString(num) {
  let nestedArr = createNestedArr();
  let digitsArr = createDigitsArr(num);

  digitsArr = digitsArr.map(num => {
    let filteredArr = nestedArr.filter(subArr => {
      return subArr[0] === num;
    });
    return filteredArr[0][1];
  });

  return digitsArr.join('');
}

console.log(integerToString(4321));

/*
function integerToString(num) {
  let nestedArr = createNestedArr();

}
*/
//integerToString(4321);