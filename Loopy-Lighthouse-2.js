

const loopyLighthouse = function ([range1, range2], [multiples1, multiples2], [words1, words2]) {
  for (let number = range1; number <= range2; number++) {
    if (number % multiples1 === 0 && number % multiples2 ===  0) {
      console.log(words1 + words2);
    } else if (number % multiples1 === 0) {
      console.log(words1);
    } else if (number % multiples2 === 0) {
      console.log(words2);
    } else {
      console.log(number);
    }
  }
};

  loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);