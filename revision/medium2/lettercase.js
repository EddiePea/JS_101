//See MD notes

/*
- GET length of STR
- SET object with 3 properties set to strings with value 0.00 (2dp) (resultsObj)

- Loop through STR
  - If char is lowercase letter -> increase value of LC property
  by relevant percentage
    - First convert existing property to a number
    - Then add (1 divided by charsArr.length (*100)) to get the total percentage
    - Ensure output is to 2 dp
    - Convert output to string
  - If char is uppercase letter -> do same for UC property
  - If char is neither -> do the same for neither property
- Return results Obj
*/

//First go -> using for loop
function letterPercentages(text) {
  let length = text.length;
  let resultsObj = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" };

  for (let i = 0; i < length; i += 1) {

    if ((/[a-z]/).test(text[i])) {
      resultsObj.lowercase = updatePercentages(resultsObj.lowercase, length);

    } else if ((/[A-Z]/).test(text[i])) {
      resultsObj.uppercase = updatePercentages(resultsObj.uppercase, length);
    }
  }
  resultsObj.neither = String(100 -
    (Number(resultsObj.uppercase) + Number(resultsObj.lowercase)));

  return resultsObj;
}

function updatePercentages(objectValue, length) {
  return (Number(objectValue) + ((1 / length) * 100)).toFixed(2);
}

//Using forEach
function letterPercentages2(text) {
  let length = text.length;
  let resultsObj = { lowercase: "0.00", uppercase: "0.00", neither: "0.00" };

  [...text].forEach(char => {
    if ((/[a-z]/).test(char)) {
      resultsObj.lowercase = updatePercentages(resultsObj.lowercase, length);

    } else if ((/[A-Z]/).test(char)) {
      resultsObj.uppercase = updatePercentages(resultsObj.uppercase, length);
    }
  });

  resultsObj.neither = String(100 -
    (Number(resultsObj.uppercase) + Number(resultsObj.lowercase)));

  return resultsObj;
}

//Get numbers then work out percentages
function letterPercentages3(text) {
  let length = text.length;
  let resultsObj = { lowercase: 0, uppercase: 0, neither: 0 };

  [...text].forEach(char => {

    if (char >= 'a' && char <= 'z') {
      resultsObj.lowercase += 1;

    } else if (char >= 'A' && char <= 'Z') {
      resultsObj.uppercase += 1;

    } else {
      resultsObj.neither += 1;
    }
  });
  resultsObj.lowercase = computePercentages(resultsObj.lowercase, length);
  resultsObj.uppercase = computePercentages(resultsObj.uppercase, length);
  resultsObj.neither = computePercentages(resultsObj.neither, length);

  return resultsObj;
}

function computePercentages(objectValue, length) {
  return ((objectValue / length) * 100).toFixed(2);
}

//LS solution 1

function letterPercentages4(text) {
  let count = text.length;

  return {
    lowercase: (((text.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((text.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((text.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2)
  };
}

//Get length of text
//Return an object
//lc key has return value of ->
//Creating an array of letters from the string that match the regex a-z
//Getting the length of that array OR of an empty array (if no matches)
//Dividing length of array (i.e. how many chars) by total num of chars
//Multiplying by 100 to get percentage
//Taking 2 fixed dp of that num
//Repeat for UC and neither (negating a-z and applying i flag)

//LS solution 2
function letterPercentages5(text) {
  let count = text.length;

  function percentage(regex) {
    let matchingChars = text.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }
  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither: percentage(/[^a-z]/gi)
  };
}

//Get total length of string
//Create function which takes a regex pattern as an argument
//Create matchingChars variable initialised with return value of calling
//match method on the input string and passing it the regex pattern
//This returns an array of all the matching parts of the string OR an
//Empty array if there are none
//Then this returns the percentage -> takes the matchingChars variable
//Divides by total length of string, multiplies by 100, gets 2dp
//Then returns object where properties => return values of calling
//the percentage function on certain regex patterns

//TESTS
console.log(letterPercentages3('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages3('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages3('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }