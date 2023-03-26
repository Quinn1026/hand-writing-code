/**
 * 防抖函数：触发一次之后，需要等待一段时间才能再次触发
 * 1. fn 触发函数
 * 2. wait 等待时间
 */
function debounce (fn = () => {}, wait = 0) { // 后触发
  let timer = null
  return function (...args) {
    clearTimeout(timer) // 时间内再次触发，清除上一次定时器
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}
function debounceImmediately (fn = () => {}, wait = 0) { // 先触发
  let timer = null
  let flag = true // 是否可执行函数
  return function (...args) {
    if (flag) {
      fn.apply(this, args)
      flag = false
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      flag = true
    }, wait)
  }
}
