/*
다 아는 건데 활용을 잘 하자구 !!!
arr.splice(제거할 인덱스, 제거할개수)
str.split('')
arr.indexOf()
...arr
*/

/*
function solution(arr) {
    if (arr.length <= 1) return [-1];
    let min = Number.MAX_SAFE_INTEGER;
    let index;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] < min) [min, index] = [arr[i], i];
    }
    arr.splice(index, 1);
    return arr;
}
*/

function solution(arr) {
    if (arr.length <= 1) return [-1];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    return arr
}

console.log(solution([4, 3, 1, 2]))