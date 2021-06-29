function count(arr, mid) {
  let cnt = 1, index = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= index + mid) {
      cnt++;
      index = arr[i];
    }
  }

  return cnt;
}

function solution(arr, target) {
  let res = 0;
  arr.sort((a, b) => a - b);
  let left = arr[0], right = arr[arr.length - 1];
  // 정렬이 필요없다면 let left = Math.min(...arr), right = Math.max(...arr);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cnt = count(arr, target);

    if (cnt <= mid) {
      res = mid;
      right = mid - 1;
    }
    else if (cnt > mid) left = mid + 1;
  }

  return res;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(arr, 3));