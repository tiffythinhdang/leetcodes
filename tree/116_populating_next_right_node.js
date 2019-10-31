// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

class Node {
  constructor(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
};

const connect = (root) => {
  let queue = [ [root] ];

  while (queue.length > 0) {
    currNodes = queue.shift();
    nextNodes = [];

    for (let idx = 0; idx < currNodes.length; idx++) {
      let curr = currNodes[idx];
      curr.next = currNodes[idx + 1] || null;
      if (curr.left) nextNodes.push(curr.left);
      if (curr.right) nextNodes.push(curr.right);
    }

    if (nextNodes.length > 0) queue.push(nextNodes);
  }

  return root;
};

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

console.log(node1);
console.log(connect(node1));
