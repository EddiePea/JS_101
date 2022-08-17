//See MD notes

function longestSentence(text) {
  let wordsArr = text.split(' ');
  let longestSentence = [];
  let currentSentence = [];

  for (let indx = 0; indx < wordsArr.length; indx += 1) {
    currentSentence.push(wordsArr[indx]);

    if (isSentenceEnd(wordsArr[indx])) {
      if (currentSentence.length >= longestSentence.length) {
        longestSentence = currentSentence.slice();
      }
      currentSentence = [];
    }
  }
  console.log(`${longestSentence.join(' ')}\n\nThe longest sentence has ${longestSentence.length} words`);
}

function isSentenceEnd(word) {
  return !!((word.endsWith('!') || word.endsWith('.') || word.endsWith('?')));
}

function longestParagraph(text) {
  let paragraphs = text.split(/\n/);

  let longest = paragraphs.reduce((longest, paragraph) => {
    let length = paragraph.split(' ').length;

    if (length > longest.length) {
      return { text: paragraph, length: length};
    } else {
      return longest;
    }
  },
  { text: "", length: 0 }
  );
  console.log(longest.text + "\n");
  console.log('The longest paragraph has ' + longest.length + ' words.\n');
}


//text.match(/\w.*?[\n]|[/./z]/g);

//LS solution
function longestSentence2(text) {
  let sentences = text.split(/\w.*?[.!?]/g);

  let longest = sentences.reduce((longest, sentence) => {
    let length = sentence.split(/\s/).length;

    if (length > longest.length) {
      return { text: sentence, length: length};
    } else {
      return longest;
    }
  },
  { text: "", length: 0 }
  );

  console.log(longest.text + "\n");
  console.log('The longest sentence has ' + longest.length + ' words.\n');
}


//Calling match on text with the regex used creates an array of the cmoplete
//sentences (i.e. ending in ? ! etc.)
//It doesn't capture sentences that don't end in punctuation at the end of
//the string

//Then create 'longest' variable initialised with an object
//Value is return value of calling reduce on the sentences array
//The accumulator (longest) is an object with a text and legnth prop
//Length is the length of the sentence (split at whitespace to get words)
//If length is greater than the length property of the acc
//Then reduce returns an array with the sentence and length populating
//the accum object
//Otherwise it returns the longest object (i.e. current acc)


//TESTS

longestParagraph("Where do you think you're going?\n What's up,\n Doc? Hello there Mum is everything ok who knows I don't know what to do...");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestParagraph("To be or not to be! Is\n that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.

/*

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

*/
