// 9. Palindrome Number

var isPalindrome = function (x) {
  let str = x.toString();
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};
