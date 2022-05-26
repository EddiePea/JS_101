//Problem 4
//Change value 3 to 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;

let obj1 = { first: [1, 2, [3]] };
obj1['first'][2][0] = 4;

let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;

//Problem 5
//Compute and display total age of male family members

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

//Select munsters with gender value 'male'
//Extract age value of those munsters
//Sum age values
//Print total age value

let nameArray = Object.keys(munsters);
let totalMaleAge = 0;

nameArray.forEach(name => {
  if (munsters[name].gender === 'male') {
    totalMaleAge += munsters[name].age;
  }
});

console.log(totalMaleAge);

let totalMaleAge2 = 0;

for (let member in munsters) {
  if (munsters[member]['gender'] === 'male') {
    totalMaleAge2 += munsters[member].age;
  }
}

console.log(totalMaleAge2);

//Problem 6
//Print name, age and gender of each family member
//Use string substitution

//Loop through object
//Extract name, age and gender
//Print

for (let person in munsters) {
  console.log(`${person} is a ${munsters[person].age}-year-old ${munsters[person].gender}`);
}

Object.entries(munsters).forEach(entry => {
  let name = entry[0];
  let age = entry[1]['age'];
  let gender = entry[1]['gender'];
  console.log(`${name} is a ${age}-year-old ${gender}`);
});


