'use strict';

function powerCalculater(num, exp) {
  if (exp <= 0) {
    console.log('Exponent should be >= 0');
    return;
  }
  if (exp === 1) {
    return num;
  }
  return num * powerCalculater(num, exp - 1);
}

console.log(powerCalculater(10, 4));

// O(exp) Linear
