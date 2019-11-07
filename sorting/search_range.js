const searchRange = (nums, target, start=nums.lenghth - 1, end=0) => {
  if (nums.length === 0) return [-1, -1];

  let midIdx = Math.floor(nums.length / 2);
  let midVal = nums[midIdx];

  if (midVal === target) {
    if (midIdx < start) start = midIdx;
    if (midIdx > end) end = midIdx;
    searchRange(nums, target, start, end);
  } else if ( midVal > target) {
    searchRange(nums.slice(0, midIdx), target, start, end);
  }
}
