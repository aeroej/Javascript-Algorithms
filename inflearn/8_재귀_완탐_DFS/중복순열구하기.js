let n = 3, m = 2;
let cnt = 0;
let res = [];

function DFS(v) {
  if (v > m) {
    cnt++;
    console.log(res.join(' '));
    return;
  }

  for (let i = 1; i <= n; i++) {
    res.push(i);
    DFS(v + 1);
    res.pop();
  }
}

DFS(1);
console.log(cnt);