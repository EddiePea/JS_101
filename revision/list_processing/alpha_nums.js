//See MD notes

/*
- Create object where: values = English names for
nums 0 - 19 and keys = corresponding numbers
- Create copy of ARR -> copyArr
- Loop through copyArray and sort it into order:
  - Access the value of each String version of the integers
  - Then sort into lexicographical order
- Return copyArr

*/

const WRITTEN_NUM_OBJ = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen'
};

const WRITTEN_NUM_ARR = ['zero', 'one', 'two', 'three', 'four', 'five', 'six','seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
  'seventeen', 'eighteen', 'nineteen'].sort();

function alphaSort(arr) {

  return arr.slice().sort((a, b) => {
    let firstWord = WRITTEN_NUM_OBJ[String(a)];
    let secondWord = WRITTEN_NUM_OBJ[String(b)];

    if (firstWord < secondWord) {
      return -1;
    } else if (firstWord > secondWord) {
      return 1;
    } else return 0;
  });
}

//LS solution

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphaSort3(arr) {
  return [...arr].sort(wordSort);
}

// eslint-disable-next-line max-len
console.log(alphaSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

//Sort can take a function as an arg
//Creates wordSort function -> takes 2 args
//Returns 1, -1 or 0 to sort depending on the value of the num
//Array destructuring creates copy of arr