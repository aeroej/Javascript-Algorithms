function solution(arr) {
  let result = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i + 1) {
      result = i + 1;
    }
  }

  return result;
}

console.log(solution([3, 0, 6, 1, 5]))