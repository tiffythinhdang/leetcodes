// const invertTree = (root) => {
//   if (!root) return root;
//   let left = invertTree(root.left);
//   let right = invertTree(root.right);
//   root.left = right;
//   root.right = left;
//   return root;
// };


const invertTree = (root) => {
  if (!root) return root;
  let queue = [root];

  while (queue.length > 0) {
    let currRoot = queue.shift();
    let tempt = currRoot.left;
    currRoot.left = currRoot.right;
    currRoot.right = tempt;
    if (currRoot.left) queue.push(currRoot.left);
    if (currRoot.right) queue.push(currRoot.right);
  }

  return root;
};