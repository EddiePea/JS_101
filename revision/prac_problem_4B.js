

function closestNumbers(arr) {

  let best = Infinity;
  let bestPair = null
  arr = arr.sort((a, b) => a - b);
  console.log(`\n${arr}`);
  for (var i = 0; i < arr.length; i++) {
    const val = Math.abs(arr[i+1] - arr[i]);
    if (val < best) {
      best = val;
      bestPair = [arr[i],arr[+1]];
    }
    console.log(`i= ${i}  val= ${val} best= ${best}`);
  }

  return bestPair;

}

console.log(closestNumbers([-5, -25, -15, -11, -20]));     // [15, 11]
