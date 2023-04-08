/**
 * 反转整数
 * 1. 32 位的有符号整数 x ，返回将 x 数字部分反转后的结果
 * 2. 反转后整数超过 32 位的的范围 [−2**31,  2**31 − 1] 返回 0
 * @param {Number} num
 * @returns {Number} 反转后的数字
 * @description TODO 考虑使用%取出首位c，然后剩余部分r*10+c，循环直到数字反转
 */
const reverse = function (num) {
  const str = num.toString()
  let reverseStr = '', sym = ''
  for (let i = 0; i < str.length; i++) {
    if (num < 0 && i === 0) {
      sym = str[0]
    } else {
      reverseStr = str[i] + reverseStr
    }
  }
  reverseStr = sym + reverseStr
  if (!isSafeInteger(parseFloat(reverseStr))) return 0
  return parseFloat(reverseStr)
}

function isSafeInteger (num) {
  return num >= -Math.pow(2,31) && num < Math.pow(2,31)
}
