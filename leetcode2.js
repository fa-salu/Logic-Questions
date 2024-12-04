// 202. Happy Number
var isHappy = function (n) {
  let see = [];

  while (n !== 1 && !see.includes(n)) {
    see.push(n);

    let res = [];
    let nums = String(n);
    for (let num of nums) {
      let number = Number(num);
      res.push(Math.pow(number, 2));
    }
    n = res.reduce((sum, nums) => sum + nums, 0);
  }

  return n === 1;
};

//  75. Sort Colors

var sortColors = function (nums) {
  let count = 0,
    count1 = 0,
    count2 = 0;
  for (let num of nums) {
    if (num === 0) count++;
    else if (num === 1) count1++;
    else if (num === 2) count2++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (count > 0) {
      nums[i] = 0;
      count--;
    } else if (count1 > 0) {
      nums[i] = 1;
      count1--;
    } else {
      nums[i] = 2;
      count2--;
    }
  }

  return nums;
};

// 41. First Missing Positive
var firstMissingPositive = function (nums) {
  if (nums.length === 1) {
    if (nums[0] === 1) return 2;
  }
  let sorted = nums.sort((a, b) => a - b);

  let num = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (num === sorted[i]) {
      num++;
      continue;
    }
  }
  return num;
};

// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence

var isPrefixOfWord = function (sentence, searchWord) {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(searchWord)) return i + 1;
  }
  return -1;
};

// 2109. Adding Spaces to a String

var addSpaces = function (s, spaces) {
  let result = "";
  let spaceIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (spaceIndex < spaces.length && spaces[spaceIndex] === i) {
      result += " ";
      spaceIndex++;
    }
    result += s[i];
  }
  return result;
};

// 3110. Score of a String
var scoreOfString = function (s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return score;
};
