// 투포인터 알고리즘

function solution(m, arr) {
    let cnt = 0;
    let p1 = 0, p2 = 1;
    let sum = arr[p1] + arr[p2];
    while(p1<arr.length && p2<arr.length) {
        if (sum === m) {
            cnt++;
            sum -= arr[p1++];
            sum += arr[++p2];
        }
        else if (sum > m) {
            sum -= arr[p1++];
        }
        else if (sum < m) {
            sum += arr[++p2];
        }
    }
    return cnt;
}

let a=[1, 1, 1, 1, 1];
console.log(solution(3, a));