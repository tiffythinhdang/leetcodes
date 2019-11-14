const isSubtree = function (s, t) {
  if (!s && !t) return true;
  let queue = [s];

  while (queue.length !== 0) {
    let currNode = queue.shift();
    let attempt = checkSubtree(currNode, t);
    if (attempt) return true;
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }

  return false;
};

const checkSubtree = function (main, sub) {
  if (!main && !sub) return true;
  if (!main || !sub) return false;

  if (main.val === sub.val) {
    return checkSubtree(main.left, sub.left) && checkSubtree(main.right, sub.right);
  } else {
    return false;
  }
}

// Unique numbers or can be repeated?
// What to return if both empty?
// Gureanteed valid binary tree?

// case 1:  both empty => return true;
// case 2:  s empty && t not empty => return false;
// case 3:  s not empty && t empty => return true;
// case 4:  1 node, if val the same => return true; else => false
// case 5:  3 node s, 1 node t:
//          if s.val ===  t.val => return true
//          if s.val !== t.val, call on (s.left, t) || (s.right, t)

// 1. start at the root, check case 1 -> 3
// 2. if root val is the same, check next pointer (s.left, t.left) && (s.right && t.right)
//    until we hit one of the base case 1 -> 4. 
//    If true was return => return true. 
//    If false was return => return to the initial root, tranverse to the left and right to //    see if the subtree is there.
// 3. Tranverse the entire s, do not find subtree t, return false