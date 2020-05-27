/* print numbers 100-200
multiple of 3 = "Loopy"
multiple of 4 = "Lighthouse"
multiple of 3 and 4 = "LoopyLighthouse"
else print numbers*/

for (let number = 100; number <= 200; number++) {
  if (number % 3 === 0 && number % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (number % 3 === 0) {
    console.log("Loopy");
  } else if (number % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(number);
  }
};