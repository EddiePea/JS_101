/*
INSTRUCTIONS/RULES:
- Asks user to enter length and width of room in meters
- Logs area of room to console in sq m and sq ft
- 1 sq m === 10.7639 sq ft
- use readlineSync.prompt method to collect input

ASSUMPTIONS:
- input is valid

INPUT:
- User input -> numeric strings

OUTPUT:
- String (which interpolates user input)

EXAMPLES:

DATA STRUCTURE:
- From string to number and back to string

ALGO:
- Get input from user
  - Ask for length of room in meters
  - Ask for width of room in meters
- Convert numeric strings to numbers
- Compute area of room in square meters
- Convert output to square feet
- Log string to console which interpolates the calculations

*/

const READLINE = require('readline-sync');
const METER_TO_FEET = 10.7639;

function getInput(measurementType) {
  let measurement = READLINE.question(`Enter the ${measurementType} of the room in meters:\n`);
  while (isNaN(Number(measurement))) {
    measurement = READLINE.question(`Please enter a valid number:\n`);
  }
  return measurement;
}

function calculateAreaInMeters(length, width) {
  return length * width;
}

function convertToFeet(areaInMeters) {
  return areaInMeters * METER_TO_FEET;
}

function printArea() {
  let length = getInput('length');
  let width = getInput('width');
  let areaInMeters = calculateAreaInMeters(length, width);
  let areaInFeet = convertToFeet(areaInMeters);

  console.log(`The area of the room is ${(areaInMeters).toFixed(2)} (${(areaInFeet).toFixed(2)} square feet)`);
}

printArea();