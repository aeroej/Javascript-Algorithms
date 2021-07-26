const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `5 20
4 42 40 26 46`
).split('\n');

let [N, M] = stdin[0].split(' ').map(Number);
let input = stdin[1].split(' ').map(Number).sort((a, b) => a-b);


function getTree (mid) {
  let sum = input.reduce((a, b) => {
    if (b > mid) return a+b-mid;
    return a;
  }, 0);
  return sum;
}

// 본론
let left = 0, right = input[input.length - 1];
let result = 0;

while (left <= right) {
  let mid = parseInt((left + right) / 2);
  let tree = getTree(mid);
  if (tree === M) {
    result = mid;
    break;
  }
  else if (tree > M) {
    if (result < mid) result = mid;
    left = mid + 1;
  }
  else right = mid - 1;
}

console.log(result);