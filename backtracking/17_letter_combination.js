// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const MAPPING = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"]
}

// const letterCombinations = (digits) => {
//   if (digits.length === 0) return [];

//   let currOptions = MAPPING[digits.slice(0, 1)];
//   let otherOptions = letterCombinations(digits.slice(1));
//   if (currOptions.length === 0) {
//     return otherOptions;
//   } else if (otherOptions.length === 0) {
//     return currOptions;
//   }
//   let res = [];
//   currOptions.forEach(opt1 => {
//     otherOptions.forEach(opt2 => {
//       res.push(opt1 + opt2);
//     })
//   })

//   return res;
// };

const letterCombinations = (digits, i=0) => {
  if (i === digits.length) return [];

  let currOptions = MAPPING[digits[i]];
  let otherOptions = letterCombinations(digits, i + 1);
  if (currOptions.length === 0) {
    return otherOptions;
  } else if (otherOptions.length === 0) {
    return currOptions;
  }
  let res = [];
  currOptions.forEach(opt1 => {
    otherOptions.forEach(opt2 => {
      res.push(opt1 + opt2);
    })
  })

  return res;
};

console.log( letterCombinations("2") );
console.log( letterCombinations("23") );
