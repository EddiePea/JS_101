/* eslint-disable max-statements */
//See MD notes

/*
- 1440 mins in a day
- Work out if num is positive or negative
- If it's less than 1440:
  - and positive:
    - [/60] - to get hours
    - Take integer for hours
    - * remainder by 60 to get minutes
    - Round to nearest whole num
  - and negative:
    - [1440 + num]
    - Same as above
- If it's more than 1440
  - and positive:
    - i. num/1440 = timesInto1440
    - ii. Multiply 1440 by integer of tiemsInto1440 = days
    - iii. num - days = remainder
    - iv. Do same to remainder
      - Then same as above (divide by 60), take integer as hours
      - Multiply remainder by 60 and round to nearest whole num (up or down)
  - and negative:
    - Follow steps i to iii above
    - Then follow route for negatives above, i.e. add 1440

      if (num > MINS_IN_DAY) {
    let timesInto1440 = Math.floor(num / MINS_IN_DAY);
    let days = MINS_IN_DAY * timesInto1440;
    num -= days;
  }

  if (num < 0) {
    num += MINS_IN_DAY;
  }
*/

const MINS_IN_DAY = 1440;
const MINS_IN_HOURS = 60;

function timeOfDay(num) {

  if (num < 0) {
    num = (num % MINS_IN_DAY) + MINS_IN_DAY;

  } else {
    num %= MINS_IN_DAY;
  }

  let hours = Math.floor(num / MINS_IN_HOURS);
  let minutes = num % MINS_IN_HOURS;
  return formatTime(hours, minutes);
}

function addExtraZero(num) {
  return num < 10 ? `0${num}` : num;
}

function formatTime(hours, minutes) {
  return `${addExtraZero(hours)}:${addExtraZero(minutes)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

//LS solution

function timeOfDay2(num) {
  if (num < 0) {
    num = (num % MINS_IN_DAY) + MINS_IN_DAY;

  } else {
    num %= MINS_IN_DAY;
  }

  let hours = Math.floor(num / MINS_IN_HOURS);
  let minutes = num % MINS_IN_HOURS;

  return formatTime(hours, minutes);
}

