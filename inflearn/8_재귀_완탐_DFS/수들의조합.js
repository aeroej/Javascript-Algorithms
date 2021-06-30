let k = 3;
let m = 6;
let arr = [2, 4, 5, 8, 12];

let cnt = 0;
let sum = 0;

function DFS(v, u) {
  if (v >= k) {
    if (sum % m === 0) cnt++;
    return;
  }

  for (let i = u + 1; i < arr.length; i++) {
    sum += arr[i];
    DFS(v + 1, i);
    sum -= arr[i];
  }
}

DFS(0, -1);
console.log(cnt);