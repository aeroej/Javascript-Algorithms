/*
유클리드 호제법

최대공약수 GCD(Greatest Common Divisor) 공통된 약수 중 가장 큰 수
최소공배수 LCM(Least Common Multiple) 공통된 배수 중 가장 작은 수, 두 자연수의 곱 / 최대공약수
*/

function solution(n, m) {
  // if (n>m) [n, m] = [m, n];
  let lcm = n*m;
  while(m%n) [m, n] = [n, m%n];
  return [n, lcm/n];
}

console.log(solution(3, 12))