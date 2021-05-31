function solution(n){  
  let arr = Array.from({length:n+2}, () => 0);
  arr[0] = 1; // 돌다리가 없어도 한번은 건넘
  arr[1] = 2;
  for (let i=2; i<=n; i++) {
    arr[i] = arr[i-2] + arr[i-1];
  }
  return arr[n];
}

console.log(solution(7));