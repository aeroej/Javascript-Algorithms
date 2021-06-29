let n = 5;
let res = 1;

function DFS(v) {
  if (v > n) return;
  res *= v;
  DFS(v + 1);
}

DFS(1);
console.log(res);