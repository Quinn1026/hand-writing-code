const countBattleships = (board = []) => {
  const xLen = board.length
  if (xLen === 0) return 0
  const yLen = board[0].length
  let x = 0, y = 0, res = 0
  while (x < xLen) {
    y = 0
    while (y < yLen) {
      if (board[x][y] !== 'X') {
        y++
        continue
      }
      board[x][y] = '.'
      res++
      // →
      let right = y + 1
      while (right < yLen && board[x][right] === 'X') {
        board[x][right] = '.'
        right++
      }
      // ↓
      let bottom = x + 1
      while (bottom < xLen && board[bottom][y] === 'X') {
        board[bottom][y] = '.'
        bottom++
      }
      y++
    }
    x++
  }
  return res
}

console.log(countBattleships([[".","."],["X","X"]]))
