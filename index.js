function distanceFromHqInBlocks(passengerBlocks) {
  return Math.abs(passengerBlocks - 42);
}

function distanceFromHqInFeet(passengerBlocks) {
//1 block = 264 ft
  return distanceFromHqInBlocks(passengerBlocks) * 264;
}

function distanceTravelledInFeet(startingBlock, endingBlock) {
  return (Math.abs(endingBlock - startingBlock) * 264);
}

function calculatesFarePrice(startingBlock, endingBlock) {
  const fareDistance = (distanceTravelledInFeet(startingBlock, endingBlock));
  if (fareDistance > 2500) return ('cannot travel that far');
  else if (fareDistance > 2000) return 25;
  else if (fareDistance <= 2000 && fareDistance > 400) return ((fareDistance - 400) * 0.02);
  else return 0 // A distance below 400 results in a free ride
}
