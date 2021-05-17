function solution(m, arr) {
    let cnt = 0;
    let left = 0, right = 1;
    let sum = arr[left] + arr[right];
    while (left<arr.length && right<arr.length) {
        if (arr[left] < m) cnt++;
        if ()
    }
    return cnt;
}

let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));