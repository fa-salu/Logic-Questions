// 9. Palindrome Number

var isPalindrome = function (x) {
  let str = x.toString();
  let reverse = str.split("").reverse().join("");
  return str === reverse;
};

// 5. Longest Palindromic Substring
ar longestPalindrome = function (s) {
  let longest = "";
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = expandAroundCenter(s, i, i);
    const evenPalindrome = expandAroundCenter(s, i, i + 1);
    if (oddPalindrome.length > longest.length) longest = oddPalindrome;
    if (evenPalindrome.length > longest.length) longest = evenPalindrome;
  }

  return longest;
};


// 83. Remove Duplicates from Sorted List

var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
};


// 136. Single Number
var singleNumber = function (nums) {
    let singleNum = 0;
    for (let num of nums) {
        singleNum ^= num;
    }
    return singleNum;
};


// 231. Power of Two

var isPowerOfTwo = function (n) {
    for (let i = 0; i <= 30; i++) {
        if (Math.pow(2, i) === n) return true;
    }
    return false;
};

// 326. Power of Three
var isPowerOfThree = function (n) {
    for (let i = 0; i <= 30; i++) {
        if (Math.pow(3, i) === n) return true
    }
    return false
};

// 342. Power of Four
var isPowerOfFour = function (n) {
    for (let i = 0; i <= 30; i++) {
        if (Math.pow(4, i) === n) return true
    }
    return false
};


// 371. Sum of Two Integers
var inter = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let i = 0,
    j = 0;
  let result = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      result.push(nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
};
console.log(inter([2, 5, 3], [5, 7, 2]));


// 1652. Defuse the Bomb

var decrypt = function (code, k) {
  const n = code.length;
  const result = new Array(n).fill(0);

  if (k === 0) return result;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        sum += code[(i + j) % n];
      }
    } else {
      for (let j = 1; j <= -k; j++) {
        sum += code[(i - j + n) % n];
      }
    }
    result[i] = sum;
  }

  return result;
};
