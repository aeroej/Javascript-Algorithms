// 오는시간에 존재, 가는시간에 존재x
// 0인덱스가 가는시간 14 전에 1인덱스가 옴 ++
// 

function solution(times){
    // times.sort((a, b) => {
    //     return (b[1]-b[1])-(a[1]-a[0]);
    // })
    times.sort((a, b) => {
        return a[1]-b[1];
    })
    let start = times[0][0];
    let end = times[0][1];
    let cnt = 1;
    for (let i=1; i<times.length; i++) {
        if (times[i][0] < end && times[i][0] >= start) {
            cnt++;
            start = times[i][0];
            end = Math.min(end, times[i][1]);
        }
    }
    return cnt;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 15]];
console.log(solution(arr));