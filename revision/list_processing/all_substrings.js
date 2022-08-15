//See MD notes

/*
- Loop through string OR string arr
- Call leadingSubs function on the string
- On each iteration, extract substring from string starting from the
next index position (i.e. start at 0, then 1 etc)
*/

function leadingSubs(text) {

  return [...text].map((_, indx) => {
    return text.slice(0, indx + 1);
  });
}

//Using for loop
function substrings(text) {
  let resultsArr = [];

  for (let i = 0; i < text.length; i += 1) {
    let subStr = text.slice(i);
    resultsArr.push(leadingSubs(subStr));
  }
  return resultsArr.flat();
}

//Using map
//The new array length is determined using the triangular number sequence
//That captures the relationship between the length of the input text and
//the length of the output array
function substrings2(text) {
  let resultsArr = (new Array((text.length * (text.length + 1)) / 2)).fill('');

  return (resultsArr.map((_, indx) => {
    return leadingSubs(text.slice(indx));
  })).flat();
}

function substrings4(text) {
  return [...text].map((_, indx) => leadingSubs(text.slice(indx))).flat();
}

//LS solution

function substrings3(text) {
  let resultsArr = [];

  for (let i = 0; i < text.length; i += 1) {
    let substring = text.substring(i);
    resultsArr = resultsArr.concat(leadingSubs(substring));
    console.log(resultsArr);
  }
  return resultsArr;
}

//Creates empty array to hold results
//For loop:
//Substring created => extract from string argument starting at progressively
//later points in the index (i.e. 0, 1 etc)
//Results array is reassigned value of calling concat on resultsArr
//And combining it with calling the leadingSubs function on each substring
//That means that you don't have to use flat()
//Another way of using map

function substrings4(text) {
  return [...text].map((_, indx) => leadingSubs(text.slice(indx))).flat();
}

//Create array of individual chars of string
//Call map function
//Return in CBF: leadingSubs function -> as text,
//pass it sliced text (starting from indx 0, then 1 etc)
//The flatten

//Iteration 1: map takes [a] -> then leading subs is called on text sliced
//from index position of a
//Iteration 2: map takes [b] -> leading subs called on text sliced from indx
//position of b etc.

console.log(substrings4('abcdefg'));
