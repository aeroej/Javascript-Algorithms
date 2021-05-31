function solution(m, coin){  
  let dp = Array.from({length:m+1}, () => Number.MAX_SAFE_INTEGER);
  dp[0] = 0, dp[1] = 1;
  for (let i=2; i<dp.length; i++) {
    for (let x of coin) {
      if (i-x >= 0) dp[i] = Math.min(dp[i], dp[i-x]+1);
    }
  }
  return dp[dp.length-1];
}

let arr=[1, 2, 5];
console.log(solution(15, arr));