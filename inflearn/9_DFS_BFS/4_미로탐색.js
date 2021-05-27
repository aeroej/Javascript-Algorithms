// 출발 (0, 0) 도착 (7, 7)
// 0이 통로
// 상하좌우 dx dy
// 출발점 - 도착점 가는 방법의 수는 총 8가지

function solution(board){  
  let cnt = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];
  function DFS(x, y) {
    if (x === 6 && y === 6) {
      cnt++;
      return;
    }
    else {
      for (let i=0; i<=4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx>=0 && nx<7 && ny>=0 && ny<7) {
          if (board[nx][ny] === 0) {
            board[nx][ny] = -1; // visited
            DFS(nx, ny);
            board[nx][ny] = 0; // not visited
          }
        }
      }
    }
  }
  arr[0][0] = -1; // visited
  DFS(0, 0);
  return cnt;
}

let arr= [[0, 0, 0, 0, 0, 0, 0], 
          [0, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 1, 0, 0, 0],
          [1, 1, 0, 1, 0, 1, 1],
          [1, 1, 0, 0, 0, 0, 1],
          [1, 1, 0, 1, 1, 0, 0],
          [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));