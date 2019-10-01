function reverseString(string) {
  if (string === '') {
    return '';
  }
  return string.slice(-1) + reverseString(string.slice(0, string.length - 1));
}

console.log(reverseString('hello'));
