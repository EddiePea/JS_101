//See MD notes

/*
- Loop through L1 array
- SET 'fruit', 'num' variables which correspond to the 2 L3 elements
- In place of each L2 subArr return fruit variable repeated num times
*/

//Using flatMap
function buyFruit(list) {
  return list.flatMap(subArr => {
    let [ fruit, quantity ] = subArr;
    return (new Array(quantity).fill(fruit));
  });
}

//Using for loop
function buyFruit2(list) {
  let resultsArr = [];

  for (let i = 0; i < list.length; i++) {
    let [ fruit, quantity ] = list[i];

    while (quantity > 0) {
      resultsArr.push(fruit);
      quantity -= 1;
    }
  }
  return resultsArr;
}

//Using forEach
function buyFruit3(list) {
  let resultsArr = [];

  list.forEach(subArr => {
    let [ fruit, quantity ] = subArr;

    while (quantity > 0) {
      resultsArr.push(fruit);
      quantity -= 1;
    }
  });
  return resultsArr;
}

//TESTS
console.log(buyFruit3([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"])

//LS solution

function buyFruit4(list) {
  return list.map(fruit => repeat(fruit)).
    reduce((groceryList, fruit) => groceryList.concat(fruit));
}

//Calls map method on array argument
//Map function takes each subArray and calls the repeat function on it
//Repeat function is passed the subArr as an arg
//This function call produces subarrays filled with the relevant fruit
//Quantity num of times
//The reduce method is then called on the resulting array of subarrs
//The reduce method CBF involves calling the concat method on the grocery
//list parameter (i.e. first value, then accumulator), and adding
//each subsequent subarray to it

function repeat(fruitAndQuantity) {
  let result = [];
  let fruit = fruitAndQuantity[0];
  let quantity = fruitAndQuantity[1];

  for (let num = 0; num < quantity; num += 1) {
    result.push(fruit);
  }
  return result;
}

//Declares result variable and initializes it with empty array
//Declares fruit varaible and initializes it with first element of
//array arg
//Declares quantity varaible and initializes it with second elment
//of array arg
//Creates for loop -> continues to loop until num (starting at 0) reaches
//the size of the quantity variable
//The fruit type is added to the result empty variable Quantity num of times
//Filled result array returned