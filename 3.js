'use strict';

function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}
// O(n ^ m)
//since we have nested for loop this is Polynomial 
// it is n^2 since we have 2 loops. if we had more nestend loops
// we would increase the power by the number of nested loops