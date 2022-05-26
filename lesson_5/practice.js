//Problem 1
//Order the array by descending numerical value

let arr = ['10', '11', '9', '7', '8'];

arr.sort((a, b) => Number(b) - Number(a));
//Omitting the Number func would get the same result
//The '-' operator coerces the strings to numbers implicity
//Not encouraged: too unclear

//Problem 2
//Order the array of objects based on year of publication (earliest to latest)

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sortedBooks = books.sort((a, b) => {
  return Number(a.published) - Number(b.published);
});


//Problem 3
//For each collection objects, access letter 'g'


let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
console.log(arr1[2][1][3]);

let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
console.log(arr2[1]['third'][0]);

let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
console.log(arr3[2]['third'][0][0]);
//Watch out here: the value is an array, so 'ghi' is a string element
//in the array so it needs to be accessed separately

let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
console.log(obj1['b'][1]);

let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
console.log(Object.keys(obj2.third)[0]);
//Careful here: remember to get an array of the nested object's keys
//Then access the elements of that array
