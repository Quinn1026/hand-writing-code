/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
const countDistinct = (nums, k, p) => {
  const exist = [], len = nums.length
  for (let i = 0; i < len; i++) {
    let j = i
    let count = 0
    while (j < len) {
      if (isDivisible(nums[j], p)) {
        count++
      }
      if (count > k) {
        break
      }
      const temp = nums.slice(i, j + 1).toString()
      if (!exist.includes(temp)) {
        exist.push(temp)
      }
      j++
    }
  }
  return exist.length
}
const isDivisible = (num, p) => {
  return num % p === 0
}
console.log(countDistinct([10,2,17,7,20], 1, 10))
