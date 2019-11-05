// https://leetcode.com/problems/intersection-of-two-linked-lists

const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  let setA = new Set();
  while ( headA ) {
    setA.add(headA);
    headA = head.next;
  }
  while (headB) {
    if (setA.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};
