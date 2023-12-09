// values - labels 一一对应
// numWanted 最多子项
// useLimit 最多重复label
// 子集之和 最大的子集

// values = [5,4,3,2,1], labels = [1,1,2,2,3], numWanted = 3, useLimit = 1

// values降序排列
const largestValsFromLabels = (values, labels, numWanted, useLimit) => {
  // 只需要排序索引就可以了
  const len = values.length
  const idx = Array.from({ length: len }, (_, i) => i)
  idx.sort((a, b) => values[b] - values[a])
  const labelCountMap = {}
  let res = 0, times = 0
  for (let i = 0; i < len; i++) {
    const value = values[idx[i]]
    const label = labels[idx[i]]
    if (!labelCountMap[label]) {
      labelCountMap[label] = 0
    }
    const count = labelCountMap[label]
    if (count < useLimit) {
      res += value
      times++
      labelCountMap[label]++
      if (times >= numWanted) {
        break
      }
    }
  }
  return res
}

console.log(largestValsFromLabels([5,4,3,2,1], [1,1,2,2,3], 3, 1))
console.log(largestValsFromLabels([5,4,3,2,1], [1,3,3,3,2], 3, 2))
console.log(largestValsFromLabels([9,8,8,7,6], [0,0,0,1,1], 3, 1))
console.log(largestValsFromLabels([2,6,1,2,6], [2,2,2,1,1], 1, 1))
