//See MD notes

function shortLongShort(str1, str2) {
  let shortStr;
  let longStr;

  if (str1.length > str2.length) {
    shortStr = str2;
    longStr = str1;

  } else {
    shortStr = str1;
    longStr = str2;
  }

  return shortStr.concat(longStr, shortStr);
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"
shortLongShort('hi there', 'hi');   // 'hihi therehi'

//LS solution


function shortLongShort2(string1, string2) {

  if (string1.length > string2.length) {
    return string2 + string1 + string2;

  } else {
    return string1 + string2 + string1;
  }
}

