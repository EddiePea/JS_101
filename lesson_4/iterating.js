/*while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('ooo');
    break;
  }
}

*/

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produceList, produceCriterion) {
  let selectedFruits = {};
  let produceKeys = Object.keys(produceList);
  // Produces array of keys
  // ['apple', 'carrot', 'pear', 'broccoli']
  for (let counter = 0; counter < produceKeys.length; counter += 1) {
    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];

    if (currentValue === produceCriterion) {
      selectedFruits[currentKey] = currentValue;
      //Don't try to add to the object using +=
    }
  }
  return selectedFruits;
}

console.log(selectFruit(produce, 'Vegetable'));
//Adding the second criterion argument helps to create a generic function
//Rather than hard-coding the selection criterion that we want each time


let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNums(nums) {
  let counter = 0;

  while (counter < nums.length) {
    nums[counter] *= 2;
    counter += 1;
  }
  return nums;
}

function doubleAtOddIndex(nums) {
  let doubledNums = [];

  for (let counter = 0; counter < nums.length; counter += 1) {
    let currentNum = nums[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNum * 2);
    } else {
      doubledNums.push(currentNum);
    }
  }
  return doubledNums;
}

function multiplyNums(nums, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < nums.length; counter += 1) {
    let currentNum = nums[counter];
    multipliedNums.push(currentNum * multiplier);
  }
  return multipliedNums;
}

console.log(multiplyNums(myNumbers, 3));

