let res = [];

function DFS(n) {
  if (n > 1) DFS(n - 1);
  res.push(n);
}

DFS(3);

console.log(res.join(' '));