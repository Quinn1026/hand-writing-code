/**
 * 洋葱模型 - 同步执行
 * @param {Array} middleware 中间件函数列表
 * @returns {Function}
 */
export function composeSync (middleware = []) {
  return function (ctx = {}, next = null) {
    return dispatch(0)
    function dispatch (i) {
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      // 走到最后一个中间件
      if (!fn) return
      // 返回值也会传递
      return fn(ctx, dispatch.bind(null, ++i))
    }
  }
}
/**
 * 洋葱模型 - 异步执行
 * @param {Array} middleware 中间件函数列表
 * @param {Object} ctx 中间件之间传递的对象
 */
export function composeAsync (middleware = []) {
  return function (ctx = {}) {
    const dispatch = (i) => {
      if (i >= middleware.length) return Promise.resolve()
      const fn = middleware[i]
      return Promise.resolve(fn(ctx, () => dispatch(++i)))
    }
    return dispatch(0)
  }
}
/** 合并函数 - 自左向右执行 */
export function composeLeft (fns = []) {
  return function (...args) {
    // 函数列表为空 直接返回参数列表
    if (fns.length === 0) return args
    // 函数列表为1 取出直接执行
    if (fns.length === 1) return fns[0](...args)
    // 自左向右执行
    return fns.reduce((pre, cur) => {
      // 第一次执行pre是函数体，后续都是函数返回的结果
      if (typeof pre === 'function') {
        return cur(pre(...args))
      }
      return cur(pre)
    })
  }
}
/** 合并函数 - 自右向左执行 */
export function composeRight (fns = []) {
  return function (...args) {
    // 函数列表为空 直接返回参数列表
    if (fns.length === 0) return args
    // 函数列表为1 取出直接执行
    if (fns.length === 1) return fns[0](...args)
    // 自右向左执行
    return fns.reduceRight((pre, cur) => {
      // 第一次执行pre是函数体，后续都是函数返回的结果
      if (typeof pre === 'function') {
        return cur(pre(...args))
      }
      return cur(pre)
    })
  }
}
/** 合并函数 - 自右向左执行 */
export function compose (fns = []) {
  if (fns.length === 0) return (...args) => args
  if (fns.length === 1) return fns[0]
  // 自右向左执行
  return fns.reduceRight((pre, cur) => (...args) => cur(pre(...args)))
}
/** 合并函数 - 立即自右向左执行 */
export function composeImmediate (fns = []) {
  if (fns.length === 0) return args
  if (fns.length === 1) return fns[0](...args)
  // 自右向左执行
  return fns.reduceRight((pre, cur) => (...args) => cur(pre(...args)))()
}
