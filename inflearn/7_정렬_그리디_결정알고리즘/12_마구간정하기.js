// 가장 가까운 말의 거리가 dist일 때, 말은 몇마리?
function count(stable, dist){ 
    let cnt = 1;
    let x = stable[0]; 
    for (let i=1; i<stable.length; i++) {
        if (stable[i]-x >= dist) {
            cnt++;
            x = stable[i];
        }
    }
    return cnt;
}

function solution(c, stable){
    stable.sort((a, b) => a-b);
    let lt = 1; // 두 말의 최소거리
    let rt = stable[stable.length-1]-1; // 두 말의 최대거리 ex) 9-1 = 8
    let result = 0;
    while (lt<=rt) {
        let mid = Math.floor((lt+rt)/2);
        let cnt = count(stable, mid);
        if (cnt >= c) {
            result = mid;
            lt = mid+1;
        }
        else if (cnt < c) rt = mid-1; // cnt = 2, c = 3
    }
    return result;
}

// let arr=[1, 2, 8, 4, 9];
let arr=[5, 6, 8, 12, 14];
console.log(solution(3, arr));