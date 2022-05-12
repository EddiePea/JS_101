function printIndentedString(str) {
  for (let i = 0; i <= 10; i += 1) {
    console.log(str.padStart(str.length + i));
  }
}

printIndentedString('The Flintstones Rock');

function printIndentedString2(str) {
  for (let i = 0; i <= 10; i += 1) {
    console.log((' ').repeat(i) + str);
  }
}

printIndentedString2('The Flintstones Rock');

let munstersDescription = "The Munsters are creepy and spooky.";

