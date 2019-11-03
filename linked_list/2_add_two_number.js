// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;

  let root = new ListNode(null);
  let carryOver = 0;
  let currNode = root;

  while (l1 || l2) {
    let val1 = (l1 ? l1.val : 0);
    let val2 = (l2 ? l2.val : 0);
    let newVal = val1 + val2 + carryOver;
    if (newVal >= 10) {
      carryOver = 1;
      newVal = newVal % 10;
    } else {
      carryOver = 0;
    }
    currNode.next = new ListNode(newVal);
    currNode = currNode.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carryOver === 1) currNode.next = new ListNode(1);

  return root.next;
};
