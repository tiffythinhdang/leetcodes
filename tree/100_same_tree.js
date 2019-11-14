const isSameTree = (p, q) => {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

  // case 1:  both empty => true
  // case 2:  1 node => if val1 === val2 => true, otherwise false
  // case 3:  3 nodes => root val the same, node left the same, node right the same => true,
  //          otherwise false

  // 1. traverse the tree;
  // 2. compare the currNode1 with currNode2
  // 3. if the same, move to left and right and tranverse down, and repeat the entire process till you get all the nodes
  // 4. if different, return false