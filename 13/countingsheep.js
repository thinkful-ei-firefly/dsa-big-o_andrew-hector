'use strict';

function countSheep(sheep) {
  if (sheep === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }
  console.log(`${sheep}: Another sheep jumps over the fence`);
  countSheep(sheep - 1);
}
countSheep(3);

// O(n) Linear
