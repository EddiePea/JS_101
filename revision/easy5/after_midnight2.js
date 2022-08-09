//See MD notes

/*
- Access hours part of input string and convert to number
- Access minutes part of input string and convert to number
- Convert hours num to minutes
- Sum hoursInMins to mins -> totalMins
- If beforeMidnight -> [1440] - totalMins
- If afterMidnight -> totalMins
*/

const MINS_PER_DAY = 1440;

function afterMidnight(timeString) {
  let hours = Number(timeString.slice(0, 2));
  let minutes = Number(timeString.slice(3));
  let totalMins = (hours * 60) + minutes;

  if (totalMins === MINS_PER_DAY) return 0;
  return totalMins;
}

function beforeMidnight(timeString) {
  let total = MINS_PER_DAY - afterMidnight(timeString);

  if (total === MINS_PER_DAY) return 0;
  return total;
}

//TESTS
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0); //
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0); //
console.log(beforeMidnight("24:00") === 0);

//LS solution

const HOURS_PER_DAY = 24;
const MINS_PER_HOUR = 60;
const MINS_PER_D = HOURS_PER_DAY * MINS_PER_HOUR;

function afterMidnight2(timeStr) {
  let [hours, minutes] = timeStr.split(':').map(num => Number(num));
  return ((hours * MINS_PER_HOUR) + minutes) % MINS_PER_D;
}

//Creates array of hours, mins using split (to divide the string) and map to transform
//Multiplies hours by 60 and adds mins to get total mins
//Gets remainder of dividing total mins by [mins per d]
//Should output total mins normally; but if totalMins === 1440, then outputs 0

function afterMidnight2(timeStr) {
  let deltaMins = MINS_PER_D - afterMidnight2(timeStr);
  if (deltaMins === MINS_PER_D){
    deltaMins = 0;
  }
  return deltaMins;
}

//