// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
//  * Definition for a binary tree node.
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }

const zigzagLevelOrder = (root) => {
  if (!root) return [];
  let order = [];
  let queue = [ [root] ];
  let leftToRight = false;

  while (queue.length > 0) {
    let nextLevel = []
    let nodesForCurrLevel = queue.shift();
    order.push( nodesForCurrLevel.map(node => node.val) );

    nodesForCurrLevel = nodesForCurrLevel.reverse();

    nodesForCurrLevel.forEach(node => {
      if (leftToRight) {
        if (node.left) nextLevel.push(node.left);
        if (node.right) nextLevel.push(node.right);
      } else {
        if (node.right) nextLevel.push(node.right);
        if (node.left) nextLevel.push(node.left);
      }
    })

    if (nextLevel.length > 0) queue.push(nextLevel);
    leftToRight = !leftToRight;
  }

  return order;
};