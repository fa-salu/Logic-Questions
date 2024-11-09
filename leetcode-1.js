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
