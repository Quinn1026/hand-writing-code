/**
 * @param {string} s
 * @return {string[]}
 */
const letterCasePermutation = (s) => {
  let res = []
  const dfs = (path = [], i) => {
    if (s.length === path.length) {
      res.push([...path])
      return
    }
    while (i < s.length && isDigit(s[i])) {
      path.push(s[i])
      i++
    }
    if (s[i].codePointAt() < 91) {
      dfs([...path, s[i].toLowerCase()], i)
    } else {
      dfs([...path, s[i].toUpperCase()], i)
    }
  }
  dfs([], 0)
  return res
}
const isDigit = (s = '') => {
  return /[0-9]/.test(s)
}
const isLetter = (s = '') => {
  const charCode = s.codePointAt()
  return charCode >= 97 && charCode <= 122
}

console.log(letterCasePermutation('a1b2'))
