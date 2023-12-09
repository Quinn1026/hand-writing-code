const map = {
  '(': ')',
  '[': ']',
  '{': '}',
}
const isValid = (str = '') => {
  const stack = []
  for (let s of str) {
    if (['(', '[', '{'].includes(s)) {
      stack.push(s)
      continue
    }
    const temp = stack.pop()
    if (s !== map[temp]) {
      return false
    }
  }
  return !stack.length
}

console.log(isValid('()[]{}'))
console.log(isValid('{[()]}'))
console.log(isValid('{[(]}'))
