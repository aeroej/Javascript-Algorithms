// 1이면 전진하는데 visited의 관점에서 지나간 길은 -1 처리해줌
// dx dy 사용함
// 0 또는 -1에 둘러쌓인 순간 cnt++
// 첫번째 줄부터 전진전진
function solution(board){ 
  let cnt = 0;
  let dx = [-1, 0, 1, 0, -1, -1, 1, 1];
  let dy = [0, -1, 0, 1, -1, 1, -1, 1];
  function DFS(x, y) {
    for (let i=0; i<8; i++) {
      let nx = x + dx[i]
      let ny = y + dy[i]
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board.length) {
        if (board[nx][ny] === 1) { // 1이 섬임
          board[nx][ny] = -1; // visited
          DFS(nx, ny);
        }
      }
    }
  }
  // board[0][0] = -1
  // DFS(0, 0) --> 이것만 했다가는 첫번째 섬만 찾아냄;;
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board.length; j++) {
      if (board[i][j] === 1) {
        board[i][j] = -1;
        cnt++;
        DFS(i, j);
      }
    }
  }
  return cnt;
}

let arr= [[1, 1, 0, 0, 0, 1, 0], 
          [0, 1, 1, 0, 1, 1, 0],
          [0, 1, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 0, 1, 1],
          [1, 1, 0, 1, 1, 0, 0],
          [1, 0, 0, 0, 1, 0, 0],
          [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));

