function solution(n, m){
  let cnt = 0;
  let ch = Array.from({length:n+1}, () => 0); // 순열중복방지 [1, 1] 금지, [1, 4], [4, 1] 허용
  let ch1 = Array.from({length:n+1}, () => 0); // 조합중복방지 [1, 4] --> [4, 1] 금지
  let tmp = Array.from({length:m}, () => 0); // 조합배열 
  function DFS(v) {
    if (v === m) { // v:0 첫번째로 뽑음, v:1 두번째로 뽑음, v:2 종료시점
      cnt++;
      console.log(tmp.join(' '));
      return;
    }
    else {
      for (let i=1; i<=n; i++) { // 1, 2, 3, 4
        if (ch[i] === 0 && ch1[i] === 0) {
          ch[i] = 1;
          tmp[v] = i;
          DFS(v+1);
          ch[i] = 0;
        }
        else ch1[i] = 1; // ch[i] === 1
      }
    }
  }
  DFS(0); // 첫번째로 뽑을 때
  return cnt;
}

console.log(solution(4, 2));