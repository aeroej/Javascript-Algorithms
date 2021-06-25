function solution(arr, k) {
  let left = 0, right = k - 1;
  let sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i];
  let max = sum;

  while (right < arr.length) {
    sum -= arr[left++];
    sum += arr[++right];
    max = sum > max ? sum : max;
  }

  return max;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3))  // 56