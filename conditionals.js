const raining = false;
const cold = true;

if (raining) {
  console.log("Don't forget your umbrella!");
};

if (cold) {
  console.log("Make sure you pick out a scarf!")
} else {
  console.log("Short sleeves are fine.");
};

console.log("Now you're ready to go outside!\n");



const temperature = -41;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
};

console.log("Now you're ready to go outside!\n");



const isCitizen = true;
const age = 15;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.\n");
};



if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...\n");
};



if (!raining) {
  console.log("Leave your umbrella at home!");
};