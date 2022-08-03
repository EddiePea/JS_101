//See MD notes

function xor(arg1, arg2) {
  return !!((arg1 && arg2) || !(arg1 && arg2));
}

//TESTS
console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/*
**ALGORITHM**
- IF (arg1 and arg2 = true || arg1 and arg2 = false)
  - return Boolean false
- ELSE
  - return Boolean true
  */

//LS version

function xor2(arg1, arg2) {
  if ((arg1 && !arg2) || (arg2 && !arg1)) {
    return true;
  }
  return false;
}

function xor3(arg1, arg2) {
  return !!((arg1 && !arg2) || (arg1 && !arg2));
}