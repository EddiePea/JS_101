//See MD notes

function utf(char = '') {
  const UTF_CAP_A = 65;
  const UTF_CAP_Z = 90;
  const UTF_LOWER_A = 97;
  const UTF_LOWER_Z = 122;

  let charCode = char.charCodeAt(0);

  return !!((charCode >= UTF_CAP_A && charCode <= UTF_CAP_Z) ||
   (charCode >= UTF_LOWER_A && charCode <= UTF_LOWER_Z));
}

function cleanUp(str) {
  let resultStr = '';

  for (let i = 0; i < str.length; i += 1) {

    if (utf(str[i])) {
      resultStr += str[i];

    } else if (resultStr[resultStr.length - 1] !== ' ') {
      resultStr += ' ';
    }
  }
  return resultStr;
}

console.log(cleanUp("---what's my +*& line?"));

//LS solution

function cleanUp2(text) {
  let cleanText = '';

  for (let i = 0; i < text.length; i += 1) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

function cleanUp3(text) {
  return text.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}