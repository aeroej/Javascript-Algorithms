let res = '';

function DFS(n) {
  if (n >= 8) return;
  DFS(n * 2);
  DFS(n * 2 + 1);
  res += n + '';
}

DFS(1);
console.log(res);