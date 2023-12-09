// 合并所有重叠的区间
// [[1,3],[2,6],[8,10],[15,18]]
// [[1,6],[8,10],[15,18]]
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals = []) => {
  let temp = []
  intervals.sort((a, b) => a[0] - b[0])
  const len = intervals.length
  for (let i = 1; i <= len; i++) {
    let [st, ed] = intervals[i - 1]
    while (i < len && intervals[i][0] <= ed) {
      ed = Math.max(ed, intervals[i][1])
      i++
    }
    temp.push([st, ed])
  }
  return temp
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
