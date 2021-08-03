const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `4 2
2 3 1 1`
).split('\n');

let [N, M] = stdin[0].split(' ').map(Number);
let input = stdin[1].split(' ').map(Number);

let result = 0;
let left = 0, right = 0;
let sum = input[left];

while(left < N && right < N) {
  if (sum === M) {
    result++;
    sum += input[++right];
  }
  else if (sum < M) sum += input[++right];
  else if (sum > M) sum -= input[left++];
}

console.log(result);