function LCM(m, n) {
  let lcm = m * n;
  while (m % n) [m, n] = [n, m % n];
  return lcm / n;
}

function solution(arr) {
  let lcm = LCM(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) lcm = LCM(lcm, arr[i]);
  return lcm;
}

console.log(solution([2, 6, 8, 14]))