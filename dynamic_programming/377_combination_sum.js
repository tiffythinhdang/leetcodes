const combinationSum4 = (nums, target) => {
  let numCombos = new Array(target + 1).fill(0);
  numCombos[0] = 1;
  let sortedNums = nums.sort((a, b) => a - b);

  for (let i = 1; i < numCombos.length; i++) {
    let currCombos = 0;

    for (let j = 0; j < sortedNums.length; j++) {
      let currNum = sortedNums[j];
      if (currNum > i) break;

      currCombos = currCombos + numCombos[i - currNum];
    }
    numCombos[i] = currCombos;
  }
  
  return numCombos[target];
}

console.log(combinationSum4([1, 2, 3], 4))