// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

returnFirstTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia'])

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
