//See MD notes

/*
- getDate() -> returns day of month (1-31) for specified date
- getDay() -> returns day of week (0-6) for specified date
  - Initialise a new date with 'MONTH DAY YEAR'
- getMonth() -> returns month (0-11) in specified date

- SET unluckyDays to 0
- Break down YEAR into months
  - SET list of month names
- Loop through months
  - For each month, SET date to [MONTH 13 YEAR]
  - If date.getDay() === 4 (i.e. Friday) -> increase value of unluckyDays by 1
- Return unluckyDays
*/

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'];

const FRIDAY = 5;

function fridayThe13ths(year) {
  let unluckyDays = 0;

  MONTHS.forEach(month => {
    let the13th = new Date(`${month} 13 ${year}`);
    if (the13th.getDay() === FRIDAY) {
      unluckyDays += 1;
    }
  });
  return unluckyDays;
}

//Variation on David Poscai's extremely neat solution
//Created a new array with 12 elements and then made use of the
//index nums to access the relevant month num
function fridayThe13ths2(year) {
  const UNLUCKY_DAY = 13;
  const FRIDAY = 5;
  let unluckyDays = 0;

  [...Array(12)].forEach((_, indx) => {
    let the13th = new Date(year, indx, UNLUCKY_DAY);

    if (the13th.getDay() === FRIDAY) {
      unluckyDays += 1;
    }
  });
  return unluckyDays;
}

function fridayThe13ths3(year) {
  return [...Array(12)].
    filter((_, indx) => new Date(year, indx, 13).getDay() === 5).length;
}

console.log(fridayThe13ths2(1986));      // 1
console.log(fridayThe13ths2(2015));      // 3
console.log(fridayThe13ths2(2017));      // 2