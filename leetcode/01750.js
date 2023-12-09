const minimumLength = (s = '') => {
  const len = s.length
  let preIndex = 0,
    sufIndex = len - 1
  while (s[preIndex] === s[sufIndex] && preIndex < sufIndex) {
    const char = s[preIndex]
    while (s[preIndex] === char && preIndex <= sufIndex) {
      preIndex++
    }
    while (s[sufIndex] === char && preIndex <= sufIndex) {
      sufIndex--
    }
  }
  return sufIndex - preIndex + 1
}

console.log(minimumLength('cabaabac'))
console.log(minimumLength('aabccabba'))
console.log(minimumLength('caa'))
