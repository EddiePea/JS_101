//See MD notes

/*
- Create an array of the 3 args (arr)
- Put arr into numerical order -> smallest to largest

- Create series of conditionals
  - Check for invalid triangles:
    - If any arr element <= 0 -> return invalid
    - If arr[0] + arr[1] <= arr[3] -> return invalid
  - Check equi:
    - If arr[0] equals arr[1] and arr[2] -> return equilateral
  - Check scalene:
    - If arr[0] is not equal to arr[1] or arr[2]
    - AND arr[1] is not equal to arr[2]
    - Return scalene
  - Otherwise return isos
*/

//First go with different triangle functions
function triangle(side1, side2, side3) {
  let sidesArr = [ side1, side2, side3 ].sort((a, b) => a - b);

  switch (true) {
    case (invalidTriangle(sidesArr)): return 'invalid';
    case (isEquilateral(sidesArr)): return 'equilateral';
    case (isIsoceles(sidesArr)): return 'isoceles';
    default: return 'scalene';
  }
}

function isEquilateral(sidesArr) {
  return sidesArr.every(side => side === sidesArr[0]);
}

function isIsoceles(sidesArr) {
  return ((sidesArr[0] === sidesArr[1]) || sidesArr[0] === sidesArr[2]
  || sidesArr[1] === sidesArr[2]);
}

//Second attempt with a combined triangle type function
function triangle2(side1, side2, side3) {
  let sidesArr = [ side1, side2, side3 ].sort((a, b) => a - b);

  if (invalidTriangle(sidesArr)) return 'invalid';
  return triangleType(sidesArr);
}


function triangleType(sidesArr) {
  let [ short, middle, long ] = sidesArr;
  if (sidesArr.every (side => side === short)) {
    return 'equilateral';

  } else if ((short === middle || short === long
    || middle === long)) {
    return 'isosceles';

  } else return 'scalene';
}

function invalidTriangle(sidesArr) {
  let [ short, middle, long ] = sidesArr;
  return !!((short === 0) || ((short + middle) <= long));
}

//Laurent Staub
function triangle3(...args) {
  let [short, middle, long ] = [...args].sort((a, b) => a - b);

  if (short + middle <= long || short <= 0) return 'invalid';
  if (short === middle && middle === long) return 'equilateral';
  if (short === middle || short === long || middle === long) return 'isosceles';
  return 'scalene';
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"