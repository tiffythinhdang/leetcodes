// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

class Node {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
};

// Recursively
// const inOrderTraversal = (root) => {
//   if (!root) return [];
//   let order = [];

//   const leftTraversal = inOrderTraversal(root.left);
//   const rightTraversal = inOrderTraversal(root.right);

//   order.concat(leftTraversal).concat([root.val]).concat(rightTraversal);
// }

// const inOrderTraversal = (root, topK = [], k) => {
//   if (!root) return;

//   inOrderTraversal(root.left, topK, k);
//   if (topK.length === k) {
//     return;
//   }
  
//   topK.push(root.val);
//   if (topK.length === k) {
//     return;
//   }
  
//   inOrderTraversal(root.right, topK, k);
// }

// const kthSmallest = (root, k) => {
//   if (!root) return null;
//   const topK = [];
//   inOrderTraversal(root, topK, k);
//   return topK[k - 1];
// };

// Interatively
const kthSmallest = (root, k) => {
  let currNode = root;
  let order = [];
  let stack = [];

  while (currNode || stack.length > 0) {
    while (currNode) {
      stack.push(currNode);
      currNode = currNode.left;
    }
    currNode = stack.pop();
    if (k === 1) return currNode.val;
    order.push(currNode.val);
    k--;
    currNode = currNode.right;
  }
}


let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node4.left = node2;
node4.right = node6;
node2.left = node1;
node2.right = node3;
node6.left = node5;
node6.right = node7;

console.log(inOrderTraversal(node4))
console.log(kthSmallest(node4, 1))
console.log(kthSmallest(node4, 2))
console.log(kthSmallest(node4, 3))
