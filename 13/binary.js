'use strict';
// & check
// >> remove

/* 25
32  0%2 =>End
16  1%2 =>1
8   3%2 =>1
4   6%2 =>0
2  12%2 =>0
1  25%2 =>1
 */

function binaryRepresentation(n) {
  if (n <= 0) {
    return '';
  }
  let binary = n % 2;
  return binaryRepresentation(Math.floor(n / 2)) + binary;
}

console.log(binaryRepresentation(25));

// O(log(n)) Logarithmic
