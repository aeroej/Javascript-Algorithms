# [๐ฉ๐ปโ๐ป๋ฌธ์ ๋งํฌ](https://www.acmicpc.net/problem/1260)

[๋ฐฑ์ค 1260] DFS์ BFS (Javascript))
[![๋ฐฑ์ค](../๋ฐฑ์คํ์ง.png)](https://www.acmicpc.net/problem/1260)


<br>

# โ๏ธIdea Sketch

## **2021-07-30**

#### 1. ๋ฐฑ์ค ์๋ ฅ๊ฐ ๋ฐ๊ธฐ
```javascript
const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()  // ๋ฐฑ์ค์ ์ฝ๋ ์ ์ถํ์ ๋
  : `5 5 3
5 4
5 2
1 2
3 4
3 1`  // IDE์์ ์คํํ  ๋
).split('\n');
```

#### 2. ์๋ฐฉํฅ ๊ทธ๋ํ ์ ์ํ๊ธฐ
```javascript
let graph = Array.from({ length: n + 1 }, (v) => (Array.from({ length: n + 1 }, v => 0)));
for (let i = 1; i <= m; i++) {
  let [n1, n2] = stdin[i].split(' ').map(Number)
  graph[n1][n2] = 1
  graph[n2][n1] = 1
}
```

#### 3. DFS๋ ์ฌ๊ท์ ์ผ๋ก ๊ตฌํ, BFS๋ while๋ฌธ์ผ๋ก ๊ตฌํ

<br>

# โ๏ธ์์ค์ฝ๋

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
).split('\n');  // ํ์ผ

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
