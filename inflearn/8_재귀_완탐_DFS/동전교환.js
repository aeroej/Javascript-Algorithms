let arr = [1, 2, 5];
let target = 15;
let sum = 0;
let min = Number.MAX_SAFE_INTEGER;

function DFS(v) {
  if (sum >= target) {
    if (sum === target) min = Math.min(min, v);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    DFS(v + 1);
    sum -= arr[i];
  }
}

DFS(0);
console.log(min);