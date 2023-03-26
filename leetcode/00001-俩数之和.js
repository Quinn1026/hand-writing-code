/**
 * 给定一个整数数组，找出 和 为目标值 target 的两个整数，返回它们的数组下标。
 * @param {number[]} nums 源整数数组
 * @param {number} target 目标值
 * @return {number[]} 下标
 * @example
 * 输入：nums = [2, 7, 11, 15], target = 9
 * 输出：[0, 1]
 */
const twoSum = function (nums, target) {
  // 双层循环，无脑求和
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === diff) {
        return [i, j]
      }
    }
  }
}

const twoSum2 = function (nums, target) {
  // 设置map，保存当前的index和diff
  // 判断接下来元素是否存在与map中，若存在则结果为：map[diff]存储的索引值和当前索引值
  let m = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (m.has(nums[i])) {
      return [m.get(nums[i]), i]
    }
    const diff = target - nums[i]
    m.set(diff, i)
  }
}

console.log(twoSum2([2, 7, 11, 15], 9))
console.log(twoSum2([3, 2, 4], 6))
console.log(twoSum2([3, 3], 6))
