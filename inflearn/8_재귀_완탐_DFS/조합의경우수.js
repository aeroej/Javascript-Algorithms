let c = 0;

function DFS(n, r) {
  if (r === 1 || n - r === 1) {
    c += n;
    return;
  }
  DFS(n - 1, r - 1);
  DFS(n - 1, r);
}

DFS(33, 19);
console.log(c);