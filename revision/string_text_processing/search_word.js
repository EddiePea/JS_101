//See MD notes

/*
- Convert text into array separated by whitespace
- Loop through array
  - Filter for word
  - Return filteredArr
- Return length of filteredArr
OR
- Create regex of word
- Call match on textString, pass in regex as argument
with global flag - returns an array
- Return length of array
*/

//Using filter
function searchWord(searchWord, text) {
  return text
    .split(' ')
    .filter(word => word.toLowerCase() === searchWord.toLowerCase())
    .length;
}

//Using regex
function searchWord2(searchWord, text) {
  if (!searchWord || !text) return 'Please enter valid arguments';

  let regex = new RegExp(`\\b${searchWord}\\b`, 'gmi');
  return text.match(regex).length || 0;
}

//TEST
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? qui';

console.log(searchWord2('qui', text));      // 4