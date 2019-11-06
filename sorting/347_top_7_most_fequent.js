// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
  let map = {};
  let buckets = new Array(nums.length + 1).fill().map(ele => []);
  let res = [];

  nums.forEach(num => {
    if (!map[num]) map[num] = 0;
    map[num]++;
  })

  for (let num in map) {
    buckets[map[num]].push(num);
  }

  let idx = buckets.length - 1;

  while (res.length < k) {
    if (buckets[idx].length === 0) {
      idx--;
      continue;
    } else {
      res.push(buckets[idx].shift());
    }
  }

  return res;
};