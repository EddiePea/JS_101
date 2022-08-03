/* eslint-disable max-statements */
//See MD notes

/*
- Get string length
- If length < 1 -> default
- Otherwise:
   - log + plus [repeated - * (length + 2)]
   - log | plus [repeated whitespace * (length + 2)] plus |
   - log | plus whitespace plus TEXT plus whitespace plus |
   - log repeat of line 2
   - log repeat of line 1
*/

function logInBox(text) {
  let textLength = text.length;
  let boxLength = '+' + '-'.repeat(textLength + 2) + '+';
  let boxWidth = '|' + ' '.repeat(textLength + 2) + '|';
  let boxWidthPlusText = '|' + ' ' + text + ' ' + '|';

  console.log(boxLength);
  console.log(boxWidth);
  console.log(boxWidthPlusText);
  console.log(boxWidth);
  console.log(boxLength);
}


//TESTS
logInBox('hello there sailor');
logInBox('To boldly go where no one has gone before.');
logInBox('');

//Further exploration

function logInBoxCut(text, maxWidth) {
  let textLength = text.length;

  if (textLength > maxWidth) {
    text = text.slice(0, maxWidth);
    textLength = text.length;
  }

  let boxLength = '+' + '-'.repeat(textLength + 2) + '+';
  let boxWidth = '|' + ' '.repeat(textLength + 2) + '|';
  let boxWidthPlusText = '|' + ' ' + text + ' ' + '|';

  console.log(boxLength);
  console.log(boxWidth);
  console.log(boxWidthPlusText);
  console.log(boxWidth);
  console.log(boxLength);
}

logInBoxCut('hello there sailor', 5);

// eslint-disable-next-line max-statements
// eslint-disable-next-line max-lines-per-function
function logInBoxWrap(text, maxWidth = text.length) {
  let textLength = text.length;
  let width = Math.min((textLength + 2), (maxWidth + 1));

  let boxLength = `+${'-'.repeat(width)}+`;
  let boxWidth = `|${' '.repeat(width)}|`;
  let lineNums = Math.ceil(textLength / maxWidth);
  let remainingText;

  console.log(boxLength);
  console.log(boxWidth);

  if (lineNums === 1) {
    console.log(`| ${text} |`);

  } else {
    while (lineNums > 0) {
      remainingText = text.slice(maxWidth - 1);
      text = text.slice(0, (maxWidth - 1));
      let whiteSpace = ' '.repeat(maxWidth - (text.length + 1));
      console.log(`| ${text}${whiteSpace} |`);

      text = remainingText;
      lineNums -= 1;
    }
  }
  console.log(boxWidth);
  console.log(boxLength);
}

logInBoxWrap('hello there sailor', 10);
logInBoxWrap('There is a very big problem with this approach to coding. It is a bit messy really', 100);