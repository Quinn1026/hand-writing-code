// 输入：A Famous Saying: Much Ado About Nothing (2012/8).
// 输出：A aaAAbc dFgghh: iimM nNn oooos Sttuuuy (2012/8).
/**
 * 规则：
 * 1. 英文字母从 A 到 Z 排列，不区分大小写
 * 2. 同一个英文字母的大小写同时存在时，按照输入顺序排列
 * 3. 非英文字母的其它字符保持原来的位置
 */
function handleSortString (str = '') {
  const pureLetterStr = str.replace(/[^a-zA-Z]/g, '')
  const sortLetters = pureLetterStr.split('').sort((a, b) => a.toLowerCase().codePointAt() - b.toLowerCase().codePointAt())
  console.log(sortLetters)
  let res = ''
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      res += sortLetters.shift()
    } else {
      res += str[i]
    }
  }
  return res
}

console.log(handleSortString('A Famous Saying: Much Ado About Nothing (2012/8)'))
