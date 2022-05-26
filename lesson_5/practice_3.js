//Problem 7
//Final values of a and b

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

//Declare variable a and initialise with number value 2
//Declare variable b and initialise with array value
//Declare variable arr and initialise with array value
//Elements of arr array are variables [a] and [b]
//[a] is a primitive value => so value of a in arr is a copy of that value
//[b] is an object => so value of b in arr is a pointer to the same object

//Line 8 adds 2 to the value of a in arr, but does not affect the value of the
//a variable outside of arr => they happen to have the same value but do not
//share a common value.

//The final value of a is 2.

//Line 9 accesses the second element of the arr variable [b]
//Then accesses the first element of that array and reassigns its value
//It reduces its value by the value represented by a [2]

//Because arr and b point to the same object, changes to that object within arr
//are reflected in the b variable.

//The final value of b is [3, 8];