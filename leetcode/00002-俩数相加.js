function ListNode (val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}
/**
 * 链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let curry = 0,
      res = new ListNode(),
      l3 = res // 临时节点
  while (l1 || l2) {
    if (!l1) {
      l1 =  new ListNode()
    }
    if (!l2) {
      l2 =  new ListNode()
    }
    let v1 = parseInt(l1.val),
        v2 = parseInt(l2.val)
    let v = v1 + v2 + curry
    curry = parseInt(v / 10)
    l3.val = v % 10
    l3.next = (l1.next || l2.next)
      ? new ListNode()
      : curry !== 0
        ? new ListNode(curry)
        : null
    l1 = l1.next
    l2 = l2.next
    l3 = l3.next
  }
  return res
}
