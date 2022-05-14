function printIndentedString(str) {
  for (let i = 0; i <= 10; i += 1) {
    console.log(str.padStart(str.length + i));
  }
}

function printIndentedString2(str) {
  for (let i = 0; i <= 10; i += 1) {
    console.log((' ').repeat(i) + str);
  }
}

let munsters = "The Munsters are creepy and spooky.";

/*
If a given letter is equal to a given letter to uppercase, that
is truthy so the given letter is printed to lowercase.

Otherwise, if not (i.e. if the letter is actually lowercase), then
print it to uppercase.

*/

function switchCase(str) {
  str = str.slice();
  for (let i = 0; i <= str.length; i += 1) {
    if (str[i] === ((str[i]).toUpperCase())) {
      console.log(str[i]);
    }
  }
}

let arr = munsters.split('');
console.log(arr.join(' '));

console.log(arr.map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else {
    return char.toUpperCase();
  }
}));


function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function factors2(num) {
  let div = num;
  let factors = [];

  while (div > 0) {
    if (num % div === 0) {
      factors.push(div);
    }
    div -= 1;
  }
  return factors;
}


function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}


let buffer = [1,2,3,4,5,5,7,8,8];
