
function lengthOfLongestSubstring (str) {
  if (str.length <= 1) return str.length
  let temp = '', maxlength = 0
  for (let i = 0; i < str.length; i++) {
    if (temp.includes(str[i])) {
      console.log(temp)
      if (temp.length > maxlength) {
        maxlength = temp.length
      }
      const idx = temp.indexOf(str[i])
      temp = temp.slice(idx + 1)
      temp += str[i]
    } else {
      temp += str[i]
    }
  }
  console.log(temp)
  if (temp.length > maxlength) {
    maxlength = temp.length
  }
  return maxlength
}
// "abcabcbb" -> abc 3
// "bbbbb" -> b 1
// "pwwkew" -> wke 3
console.log(lengthOfLongestSubstring('pwwkew'))