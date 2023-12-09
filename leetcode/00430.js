/**
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = (head) => {
  const stack = []
  let node = head
  while (head) {
    if (head.child) {
      stack.push(head.next)
    }
    const next = head.next
    node.next = next
    head = next
  }
  return node
}
