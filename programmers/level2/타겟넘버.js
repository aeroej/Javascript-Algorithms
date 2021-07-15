function solution(numbers, target) {
  let cnt = 0;
  let sum = 0;

  function DFS(v) {
    if (v === numbers.length) {
      if (sum === target) cnt++;
      return;
    }
    sum += numbers[v];
    DFS(v+1);
    sum -= numbers[v]*2;
    DFS(v+1);
    sum += numbers[v];
  }
  DFS(0);
  return cnt;
}
console.log(solution([1, 1, 1, 1, 1],	3));
