/*
유사한 코드
Array fill map Array fill map
Array(n).fill(x).map((v, i) => (i + 1) * v)
*/
function solution(x, n) {
  var answer = Array.from({length:n}, (v, i) => x*(i+1));
  return answer;
}
console.log(solution(-4, 2));
