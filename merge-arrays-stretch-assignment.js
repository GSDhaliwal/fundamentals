const merge = function (array1, array2) {
  let mergedArray = [];
  mergedArray = array1.concat(array2);
  mergedArray.sort(function(a, b) {
    a - b;
  });
  return mergedArray;
};


console.log(merge([5, 2, 1, 6, 7], [1, 3, 4, 7, 2]));
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);