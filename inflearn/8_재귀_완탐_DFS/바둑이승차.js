let arr = [81, 58, 42, 33, 61];
let c = 259;
let sum = 0;
let max = Number.MIN_SAFE_INTEGER;

function DFS(n) {
  if (n >= arr.length) {
    if (sum <= c) max = Math.max(max, sum);
    return;
  }
  sum += arr[n];
  DFS(n + 1);
  sum -= arr[n];
  DFS(n + 1);
}

DFS(0);
console.log(max);