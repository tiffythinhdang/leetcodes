const lengthOfLIS = (nums) => {
  if (nums.length < 2) return nums.length;
  let table = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let currNum = nums[i];
    let lengthAtCurrNum = table[i];
    let maxLengthAtCurrNum = table[i];

    for (let j = i - 1; j >= 0; j--) {
      let attemptNum = nums[j];
      if (attemptNum < currNum) {
        let attemptLength = table[j] + lengthAtCurrNum
        if (attemptLength > maxLengthAtCurrNum) maxLengthAtCurrNum = attemptLength;
      }
    }
    table[i] = maxLengthAtCurrNum;
  }

  return Math.max(...table);
};

console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]))