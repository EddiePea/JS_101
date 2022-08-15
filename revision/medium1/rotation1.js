//See MD notes

/*
- Create guard clause:
  - If the argument is not an array -> return undefined
  - That should capture the situation where no arg is entered BUT check
- Make a copy of ARR
- Remove the first element of copyARR
- Add removed first element back to copyARR (at the end)
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return arr;

  let copyArr = [...arr];
  copyArr.push(copyArr.shift());
  console.log(copyArr);
}

//LS solution
function rotateArray2(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];

  return arr.slice(1).concat(arr[0]);
}

/*
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
*/

console.log(rotateArray([]));                       // []

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined

