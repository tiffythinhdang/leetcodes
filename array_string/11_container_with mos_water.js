const maxArea = (heights) => {
  let startIdx = 0;
  let endIdx = heights.length - 1;
  let maxArea = Math.min(heights[0], heights[endIdx]) * heights.length;

  while (startIdx < endIdx) {
    if (heights[startIdx] < heights[endIdx] ) {
      startIdx++;
    } else {
      endIdx--;
    }
    let attempt = Math.min(heights[startIdx], heights[endIdx]) * (endIdx - startIdx);
    if (attempt > maxArea) maxArea = attempt;
  }

  return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))