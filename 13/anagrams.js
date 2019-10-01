function anagram(pre, str) {
  // get str[0] + permutations of remaining characters
  // loop through  string
  if (str.length <= 1) {
    console.log(`Anagram is ${pre}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let current = str.substring(i, i + 1);
      let prev = str.substring(0, i);
      let after = str.substring(i + 1);
      anagram(pre + current, prev + after);
    }
  }
}
anagram('', 'east');
anagram('', 'ally');
