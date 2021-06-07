// left, right로 범위를 정하고 그 합이 m 이하인 경우
// left에서 right까지 생기는 모든 경우의 수를 구하면 됨 --> ??

function solution(m, arr) {
    let result = 0; // 최종 연속부분수열의 개수
    let lt = 0, rt = 0;
    let sum = arr[0]; // lt부터 rt까지의 합, sum이 m 이하인지 확인
    let cnt = 1; // rt번째 연속부분수열의 개수에 영향을 미치는 rt-1번째 연속부분수열의 개수
    // rt++ --> cnt++
    // lt++ --> cnt--
    
    while (lt<arr.length && rt<arr.length) {
        if (sum <= m) {
            result += cnt;
            sum += arr[++rt];
            cnt++;
        }
        else if (sum > m) {
            sum -= arr[lt++];
            cnt--;
        }
    }
    return result;
}

let a=[1, 3, 1, 2, 3, 6];
console.log(solution(5, a));