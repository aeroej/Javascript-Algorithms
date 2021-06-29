let res = [];

function DFS(n) {
  if (n > 3) {
    if (res.length > 0) console.log(res.join(' '));
    return;
  }
  res.push(n);
  DFS(n + 1);

  res.pop();
  DFS(n + 1);
}

DFS(1);
