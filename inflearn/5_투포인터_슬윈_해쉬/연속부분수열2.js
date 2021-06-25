function solution(arr, m) {
  let left = 0, right = 0;
  let sum = arr[0];
  let cnt = 0;

  while (left < arr.length && right < arr.length) {
    if (sum <= m) {
      cnt += right - left + 1;
      sum += arr[++right];
    }
    else if (sum > m) sum -= arr[left++];
  }

  return cnt;
}

console.log(solution([1, 3, 1, 2, 3], 5))  // 10