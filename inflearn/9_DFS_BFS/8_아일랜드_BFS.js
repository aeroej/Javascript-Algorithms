// queue queue.push() while(queue.length) v=queue.shift queue.push()
// =를 써야할 때 ===를 써서 헛발질하는 경우가 있다.
function solution(board) {
  let cnt = 0;
  let queue = [];
  let dx = [-1, 0, 1, 0, -1, -1, 1, 1];
  let dy = [0, -1, 0, 1, -1, 1, -1, 1];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = -1;
        cnt++;
        queue.push([i, j]);
        while (queue.length > 0) {
          let [x, y] = queue.shift();
          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
              if (board[nx][ny] === 1) {
                board[nx][ny] = -1;
                queue.push([nx, ny]);
                board[nx][ny] = 1;
              }
            }
          }
        }
      }
    }
  }
  return cnt;
}


let arr = [[1, 1, 0, 0, 0, 1, 0],
[0, 1, 1, 0, 1, 1, 0],
[0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 1, 0, 1, 1],
[1, 1, 0, 1, 1, 0, 0],
[1, 0, 0, 0, 1, 0, 0],
[1, 0, 1, 0, 1, 0, 1]];

console.log(solution(arr));