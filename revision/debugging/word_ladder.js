/* eslint-disable no-unexpected-multiline */
let ladder = '';

['', 2, 3, 4].forEach(word => {
  if (ladder !== '') {
    ladder += '-';
  }
  ladder += word;
});

console.log(ladder);  // expect: head-heal-teal-tell-tall-tail

//['head', 'heal', 'teal', 'tell', 'tall', 'tail']