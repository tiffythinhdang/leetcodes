// https://leetcode.com/problems/longest-palindrome/

const longestPalindrome = (s) => {
  let length = 0;
  let chars = new Set();

  for (let i = 0; i < s.length; i++) {
    let currChar = s[i];
    if ( chars.has(currChar) ) {
      length += 2;
      chars.delete(currChar);
    } else {
      chars.add(currChar);
    }
  }

  return length + ( chars.size > 0 ? 1 : 0 );
}


console.log(longestPalindrome("abccccdd"));