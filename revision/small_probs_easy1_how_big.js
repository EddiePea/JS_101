//See MD Notes

const READLINE = require('readline-sync');
const CONVERT_FEET_AND_METERS = 10.7639;

function getMeasurementType() {
  let answer = (READLINE.question(`What measurement type would you like to use?\nEnter m for meters or f for feet\n`)).toLowerCase();

  while (answer !== 'm' && answer !== 'f') {
    console.log('Please enter m for meters or f for feet');
    answer = (READLINE.question()).toLowerCase();
  }
  return answer;
}

function getDimensions(dimension) {
  let answer = parseFloat(READLINE.question(`Enter the ${dimension} of the room:\n`));

  while (isNaN(answer) || answer <= 0) {
    console.log('Please enter a valid number');
    answer = parseFloat(READLINE.question());
  }
  return answer;
}

function calculateArea(length, width) {
  return length * width;
}

function calculateConvertedArea(area, measurementType) {

  if (measurementType === 'm') {
    return area * CONVERT_FEET_AND_METERS;

  } else {
    return area / CONVERT_FEET_AND_METERS;
  }
}

function printArea(area, convertedArea, measurementType) {
  let area2dp = area.toFixed(2);
  let convertedArea2dp = convertedArea.toFixed(2);
  let convertedMeasurementType;

  if (measurementType === 'm') {
    measurementType = 'square meters';
    convertedMeasurementType = 'square feet';

  } else {
    measurementType = 'square feet';
    convertedMeasurementType = 'square meters';
  }
  console.log(`The area of the room is ${area2dp} ${measurementType} (${convertedArea2dp} ${convertedMeasurementType})`);
}

function findRoomArea() {
  let measurementType = getMeasurementType();
  let length = getDimensions('length');
  let width = getDimensions('width');
  let area = calculateArea(length, width);
  let convertedArea = calculateConvertedArea(area, measurementType);
  printArea(area, convertedArea, measurementType);
}

findRoomArea();

//LS Solution

//Required readlineSync and conversion const as above


console.log('Enter the length of the room in meters:');
let length = READLINE.prompt();
length = parseInt(length, 10);

console.log('Enter the width of the room in meters:');
let width = READLINE.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * CONVERT_FEET_AND_METERS);

console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet)`);

