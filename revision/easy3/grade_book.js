//See MD notes

/*
- If missing an arg (or value === null or undefined) => 0
- Sum arguments
- Divide sum by num of num of args (3);
- Take nearest whole num of output
- IF AVERAGE < 60 -> F
- ELSE IF AVERAGE < 70 -> D
- ELSE IF AVERAGE < 80 -> C
- ELSE IF AVERAGE < 90 -> B
- ELSE -> A
- Return string
*/

function getGrade(score1 = 0, score2 = 0, score3 = 0) {
  const NUM_OF_SCORES = 3;
  let averageScore = Math.round((score1 + score2 + score3) / NUM_OF_SCORES);

  if (averageScore < 60) {
    return 'F';
  } else if (averageScore < 70) {
    return 'D';
  } else if (averageScore < 80) {
    return 'C';
  } else if (averageScore < 90) {
    return 'B';
  } else {
    return 'A';
  }
}

console.log(getGrade(95, 90, 93)); //'A'
console.log(getGrade(50, 50, 95));  //'D'

//Refactored using switch statement

function getGrade2(score1 = 0, score2 = 0, score3 = 0) {
  const NUM_OF_SCORES = 3;
  let averageScore = Math.round((score1 + score2 + score3) / NUM_OF_SCORES);

  switch (true) {
    case averageScore < 60: return 'F';
    case averageScore < 70: return 'D';
    case averageScore < 80: return 'C';
    case averageScore < 90: return 'B';
    default: return 'A';
  }
}


