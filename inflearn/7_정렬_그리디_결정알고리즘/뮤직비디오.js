function count(mid, arr) {
    let cnt = 1;
    let sum = 0;

    for (let i = arr.length - 1; i >= 0; i--) {
        sum += arr[i];
        if (sum > mid) {
            cnt++;
            sum = arr[i]
        }
    }
    return cnt;
}

function solution(m, arr) {
    let left = arr[arr.length - 1], right = 0;
    for (let x of arr) right += x;
    arr.sort((a, b) => a - b);

    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        let cnt = count(mid, arr);

        if (cnt === m) return mid;
        else if (cnt < m) right = mid - 1;  // 저장용랑이 크다
        else if (cnt > m) left = mid + 1;  // 저장용량이 부족하다
    }
}