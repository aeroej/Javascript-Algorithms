/*
삼항연산자 많이 쓰기
num%2인지아닌지 확인하므로 parseInt를 쓸 필요X
*/

function solution(num) {
  for (let i=0; i<500; i++) {
    if (num === 1) return i;
    num = num%2 ? num*3+1 : num/2;
  }
  return -1; 
}

console.log(solution(6));