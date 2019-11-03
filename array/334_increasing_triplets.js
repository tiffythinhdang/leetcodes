// https://leetcode.com/problems/increasing-triplet-subsequence/

const increasingTriplet = (nums) => {
  let min = nums[0];
  let mid = Infinity;

  for (let i = 1; i < nums.length; i++) {
    let currNum = nums[i];
    if (currNum > min && currNum < mid) mid = currNum;
    if (currNum < min) min = currNum;
    if (currNum > mid) return true;
  }

  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
