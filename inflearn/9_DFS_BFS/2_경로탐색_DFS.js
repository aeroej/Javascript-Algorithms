// 1에서 5로 가는 가지 수는 총 6개

function solution(n, arr){  
  let cnt = 0;
  let visited = Array.from({length:n+1}, ()=>false);
  let graph = Array.from(Array(n+1), ()=>Array(n+1).fill(0));
  for (let x of arr) graph[x[0]][x[1]] = 1;
  function DFS(v) {
    if (v === n) {
      cnt++;
      return;
    }
    else {
      for (let i=1; i<=n; i++) {
        if (graph[v][i] === 1 && visited[i] === false) {
          visited[i] = true;
          DFS(i);
          visited[i] = false;
        }
      }
    }
  }
  visited[1] = true;
  DFS(1);
  return cnt;
}

let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));