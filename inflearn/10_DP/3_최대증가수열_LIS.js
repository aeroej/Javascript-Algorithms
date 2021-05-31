function solution(arr){
  let n = arr.length;
  let cnt = Array.from({length:n}, () => 0);
  cnt[0] = 1;
  for (let i=1; i<n; i++) { // 찾는 값 
    let max = 1;
    for (let j=0; j<i; j++) {
      if (arr[j] < arr[i]) max = Math.max(max, cnt[j]+1);
    }
    cnt[i] = max;
  }
  return Math.max(...cnt);
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));