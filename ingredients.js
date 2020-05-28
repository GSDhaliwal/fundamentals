const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let ingredient = 0;
while (ingredient < ingredients.length) {
  console.log(ingredients[ingredient]);
  ingredient++
};

// Write a for loop that prints out the contents of ingredients:

for (let ingredient = 0; ingredient < ingredients.length; ingredient++) {
  console.log(ingredients[ingredient]);
};

// Write any loop (while or for) that prints out the contents of ingredients backwards:

const ingredientsReversed = ingredients.reverse();
for (let ingredient = 0; ingredient < ingredientsReversed.length; ingredient++) {
  console.log(ingredientsReversed[ingredient]);
};