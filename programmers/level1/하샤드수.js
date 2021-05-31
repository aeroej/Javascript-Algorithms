/*
split 코드
String(12).split('').map((v) => Number(v))
*/

function solution(x) {
  let sum = 0;
  let num = x;
  while(num) {
    sum += num%10;
    num = parseInt(num/10);
  }
  return x%sum ? false : true;
}

console.log(solution(12));
