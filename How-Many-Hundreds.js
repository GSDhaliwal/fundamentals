const howManyHundreds = function (numberOfBottles) {
  let numberOfContainers = numberOfBottles / 100;
  numberOfContainers = Math.floor(numberOfContainers);
  return numberOfContainers; 
};


console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));