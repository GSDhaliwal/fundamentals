const lastIndexOf = function (array, value) {
  let match = false;
  let indexNumber = 0;
  for (let x = array.length - 1; x >= 0; x--) {
    if (array[x] === value) {
      indexNumber = x;
      match = true;
      break;
    }
  }
  if (match === true) {
    return indexNumber;
  } else {
    return -1;
  }
};





console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));