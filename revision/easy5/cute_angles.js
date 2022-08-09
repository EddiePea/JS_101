//See MD notes

/*
- Generate minutes => degrees / 60
- Generate seconds => minutes / 60
- Generate degrees string =>
  - Get degrees -> round down to nearest integer
  - Convert to string:
    - String([Math.floor(degrees)]) + ° [OR add it to template literal]
- Generate minutes string =>
  - toFixed(Math.floor(minutes)) + '
- Generate seconds string =>
  - toFixed(Math.floor(seconds)) + "
- Add to string literal and print
*/

const DEGREE = '°';
const MINS_SIGN = "'";
const SECS_SIGN = '"';
const MINS_PER_DEGREE = 60;
const SECS_PER_MIN = 60;
const MIN_DEGREES = 0;
const MAX_DEGREES = 360;

function dms(num) {
  while (num < MIN_DEGREES) {
    num += MAX_DEGREES;
  }

  if (num > MAX_DEGREES) {
    num -= MAX_DEGREES;
  }

  let degrees = Math.floor(num);
  let minutes = (num - degrees) * MINS_PER_DEGREE;
  let roundedMinutes = Math.floor(minutes) || 0;
  let seconds = Math.floor((minutes - roundedMinutes) * SECS_PER_MIN) || 0;

  console.log(`${degrees}${DEGREE}${extraZero(roundedMinutes)}${MINS_SIGN}${extraZero(seconds)}${SECS_SIGN}`);
}

function extraZero(num) {
  return num < 10 ? ('0' + num) : num;
}


dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"