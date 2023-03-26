/**
 * 节流函数：每隔一段时间就触发一次
 * 1. fn 触发函数
 * 2. wait 间隔时间
 */
function throttle (fn = emptyFn, wait = 0) { // 后触发
  let oldTime = Date.now()
  return function (...args) {
    let newTime = Date.now()
    if (newTime - oldTime > wait) {
      fn.apply(this, args)
      oldTime = newTime
    }
  }
}
function throttleImmediately (fn = emptyFn, wait = 0) { // 先触发
  let oldTime = Date.now()
  let flag = true
  return function (...args) {
    let newTime = Date.now()
    if (flag) {
      fn.apply(this, args)
      flag = false
    }
    if (newTime - oldTime > wait) {
      flag = true
      oldTime = newTime
    }
  }
}
