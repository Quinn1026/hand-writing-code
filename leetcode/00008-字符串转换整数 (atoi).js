/**
 * 1. 丢弃无用的前导空格
 * 2. 读取下一个字符为正还是负号，无符号则为正
 * 3. 读取数字字符，其后面的非数字字符都将舍弃
 * 4. 数字范围[−2**31,  2**31 − 1]，超出输出临界值，比如2**31 − 1
 * 5. 返回结果
 * @param {String} str
 */
function myAtoi (str) {
  // 还可以用parseInt ^-^
  const numStr = str.match(/^[ ]*([\+\-]?[0-9]+)/)
  if (!numStr) return 0
  const num = Number(numStr[1])
  if (!isSafeInteger(num)) {
    return num > 0 ? Math.pow(2,31) - 1 : -Math.pow(2,31)
  }
  return num
}
function isSafeInteger (num) {
  return num >= -Math.pow(2,31) && num < Math.pow(2,31)
}
