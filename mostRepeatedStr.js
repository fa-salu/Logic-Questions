function mostWord(words) {
  let arr = {};
  let count = 0;
  let maxW = "h";
  for (let word of words) {
    arr[word] = (arr[word] || 0) + 1;
  }
  for (let word of words) {
    if (arr[word] > count) {
      maxW = word;
      count = arr[word];
    }
  }

  return maxW;
}

console.log(mostWord(["abc", "aab", "aba", "abc", "bba", "abc"]));
  
