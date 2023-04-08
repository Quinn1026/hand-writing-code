import {
  composeSync,
  composeAsync,
  composeLeft,
  composeRight,
  compose,
  composeImmediate
} from './index.js'

const a = () => { console.log('a') }
const b = () => { console.log('b') }
const c = () => { console.log('c') }
const fn0 = compose([a, b, c])
const fn1 = composeLeft([a, b, c])
const fn2 = composeRight([a, b, c])
fn0()
console.log('-------*--------')
fn1()
console.log('-------*--------')
fn2()
console.log('-------*--------')
composeImmediate([a, b, c])
// function AA (ctx, next) {
//   console.log('before: AA')
//   next()
//   console.log('after: AA')
// }
// function BB (ctx, next) {
//   console.log('before: BB')
//   next()
//   console.log('after: BB')
// }
// function CC (ctx, next) {
//   console.log('before: CC')
//   next()
//   console.log('after: CC')
// }
// composeSync([AA, BB, CC])()

// async function AAA (ctx, next) {
//   Promise.resolve().then(() => {
//     console.log('before: AAA')
//   })
//   await next()
//   console.log('after: AAA')
// }
// async function BBB (ctx, next) {
//   Promise.resolve().then(() => {
//     console.log('before: BBB')
//   })
//   await next()
//   console.log('after: BBB')
// }
// async function CCC (ctx, next) {
//   Promise.resolve().then(() => {
//     console.log('before: CCC')
//   })
//   await next()
//   console.log('after: CCC')
// }
// composeAsync([AAA, BBB, CCC])()
