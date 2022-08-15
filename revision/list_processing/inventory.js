//See MD notes

/*
- Declare function with 2 params
  - id param (idNum)
  - transactions param (transArr)
- Loop through transArr
- Filter for transArr elements that contain property ['id'] with value idNum
- Return filteredArr
*/

function transactionsFor(idNum, transArr) {
  return transArr.filter(obj => obj.id === idNum);
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]