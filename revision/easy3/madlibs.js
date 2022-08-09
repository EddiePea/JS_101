/* eslint-disable max-statements */
//See MD notes

/*
- GET user input: (maybe in separate functions to get separate return values)
  - Validate input
    - IF whitespace -> invalid
    - IF (coerced to number) typeof === number (invalid)
  - Ask for noun
  - Ask for verb
  - Ask for adjective
  - Ask for adverb

- Create template literals with appropriate blanks for each kind of word
- Print template literals
*/

const READLINE = require('readline-sync');

function validateInput(input) {
  return !!((input.length === 0) || ((typeof Number(input) === 'number') && !isNaN(input)));
}

function getIndefArt(inputType) {
  let indefArticle;

  if ('aeiou'.includes(inputType[0])) {
    indefArticle = 'an';

  } else {
    indefArticle = 'a';
  }
  return indefArticle;
}

function getInput(inputType) {
  let input = (READLINE.question(`Please enter ${getIndefArt(inputType)} ${inputType}:\n`)).toLowerCase();

  while (validateInput(input)) {
    input = (READLINE.question(`Please enter a valid ${inputType}:\n`)).toLowerCase();
  }
  return input;
}

function doesVerbNeedS(verb, text) {
  let textPreVerb = text.slice(0, text.indexOf(verb));

  return !((textPreVerb.includes('you ') ||
   textPreVerb.includes('I') ||
   textPreVerb.includes('we') ||
   textPreVerb.includes('they')) ||
   textPreVerb.includes('to '));
}

function changeVerbEndings(verb, text) {
  if (verb.endsWith('ss') && doesVerbNeedS(verb,text)) {
    verb += 'es';

  } else if ((!verb.endsWith('s')) && doesVerbNeedS(verb, text)) {
    verb += 's';

  } else if (verb.endsWith('sses') && !doesVerbNeedS(verb, text)) {
    verb = verb.slice(0, verb.length - 2);

  } else if (((!verb.endsWith('ss')) && verb.endsWith('s')) && (!verb.endsWith('sses'))) {
    verb = verb.slice(0, verb.length - 1);
  }
  return verb;
}

function printSentences() {
  let noun = getInput('noun');
  let verb = getInput('verb');
  let adjective = getInput('adjective');
  let adverb = getInput('adverb');

  let text1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}?`;
  let text2 = `The ${adjective} ${noun} ${verb} ${adverb} over the lazy ${noun}`;
  let text3 = `The ${noun} ${verb} ${adverb} up ${adjective} Joe's turtle`;

  let amendedVerb1 = changeVerbEndings(verb, text1);
  text1 = `Do you ${amendedVerb1} your ${adjective} ${noun} ${adverb}?`;
  console.log(text1);

  let amendedVerb2 = changeVerbEndings(verb, text2);
  text2 = `The ${adjective} ${noun} ${amendedVerb2} ${adverb} over the lazy ${noun}`;
  console.log(text2);

  let amendedVerb3 = changeVerbEndings(verb, text3);
  text3 = `The ${noun} ${amendedVerb3} ${adverb} up ${adjective} Joe's turtle`;
  console.log(text3);
}

printSentences();

