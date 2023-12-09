// 对于每个下标 i（0 <= i < nums.length），将 nums[i] 变成 nums[i] + k 或 nums[i] - k
// nums 的 分数 是 nums 中最大元素和最小元素的差值
// 寻找最小的最大值 和 最大的最小值，然后取最小差值
const smallestRangeII = (nums = [], k = 0) => {
  nums.sort((a, b) => a - b)
  const len = nums.length
  let min = nums[0], max = nums[len - 1], res = max - min
  for (let i = 0; i < len - 1; i++) {
    const curMax = Math.max(max - k, nums[i] + k)
    const curMin = Math.min(nums[i + 1] - k, min + k)
    res = Math.min(res, curMax - curMin)
  }
  return res
}

console.log(smallestRangeII([1,3,6], 3))
