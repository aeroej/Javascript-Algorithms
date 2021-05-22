function solution(meeting){
    arr.sort((a, b) => {
        if (a[1] === b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    let end = arr[0][1];
    let cnt = 1;
    for (let i=1; i<arr.length; i++) {
        if (arr[i][0] >= end) {
            cnt++;
            end = arr[i][1];
        }
    }
    return cnt;
}

// let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]];
let arr = [[3, 3], [1, 3], [2, 3]];
console.log(solution(arr));