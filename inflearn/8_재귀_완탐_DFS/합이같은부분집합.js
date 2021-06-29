let arr = [1, 3, 5, 6, 7, 10];
let sum = 0;
let flag = false;
let total = arr.reduce((a, b) => a + b, 0);

function DFS(n) {
  if (flag) return;
  if (n >= arr.length) {
    if (sum === total - sum) flag = true;
    return;
  }
  sum += arr[n];
  DFS(n + 1);
  sum -= arr[n];
  DFS(n + 1);
}

DFS(0);
console.log(flag ? "YES" : "NO");