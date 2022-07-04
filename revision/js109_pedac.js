
function longestConsec(arr, int) {

  if (arr.Length === 0 ||
      int > arr.Length ||
      int <= 0) {
    return "";

  } else {

    let combinedArr = [];

    arr.forEach((_, indx) => {
      let joinedStr = arr.slice(indx, (indx + int)).join('');
      combinedArr.push(joinedStr);
    });

    let sortedArr = combinedArr.sort((a, b) => {
      return b.length - a.length;
    });

    return sortedArr[0];
  }
}

let testArr = ["zone", "abigail", "theta", "form", "libe", "zas"];
let testArr2 = ["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"];
let testArr3 = [];
let testArr4 = ["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"];
let testArr5 = ["zone", "abigail", "theta", "form", "libe", "zas"];

console.log(longestConsec(testArr5, -2));