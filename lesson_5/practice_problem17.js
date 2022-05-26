//UUID = identifier used to uniquely identify items
//Randomisation helps to create unique identifiers
//32 hexadecimal chars (0-9 and a-f)
//In a string
//5 sections: 8-4-4-4-12

//Write function
//No arguments
//Returns string containing a UUID

//INPUTS: none

//OUTPUTS: string containing UUID

//STEPS:
//Generate random number between 1 and 32 (inc)
//Each num corresponds to hex chars
//Output 1 string of 8 random chars, one of 4 etc.
//Join random strings separated by dash

// eslint-disable-next-line max-lines-per-function
function idGenerator() {
  let hexChar = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  function createArr(repeat) {
    let arr = [];
    for (let i = 0; i < repeat; i++) {
      let randomNum = Math.floor(Math.random() * hexChar.length);
      arr.push(hexChar[randomNum]);
    }
    return arr;
  }

  let str1 = createArr(8).join('');
  let str2 = createArr(4).join('');
  let str3 = createArr(4).join('');
  let str4 = createArr(4).join('');
  let str5 = createArr(12).join('');

  return str1.concat('-', str2, '-', str3, '-', str4, '-', str5);
}

console.log(idGenerator());


//LS solution

function generateUUID() {

  let chars = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let sections = [8, 4, 4, 4, 12];

  let uuid = '';

  sections.forEach((section, sectionIndex) => {
    for (let i = 1; i <= section; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      uuid += chars[randomIndex];
    }
    if (sectionIndex < sections.length - 1) {
      uuid += '-';
    //This adds a dash after each iteration (except the last one)
    }
  });
  return uuid;
}


console.log(generateUUID());
//ForEach method takes 2 parameters: each element of sections and its index num
//