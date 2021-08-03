const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 5 3
5 4
5 2
1 2
3 4
3 1`
).split('\n');

let [n, m, start] = stdin[0].split(' ').map(Number);

let graph = Array.from({ length: n + 1 }, (v) => (Array.from({ length: n + 1 }, v => 0)));
for (let i = 1; i <= m; i++) {
  let [n1, n2] = stdin[i].split(' ').map(Number)
  graph[n1][n2] = 1
  graph[n2][n1] = 1
}

const DFS = (start) => {
  let result = []
  let visited = Array.from({ length: n + 1 }, v => 0);
  
  const recursion = (v) => {
    visited[v] = 1
    result.push(v)

    for (let i = 0; i < n + 1; i++) {
      if (graph[v][i] && !visited[i]) recursion(i)
    }
  }

  recursion(start)
  return result;
}

const BFS = (v) => {
  let result = []
  let visited = Array.from({ length: n + 1 }, v => 0);

  let queue = []
  queue.push(v)

  while (queue.length) {
    let v = queue.shift()
    visited[v] = 1
    result.push(v)

    for (let i = 0; i < n + 1; i++) {
      if (graph[v][i] && !visited[i]) {
        queue.push(i)
        visited[i] = 1
      }
    }
  }

  return result;
}

console.log(DFS(start).join(' '))
console.log(BFS(start).join(' '))
