# [👩🏻‍💻문제링크](https://www.acmicpc.net/problem/1260)

[백준 1260] DFS와 BFS (Javascript))
[![백준](../백준표지.png)](https://www.acmicpc.net/problem/1260)


<br>

# ✍️Idea Sketch

## **2021-07-30**

#### 1. 백준 입력값 받기
```javascript
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()  // 백준에 코드 제출했을 때
  : `5 5 3
5 4
5 2
1 2
3 4
3 1`  // IDE에서 실행할 때
).split('\n');
```

#### 2. 양방향 그래프 정의하기
```javascript
let graph = Array.from({ length: n + 1 }, (v) => (Array.from({ length: n + 1 }, v => 0)));
for (let i = 1; i <= m; i++) {
  let [n1, n2] = stdin[i].split(' ').map(Number)
  graph[n1][n2] = 1
  graph[n2][n1] = 1
}
```

#### 3. DFS는 재귀적으로 구현, BFS는 while문으로 구현

<br>

# ✍️소스코드

### **2021-07-30**

```Javascript
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 5 3
5 4
5 2
1 2
3 4
3 1`
).split('\n');  // 테케

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
```
