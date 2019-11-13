function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// const constructMaximumBinaryTree = (nums) => {
//   const numMapToIndex = {};
//   nums.forEach(( num, i ) => {
//     numMapToIndex[num] = i;
//   })

//   let maxNum = nums[0];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > maxNum) {
//       maxNum = nums[i];
//     }
//   }

//   let root = new TreeNode(maxNum);
//   const queue = [ [ root, [0, nums.length - 1] ] ];
//   let set = new Set();
  

//   while (set.size < nums.length) {
//     let currEle = queue.shift();
//     let currRoot = currEle[0];
//     set.add(currRoot.val);
//     let currRootIdx = numMapToIndex[String(currRoot.val)];
//     let currRangeStart = currEle[1][0];
//     let currRangeEnd = currEle[1][1];
//     if (currRangeStart >= currRangeEnd) continue;

//     // Get right node
//     if (nums[currRootIdx + 1] !== undefined && !set.has(nums[currRootIdx + 1])) {
//       let maxRight = nums[currRootIdx + 1];

//       for (let i = currRootIdx + 1; i <= currRangeEnd; i++) {
//         let currNum = nums[i];
//         if (currNum > maxRight) maxRight = currNum;
//       }

//       set.add(maxRight);
//       let rightRoot = new TreeNode(maxRight);
//       currRoot.right = rightRoot;
//       queue.push([rightRoot, [currRootIdx + 1, currRangeEnd]]);
//     }

//     // Get left node 
//     if ( !set.has(nums[currRangeStart])  ) {
//       let maxLeft = nums[currRangeStart];

//       for (let i = currRangeStart; i < currRootIdx; i++) {
//         let currNum = nums[i];
//         if (currNum > maxLeft) maxLeft = currNum;
//       }

//       set.add(maxLeft);
//       let leftRoot = new TreeNode(maxLeft);
//       currRoot.left = leftRoot;
//       queue.push([leftRoot, [currRangeStart, currRootIdx - 1]]);
//     }
//   }
//   console.log(queue)
//   return root;
// };

// Recursive
const constructMaximumBinaryTree = (nums, leftIdx = 0, rightIdx = nums.length) => {
  if (leftIdx === rightIdx) return null;

  let maxIdx = leftIdx;
  let maxNum = nums[leftIdx];

  for (let i = leftIdx + 1; i < rightIdx; i++) {
    if (nums[i] > maxNum) {
      maxIdx = i;
      maxNum = nums[i];
    }
  }

  let root = new TreeNode(maxNum);

  root.left = constructMaximumBinaryTree(nums, leftIdx, maxIdx);
  root.right = constructMaximumBinaryTree(nums, maxIdx + 1, rightIdx);

  return root;
}


console.log(constructMaximumBinaryTree( [3, 2, 1, 6, 0, 5] ));
