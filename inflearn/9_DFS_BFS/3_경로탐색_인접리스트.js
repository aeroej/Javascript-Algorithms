// BFS구먼,             
function solution(n, arr){  
  let cnt = 0;
  let visited = Array.from({length:n+1}, () => false);
  let graph = Array.from(Array(n+1), () => Array());
  for (let [x, y] of arr) graph[x].push(y);
  function DFS(v) {
    if (v === n) {
      cnt++;
      return;
    }
    else {
      for (let x of graph[v]) { // 2, 3, 4
        if (visited[x] === false) {
          visited[x] = true;
          DFS(x); // v+1이 아닌 것이 놀랍군 !!
          visited[x] = false;
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