// const lengthOfLongestSubstring = (s) => {
//   let length = 0;
//   let count = {};
//   let currLength = 0;
//   let idx = 0;

//   while (idx < s.length) {
//     let currChar = s[idx];

//     if ( count[currChar] === undefined ) {
//       count[currChar] = idx;
//       currLength ++;
//       idx ++;
//     } else {
//       if (currLength > length) length = currLength;
//       idx = count[currChar] + 1;
//       count = {};
//       currLength = 0;
//     }
//   }

//   return (length > currLength ? length : currLength);
// };

const lengthOfLongestSubstring = (s) => {
  let length = 0;
  let count = {};
  let currLength = 0;
  let idx = 0;
  let newStartPoint = 0;

  while (idx < s.length) {
    let currChar = s[idx];
    
    if (count[currChar] === undefined || count[currChar] < newStartPoint) {
      count[currChar] = idx;
      currLength++;
    } else {
      if (currLength > length) length = currLength;
      newStartPoint = count[currChar] + 1;
      count[currChar] = idx;
      currLength = idx - newStartPoint + 1;
    }
    
    idx++;
  }

  return Math.max(length, currLength);
};

console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));