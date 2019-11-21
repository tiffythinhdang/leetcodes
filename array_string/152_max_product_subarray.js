const maxProduct = (nums) => {
  let res = nums[0];
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let currNum = nums[i];
    let prevMax = max;

    max = Math.max(currNum, max * currNum, min * currNum);
    min = Math.min(currNum, prevMax * currNum, min * currNum);

    res = Math.max(res, max);
  }
  return res;
};
