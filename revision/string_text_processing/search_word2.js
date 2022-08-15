//See MD notes

/*
**ALGORITHM**
- Search for case insensitive searchWord -> take whitespace into account
- Replace with capitalised searchWord plus ** and ** around it
- Return new string

OR
- Convert string into an array of words
- Loop through array of words
  - If word does not match search word -> return word
  - Otherwise return **[word.toUpperCase()]**
- Join transformed wordsArr
*/

//Using filter
function searchWord(searchWord, text) {
  return text.split(' ').map(word => {
    return (word.toLowerCase() === searchWord.toLowerCase()) ?
      `**${word.toUpperCase()}**` : word;
  }).join(' ');
}

//Using regex
function searchWord2(searchWord, text) {
  if (!searchWord || !text) return '';

  let regex = new RegExp(`\\b${searchWord}\\b`, 'gmi');
  return text.replace(regex, `**${searchWord.toUpperCase()}**`);
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

//console.log(searchWord2('sed', text));
console.log(searchWord2());
// returns
// eslint-disable-next-line max-len
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"