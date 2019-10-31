// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

class Node {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
};

const inOrderTraversal = (root) => {
  if (!root) return [];
  let order = [];

  const leftTraversal = inOrderTraversal(root.left);
  const rightTraversal = inOrderTraversal(root.right);

  return order.concat(leftTraversal).concat([root.val]).concat(rightTraversal);
}

const kthSmallest = (root, k) => {
  if (!root) return null;
  let orderAscending = inOrderTraversal(root);
  return orderAscending[k - 1];
};

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
