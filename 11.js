'use strict';

// A -> C
// A -> B
// C -> B
// A -> C
// B -> A
// B -> C
// A -> C

function TOH(num, source, dest, temp) {
  if (num === 1) {
    console.log(`Moving disc from ${source} to ${dest}`);
    return;
  } else {
    TOH(num - 1, source, temp, dest);
    TOH(1, source, dest, temp);
    TOH(num - 1, temp, dest, source);
  }
}
console.log(TOH(3, 'A', 'C', 'B'));

// O(2^n)

// it has exponential time complexity. For the single increase in problem size, the time
// required is double the previous one
