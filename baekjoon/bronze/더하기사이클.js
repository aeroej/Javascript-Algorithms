let fs = require('fs');
let input = fs.readFileSync('../stdin').toString().split('\n');
let N = parseInt(input[0]);

function solution(N) {
  let cnt = 0;
  let num = N;
  
  while (true) {
    let sum = parseInt(num%10 + num/10);
    num = (num%10)*10 + sum%10;
    cnt++;
    if (num === N) break;
  }
  return cnt;
}

console.log(solution(N))