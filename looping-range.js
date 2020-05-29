const range = function (start, end, step) {
  newArray = [];
  for (number = start; number <= end; number += step) {
    if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
      return newArray;
    } else {
      newArray.push(number);
    }
}
  return newArray;
};



console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range())
console.log(range(5, 2, 1));
console.log(range(10, 20, 0));