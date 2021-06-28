function solution(arr) {
    let max = 0, cnt = 0;
    let table = [];

    for (let x of arr) {
        table.push([x[0], 1]);   // 출입시간일 경우 cnt+1
        table.push([x[1], -1]);   // 퇴장시간일 경우 cnt-1
    }

    table.sort((a, b) => a[0]===b[0] ? a[1]-b[1] : a[0]-b[0]);

    for (let x of table) {
        cnt += x[1];
        max = Math.max(max, cnt);
    };

    return max;
}

let arr = [[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));