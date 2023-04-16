// 是英文字母时则用该英文字母的后一个字母替换，同时字母变换大小写 -> 如字母a时则替换为B 字母Z时则替换为a
// 是数字时则把该数字加1 -> 如0替换1，1替换2，9替换0
// 其他字符不做变化
/**
 * 输入：abcdefg
 * 输出：BCDEFGH
 */
console.log(encryptStr('uvwxyz'))
console.log(decryptStr('VWXYZA'))
function encryptStr (str = '') {
  let res = ''
  for (let s of str) {
    res += transformChar(s)
  }
  return res
}

function decryptStr (str = '') {
  let res = ''
  for (let s of str) {
    res += revertChar(s)
  }
  return res
}

function transformChar (s = '') {
  if (s === 'z') return 'A'
  if (s === 'Z') return 'a'
  if (s === '9') return '0'
  if (/[a-z]/.test(s)) {
    return nextString(s.toUpperCase())
  }
  if (/[A-Z]/.test(s)) {
    return nextString(s.toLowerCase())
  }
  if (/[0-9]/.test(s)) {
    return `${Number(s) + 1}`
  }
  return s
}

function revertChar (s = '') {
  if (s === 'A') return 'z'
  if (s === 'a') return 'Z'
  if (s === '0') return '9'
  if (/[a-z]/.test(s)) {
    return preString(s.toUpperCase())
  }
  if (/[A-Z]/.test(s)) {
    return preString(s.toLowerCase())
  }
  if (/[0-9]/.test(s)) {
    return `${Number(s) - 1}`
  }
  return s
}

function preString (s) {
  return String.fromCodePoint(s.codePointAt() - 1)
}

function nextString (s) {
  return String.fromCodePoint(s.codePointAt() + 1)
}
