/**
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数
 * 例如：-121 --> false
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  x = x.toString()
  const len = x.length
  const count = len / 2
  let flag = true
  for (let i = 0; i < count; i++) {
    if (x[i] !== x[len - 1 - i]) {
      flag = false
    }
  }
  return flag
}

console.log(isPalindrome('-121'))
console.log(isPalindrome('12321'))
