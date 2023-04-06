/**
 * N字变换
 * 循环周期为 n = (2 * numRows - 2)
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * @example 循环的行数 0 1 2 3 2 1 0 1 2 3
 * 1  7
 * 2 68
 * 35 9
 * 4  0
 */
const convert = function (str, numRows) {
  if (numRows === 1 || str.length <= numRows) return str
  const arr = Array.from({ length: numRows }, () => '')
  const n = 2 * numRows - 2
  for (let i = 0; i < str.length; i++) {
    // 计算每个字符所在的行
    const x = i % n
    const row = x < numRows ? x : n - x
    arr[row] += str[i]
  }
  return arr.join('')
}

/**
 * N字变换，生成一个矩阵
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert1 = function (str, numRows) {
  const len = str.length
  if (len <= numRows || numRows === 1) {
    return str
  }
  const n1 = Math.floor(len / (2 * numRows - 2)) * (numRows - 1)
  const num = len % (2 * numRows - 2)
  let n2 = 1
  if (num > numRows) {
    n2 += (num - numRows)
  }
  const n = n1 + n2
  const arr = Array.from({ length: numRows }, () => Array.from({ length: n }))
  let row = 0, col = 0, count = 1
  arr[0][0] = str[0]
  for (let i = 1; i < len; i++) {
    if (count & 1 === 1) {
      // c是笔画的计数器
      // 奇数 行加一；偶数 行减一列加一
      row++
    } else {
      col++
      row--
    }
    arr[row][col] = str[i]
    if (i % (numRows - 1) === 0) {
      count++
    }
  }
  return arr.reduce((pre, cur) => {
    return pre + cur.filter(Boolean).join('')
  }, '')
}

console.log(convert('AB', 1))
