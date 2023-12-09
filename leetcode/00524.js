// 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
// 输出："apple"

// 输入：s = "abpcplea", dictionary = ["a","b","c"]
// 输出："a"

// 返回长度最长且字母序最小的字符串
const findLongestWord = (s = '', dictionary = []) => {
  const res = []
  let len = 0
  for (let i = 0; i < dictionary.length; i++) {
    const dict = dictionary[i]
    if (dict.length >= len && isIncloud(s, dict)) {
      len = dict.length
      res.push(dict)
    }
  }
  if (res.length === 0) {
    return ''
  }
  if (res.length === 1) {
    return res[0]
  }
  const maxStrLength = res[res.length - 1].length
  if (maxStrLength === res[res.length - 2].length) {
    const temp = res.filter(item => item.length >= maxStrLength).sort()
    return temp[0]
  }
  return res[res.length - 1]
}

const isIncloud = (s = '', word = '') => {
  let i = 0, j = 0
  while (i < word.length && j < s.length) {
    while (j < s.length) {
      if (s[j] === word[i]) {
        i++
        j++
        break
      }
      j++
    }
  }
  return i === word.length
}

console.log(findLongestWord('abpcplea', ["ale","apple","monkey","plea"]))
console.log(findLongestWord('abpcplea', ["a","b","c"]))
