//See MD notes

/*
**ALGORITHM**
- SET num ending and suffix object
  - ends in [1] - st
  - ends in [2] - nd
  - ends in [3] - rd
  - ends in [11] - th
  - ends in [12] - th
  - ends in [13] - th
  - everything else (including 0) - th

- NUM === 0; return '';
- Get relevant century
  - SET CENT variable:
    - Divide NUM by 100
    - Math.floor() -> ignore nums post decimal point
  - Deal with 00/01:
    - Convert NUM to string
    - Create substring of last 2 chars
    - If substr = [00]
      - leave CENT as is
    - Otherwise
      - CENT += 1
- Turn CENT into string
  - String()
- Get relevant suffix depending on number
  - separate out into separate function
  - Might be best to use conditional -> so that we can isolate 11, 12, 13 first
  - IF CENT.endsWith(11) - th
  - IF CENT.endsWith(12) and 13 etc/
  - IF CENT.endsWith(1) - st
  - IF ce 2 - nd
  - IF 3 - rd
  - Default - th
- Add suffix to CENT_STRING
- Return string
*/

function determineSuffix(str) {

  switch (true) {
    case str.endsWith('11'): return 'th';
    case str.endsWith('12'): return 'th';
    case str.endsWith('13'): return 'th';
    case str.endsWith('1'): return 'st';
    case str.endsWith('2'): return 'nd';
    case str.endsWith('3'): return 'rd';
    default: return 'th';
  }
}

function century(year) {
  if (year === 0) return '';

  let yearEndStr = String(year).slice(-2);
  let centuryNum = Math.floor(year / 100);

  if (yearEndStr !== '00') {
    centuryNum += 1;
  }

  let yearStr = String(centuryNum);
  let suffix = determineSuffix(yearStr);

  return yearStr + suffix;
}

//TESTS FOR CENTURY FUNC

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

//TESTS FOR SUFFIX FUNC
/*
console.log(determineSuffix('11'));
console.log(determineSuffix('12'));
console.log(determineSuffix('13'));
console.log(determineSuffix('14'));
console.log(determineSuffix('1'));
console.log(determineSuffix('10'));
console.log(determineSuffix('22'));
console.log(determineSuffix('43'));
console.log(determineSuffix('90005'));
*/

//LS solution

function century2(year) {
  let centuryNum = Math.floor(year / 100) + 1;

  if (year % 100 === 0) {
    centuryNum -= 1;
  }
  return String(centuryNum) + centurySuffix(centuryNum);
}

function centurySuffix(centuryNum) {
  if (catchWithTh(centuryNum % 100)) {
    return 'th';
  }

  let lastDigit = centuryNum % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}