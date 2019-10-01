const sheep = function(num) {
  for (let i = 1; i <= num; i++) {
    console.log(`${i}: Another sheep has jumped over the fence`);
  }
  console.log('0: All sheep have jumped over the fence');
};
//o(n)

const powerCalculator = function(x, y) {
  if (y < 0) {
    return 'exponent should be >= 0';
  } else {
    return x ^ y;
  }
};
//o(1)

const revString = function(string) {
  let str = string.split('');
  str = str.reverse();
  str = str.join('');
  return str;
};
//o(1)

function nthNumber(n) {
  let results = 0;
  for (let i = 0; i <= n; i++) {
    results = results + i;
  }
  return results;
}
console.log(nthNumber(4));

// O(n) Linear

function stringSplitter(str, sep) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== sep) {
      result = result + str[i];
    }
  }
  return result;
}

console.log(stringSplitter('qw/er/ty', '/'));
