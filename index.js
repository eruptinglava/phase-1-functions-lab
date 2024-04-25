// Code your solution in this file!
const distanceFromHqInBlocks = (pickUpLocation) => Math.abs(pickUpLocation - 42);

const distanceFromHqInFeet = (pickUpLocation) => distanceFromHqInBlocks(pickUpLocation) * 264;

const distanceTravelledInFeet = (start, destination) => Math.abs(start - destination) * 264;

const calculatesFarePrice = (start, destination) => {
  let distanceInFeet = distanceTravelledInFeet(start, destination);
  if (distanceInFeet < 400) return 0;
  else if (distanceInFeet <= 2000) return (distanceInFeet - 400) * 0.02;
  else if (distanceInFeet <= 2500) return 25;
  else return 'cannot travel that far';
};