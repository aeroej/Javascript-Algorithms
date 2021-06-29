let res = '';

function DFS(n) {
  if (n === 0) return;
  DFS(Math.floor(n / 2));
  res += n % 2 + '';
}

DFS(11);
console.log(res);