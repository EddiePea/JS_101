//See MD notes

function triangle(angle1, angle2, angle3) {
  let anglesArr = [ angle1, angle2, angle3].sort((a, b) => a - b);

  if ((anglesArr[0] <= 0) || anglesArr.reduce((a, b) => a + b) !== 180) return 'invalid';
  if (anglesArr.includes(90)) return 'right';
  if (anglesArr.every(angle => angle < 90)) return 'acute';
  return 'obtuse';
}

//With helper function
function triangle2(angle1, angle2, angle3) {
  let anglesArr = [ angle1, angle2, angle3].sort((a, b) => a - b);

  if (isInvalid(anglesArr)) return 'invalid';
  if (anglesArr.includes(90)) return 'right';
  if (anglesArr.every(angle => angle < 90)) return 'acute';
  return 'obtuse';
}

function isInvalid(anglesArr) {
  return !!((anglesArr[0] <= 0) || anglesArr.reduce((a, b) => a + b) !== 180);
}

//Getting rid of sorted array
//Used some rather than `anglesArr.includes(0)` to deal with the situation
//where you have a negative integer
//Could have used angle1 + angle2 etc.
function triangle3(angle1, angle2, angle3) {
  let anglesArr = [ angle1, angle2, angle3 ];

  if (anglesArr.some(angle => angle <= 0 ||
    anglesArr.reduce((a, b) => a + b) !== 180)) return 'invalid';

  if (anglesArr.includes(90)) return 'right';
  if (anglesArr.every(angle => angle < 90)) return 'acute';
  return 'obtuse';
}

//Using sort to just refer to angle size
function triangle4(...args) {
  let [ small, middle, big ] = [...args].sort((a, b) => a - b);

  if (small <= 0 || small + middle + big !== 180) return 'invalid';
  if (big < 90) return 'acute';
  if (big > 90) return 'obtuse';
  return 'right';
}


console.log(triangle4(60, 70, 50));       // "acute"
console.log(triangle4(30, 90, 60));       // "right"
console.log(triangle4(120, 50, 10));      // "obtuse"
console.log(triangle4(0, 90, 90));        // "invalid"
console.log(triangle4(50, 50, 50));       // "invalid"