let m = 2;
let arr = [3, 6, 9];
let res = [];
let cnt = 0;

function DFS(v) {
  if (v > m) {
    console.log(res.join(' '));
    cnt++;
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (res.includes(arr[i])) continue;
    res.push(arr[i]);
    DFS(v + 1);
    res.pop();
  }
}

DFS(1);
console.log(cnt);