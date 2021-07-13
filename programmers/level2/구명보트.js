function solution(arr, limit) {
  let cnt = 0;

  arr.sort((a, b) => a - b);
  let left = 0, right = arr.length - 1;
  let sum = arr[left] + arr[right];
  let flag = false;  // sum에 left를 2번 이상 더한 경우 true

  while (left <= right) {
    if (left === right) return ++cnt;
    if (sum === limit) {
      cnt++;
      flag = false;
      sum = arr[++left] + arr[--right];
    }
    else if (sum > limit) {
      cnt++;
      flag = false;
      sum = arr[left] + arr[--right];
    }
    else if (sum < limit) {
      flag = true;
      sum += arr[++left];
    }
  }
  return cnt;
}

console.log(solution([70, 80, 50],	100));