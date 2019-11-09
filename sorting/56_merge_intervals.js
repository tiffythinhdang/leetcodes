// https://leetcode.com/problems/merge-intervals/

const merge = (intervals) => {
  if (intervals.length < 2) return intervals;
  let sorted = intervals.sort((arr1, arr2) => arr1[0] - arr2[0]);
  let merged = [sorted.shift()];

  while (sorted.length > 0) {
    let currInt = sorted.shift();
    let mergedInt = merged[merged.length - 1]
    if (currInt[0] <= mergedInt[1] && currInt[1] > mergedInt[1]) {
      mergedInt[1] = currInt[1];
    } else if (currInt[0] > mergedInt[1]) {
      merged.push(currInt);
    }
  }

  return merged;
};


