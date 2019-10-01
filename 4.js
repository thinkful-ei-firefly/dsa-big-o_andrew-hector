'use strict';
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n)

//The bigger the array the longer it
// would take to double all the numbers in array.
