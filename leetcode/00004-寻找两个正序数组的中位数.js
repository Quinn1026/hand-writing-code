/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  const sortList = [...nums1, ...nums2].sort((a, b) => a - b)
  const len = sortList.length
  const isOdd = (len & 1) === 1
  let middleIdx = 0
  if (isOdd) {
    middleIdx = (len - 1) / 2
    return sortList[middleIdx]
  } else {
    middleIdx = len / 2
    return (sortList[middleIdx] + sortList[middleIdx - 1]) / 2
  }
}

console.log(findMedianSortedArrays([3], [-2, -1]))
