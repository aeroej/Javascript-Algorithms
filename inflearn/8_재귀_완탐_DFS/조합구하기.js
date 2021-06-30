let res = [];
let n = 4, m = 2;
let cnt = 0;

function DFS(v, u) {
  if (v >= m) {
    console.log(res.join(' '));
    cnt++;
    return;
  }

  for (let i = u + 1; i <= n; i++) {
    res.push(i);
    DFS(v + 1, i);
    res.pop();
  }
}

DFS(0, 0);
console.log(cnt);