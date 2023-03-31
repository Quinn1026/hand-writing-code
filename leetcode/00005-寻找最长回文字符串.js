/**
 * @param {string} str
 * @return {string}
 */
const longestPalindrome = function (str = '') {
  let max = ''
  // 以每个字符为中心，双指针比较两边字符
  // 回文的中心要分奇偶情况
  for (let i = 0; i < str.length; i++) {
    helper(i, i)
    helper(i, i + 1)
  }
  function helper (left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--
      right++
    }
    // while多执行一次，所以left+1，right+1-1
    const currentMax = str.slice(left + 1, right)
    if (currentMax.length > max.length) {
      max = currentMax
    }
  }
  return max
}

console.log(longestPalindrome('zabbde'))