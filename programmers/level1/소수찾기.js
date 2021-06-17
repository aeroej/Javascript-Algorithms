  function solution(n) {
    let cnt = 0;
    let arr = Array.from({length:n+1}, () => 0)
    for (let i=2; i<=n; i++) {
      if (arr[i] === 0) {
          cnt++;
          for (let j=1; i*j<=n; j++) arr[i*j] = 1
      }
    }
    return cnt
  }
  
  console.log(solution(10))
  // result 4