// 12. Integer to Roman
const intToRoman = function (num) {
  const valueSymbols = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let res = "";
  for (let [value, sympol] of valueSymbols) {
    while (num >= value) {
      res += sympol;
      num -= value;
    }
  }
  return res;
};

// console.log(intToRoman(3)); // Output: "III"
// console.log(intToRoman(58)); // Output: "LVIII"
// console.log(intToRoman(1994)); // Output: "MCMXCIV"

//  32. Longest Valid Parentheses
var longestParentheses = function (s) {
  let maxLen = 0;
  let left = 0,
    right = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      left++;
      console.log("l", left);
    } else {
      right++;
      console.log("r", right);
    }
    if (left === right) {
      console.log("object");
      maxLen = Math.max(maxLen, 2 * right);
      console.log("object", maxLen);
    } else if (right > left) {
      console.log("object", right, left);
      left = right = 0;
    }
  }

  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxLen = Math.max(maxLen, 2 * left);
      console.log("ri", maxLen);
    } else if (left > right) {
      left = right = 0;
    }
  }

  return maxLen;
};

// console.log(longestParentheses("()(())")); // Output: 6
// console.log(longestParentheses(")()())")); // Output: 4
// console.log(longestParentheses("()")); // Output: 0
