// ["eat", "tea", "tan", "ate", "nat", "bat"]
// [["bat"],["nat","tan"],["ate","eat","tea"]]
const groupAnagrams = (strs = []) => {
  const len = strs.length
  const map = {}
  for (let i = 0; i < len; i++) {
    const s = strs[i]
    const key = s.split('').sort().join('')
    if (map[key]) {
      map[key].push(s)
    } else {
      map[key] = [s]
    }
  }
  return Object.values(map)
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))

const permute = (str = '') => {
  const res = []
  const dfs = (path = [], current = []) => {
    if (path.length === str.length) {
      res.push(path.join(''))
      return
    }
    for (let i = 0; i < str.length; i++) {
      if (current.includes(i)) {
        continue
      }
      path.push(str[i])
      current.push(i)
      dfs(path, current)
      path.pop()
      current.pop()
    }
  }
  dfs()
  return res
}

// console.log(permute('abc'))
