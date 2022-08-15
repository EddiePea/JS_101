//See MD notes

/*
- Filter array for items with relevant ID
- Set total variable to 0
- Loop over filteredArr
  - If obj.movement === 'in'
    - Increase total by value of obj.quantity;
  - If obj.movement === 'out'
    - Reduce total by value of obj.quantity
- Evaluate whether total > 0:
  - If yes: return true
  - If no: return false
*/

function transactionsFor(idNum, transArr) {
  return transArr.filter(obj => obj.id === idNum);
}

//Using forEach
function isItemAvailable(idNum, transArr) {
  let filteredArr = transactionsFor(idNum, transArr);
  let totalItems = 0;

  filteredArr.forEach(obj => {
    obj.movement === 'in' ? totalItems += obj.quantity : totalItems -= obj.quantity;
  });
  return totalItems > 0;
}

//Using map and reduce
function isItemAvailable2(idNum, transArr) {
  let filteredArr = transactionsFor(idNum, transArr);

  let total = filteredArr.map(obj => {
    return obj.movement === 'out' ? obj.quantity * -1 : obj.quantity;
  }).reduce((num1, num2) => num1 + num2);

  return total > 0;
}

//Using reduce
function isItemAvailable3(idNum, transArr) {

  let quantity = transactionsFor(idNum, transArr)
    .reduce((sum, transaction) => {
      return transaction.movement === 'in' ? sum + transaction.quantity : sum - transaction.quantity;
    }, 0);

  return quantity > 0;
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true