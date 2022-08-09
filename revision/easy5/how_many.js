//See MD notes

/*
- Set resultsObj
- Loop through array
- Add element to resultsObj -> element as key, num of occurences as value
  - If element is already in resultsObj -> element += 1; otherwise element = 1
- Loop through resultsObj and print key + => + value
*/

function countOccurrences(arr) {
  let resultsObj = {};
  arr.forEach(elem => {
    // eslint-disable-next-line no-unused-expressions
    (resultsObj[elem] += 1) || (resultsObj[elem] = 1);
  });
  for (let key in resultsObj) {
    console.log(`${key} => ${resultsObj[key]}`);
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);

function countOccurrences2(arr) {
  let resultsObj = {};

  arr.forEach(elem => {
    if (resultsObj[elem]) {
      resultsObj[elem] += 1;
    } else {
      resultsObj[elem] = 1;
    }
  });
  for (let key in resultsObj) {
    console.log(`${key} => ${resultsObj[key]}`);
  }
}

countOccurrences2(vehicles);