//See MD notes

function invalidYear(year) {
  return (((year - Math.floor(year)) > 0)
    || (year <= 0)
    || (typeof year !== 'number'));
}

function isLeapYear(year) {
  if (!invalidYear(year)) {
    return (year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0));
  } else {
    console.log('Please enter a valid year');
  }
}


isLeapYear('cat');
isLeapYear(-200);
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true