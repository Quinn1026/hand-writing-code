// 字符："X", "O", " "
// 赢的坐标
const winPos = [
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2'],
  ['0,0', '1,0', '2,0'],
  ['0,1', '1,1', '2,1'],
  ['0,2', '1,2', '2,2'],
  ['0,0', '1,1', '2,2'],
  ['0,2', '1,1', '2,0'],
]
const isWin = (pos = []) => {
  for (let i = 0; i < winPos.length; i++) {
    if (winPos[i].every(item => pos.includes(item))) {
      return true
    }
  }
  return false
}
// 1. X 比 O 多一个，则O不能赢
// 2. X 和 O 一样多，则X不能赢
const validTicTacToe = (board = []) => {
  const xLen = board.length
  const yLen = board[0].length
  let xCount = 0
  let oCount = 0
  let xPos = []
  let oPos = []
  for (let i = 0; i < xLen; i++) {
    for (let j = 0; j < yLen; j++) {
      const str = board[i][j]
      if (str === ' ') continue
      if (str === 'X') {
        xCount++
        xPos.push(`${i},${j}`)
      } else {
        oCount++
        oPos.push(`${i},${j}`)
      }
    }
  }
  if (oCount < 3 && (xCount === oCount || xCount === oCount + 1)) {
    return true
  }
  if (oCount >= 3) {
    if (xCount === oCount && !isWin(xPos)) {
      // x只要不赢就符合
      return true
    }
    if (xCount === oCount + 1 && !isWin(oPos)) {
      // o只要不赢就符合
      return true
    }
  }
  return false
}

// console.log(validTicTacToe(["O  ","   ","   "]))
// console.log(validTicTacToe(["XOX"," X ","   "]))
console.log(validTicTacToe(["XOX","O O","XOX"]))
