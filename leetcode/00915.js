// return left.length
// [5,0,3,8,6] -> left = [5,0,3]，right = [8,6]
// 3
// [1,1,1,0,6,12] => left = [1,1,1,0]，right = [6,12]
// 4

// 915. 分割数组
const partitionDisjoint = (nums = []) => {
  const len = nums.length
  let i = 1, leftMax = nums[0], res = 1, tempMax = nums[0]
  while (i < len - 1) {
    tempMax = Math.max(tempMax, nums[i])
    if (leftMax > nums[i]) {
      leftMax = tempMax
      res = i + 1
    }
    i++
  }
  return res
}

console.log(partitionDisjoint([26,51,40,58,42,76,22,48,79,91]))
console.log(partitionDisjoint([5,0,3,8,6]))
console.log(partitionDisjoint([1,1,1,0,6,12]))
console.log(partitionDisjoint([1,1]))
