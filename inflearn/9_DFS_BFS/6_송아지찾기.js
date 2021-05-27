// 송아지 제자리, 현수 앞으로 1 뒤로 1 앞으로 5
// 최소 ?번의 점수로 송아지 찾기 가능
// 현수위치, 송아지위치
// queue queue.push() while(queue.length) v=queue.shift() queue.push()

// 5, 8 - 10, 8 - 9, 8 - 8, 8 v와 e가 3 차이날 때 +1만 하는 게 낫다
// 5, 8 - 6, 8 - 7, 8 - 8, 8
function solution(s, e){ 
  let cnt = 0;
  let queue = [];
  queue.push(s);
  while(queue.length) { // s===e인 순간 종료
    v = queue.shift(); // 8 아직 첫위치
    if (v === e) return cnt;
    if (v>e) queue.push(v-1);
    else { // v<e
      if (e-v > 3) queue.push(v+5);
      else queue.push(v+1); // e-v <= 3
    }
    cnt++;
  }
}
console.log(solution(8, 3)); // 5가 답, (5, 14) --> 3