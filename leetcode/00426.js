const findRightInterval = (intervals = []) => {
  const len = intervals.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    map.set(intervals[i], i)
  }
  const res = Array.from({ length: len }, () => -1)
  intervals.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < len; i++) {
    // 测试用例没通过，加上此条件，若是 start >= end，则右区间是自身
    if (intervals[i][0] >= intervals[i][1]) {
      const index = map.get(intervals[i])
      res[index] = index
      continue
    }
    let j = i + 1
    while (j < len) {
      if (intervals[j][0] >= intervals[i][1]) {
        const curIndex = map.get(intervals[i])
        const rightIndex = map.get(intervals[j])
        res[curIndex] = rightIndex
        break
      }
      j++
    }
  }
  return res
}

console.log(findRightInterval([[1,2]]))
console.log(findRightInterval([[3,4],[2,3],[1,2]]))
console.log(findRightInterval([[1,4],[2,3],[3,4]]))
console.log(findRightInterval([[1,1],[3,4]]))
console.log(findRightInterval([[4,4]]))