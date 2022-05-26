//Using forEach output all vowels from the strings in the arrays
//Don't use a for or while loop

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(element => {
  let charactersArr = element.join('').split('');
  charactersArr.forEach(char => {
    if ('aeiou'.includes(char)) {
      console.log(char);
    }
  });
});

//Below: LS's suggested approach

let vowels = 'aeiou';

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (vowels.includes(char)) {
        console.log(char);
      }
    });
  });
});

//Called Object.values method, passing obj as argument
//This outputs an array of the values i.e. a nested array
// e.g. [['the', 'quick'], ['brown', 'fox']] etc.

//Call the forEach method on that returned array
//CBF takes parameter arr => each element (sub-array) of the array

//Call forEach method on each sub-array
//CBF takes word parameter => represents each element of each sub-array
//Call split method on word => dividing string into array of chars

//Call forEach method on array of chars
//CBF takes parameter char => each character of the array of chars

//If statement: truthy if the char is a vowel
//If truthy, then print char