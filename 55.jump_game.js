// const canJump = (nums) => {
//   if (nums.length === 0) return true;

//   let currNum = nums[0];
//   for (let i = 1; i <= currNum; i++) {
//     let res = canJump( nums.slice(i) );
//     if (res) return true;
//   }

//   return false;
// };

// const canJump = (nums, idx = 0, memo = {}) => {
//   if (idx === nums.length - 1) return true;
//   if (idx in memo) return memo[idx];


//   let currNum = nums[idx];
//   let bound = (currNum < nums.length ? currNum : nums.length);

//   for (let i = 1; i <= bound; i++) {
//     let res = canJump(nums, idx + i, memo);
//     if (res) return true;
//   }

//   memo[idx] = false;
//   return false;
// };

const canJump = (nums) => {
  if (nums.length < 2) return true;

  let currNum = nums[0];
  let currIdx = 0;
  let lastIdx = nums.length - 1;

  while (currNum !== 0) {
    let currMaxNextSteps = 0;
    let nextIdx = currIdx;
    let numStep = 1;

    while (numStep <= currNum) {
      let attemptIdx = currIdx + numStep;
      if (attemptIdx >= lastIdx) return true;

      let attemptedMaxNextSteps = numStep + nums[attemptIdx];
      if (attemptedMaxNextSteps >= lastIdx) return true;

      if (attemptedMaxNextSteps > currMaxNextSteps) {
        currMaxNextSteps = attemptedMaxNextSteps;
        nextIdx = attemptIdx; 
      }

      numStep++;
    }
    currNum = nums[nextIdx];
    currIdx = nextIdx;
  }

  return false;
};

let arr1 = [2, 3, 1, 1, 4];
let arr2 = [3, 2, 1, 0, 4];

console.log(canJump(arr1))
console.log(canJump(arr2))
