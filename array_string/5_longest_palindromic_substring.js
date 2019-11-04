// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = (s) => {
  let longest = "";
  let currLongest = [];

  for (let idx = 0; idx < s.length; idx++) {
    let currChar = s[idx];
    currLongest = [];
    currLongest.push(currChar);

    let leftIdx = idx - 1;
    let rightIdx = idx + 1;
    
    // Check currChar as the middle ele of palindrome
    let res = checkPalindrome(s, currLongest, leftIdx, rightIdx);
    if (res.length > longest.length) longest = res;

    // Check currChar as the part of left side of palindrome
    currLongest = [currChar];
    leftChar = s[leftIdx];

    if (currChar === leftChar) {
      currLongest.push(leftChar);
      leftIdx--;
      res = checkPalindrome(s, currLongest, leftIdx, rightIdx);
      if (res.length > longest.length) longest = res;
    }
  }

  let attempt = currLongest.join("");
  return (attempt.length > longest.length) ? attempt : longest;
}

const checkPalindrome = (string, currLongest, leftIdx, rightIdx) => {
  while (leftIdx >= 0 && rightIdx < string.length) {
    let leftChar = string[leftIdx];
    let rightChar = string[rightIdx];

    if (leftChar === rightChar) {
      currLongest.unshift(leftChar);
      currLongest.push(rightChar);
      leftIdx--;
      rightIdx++;
    } else {
      break;
    }
  }
  return currLongest.join("");
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("bbbbbb"));
