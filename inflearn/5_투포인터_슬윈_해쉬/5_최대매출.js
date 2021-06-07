function solution(k, arr) {
    let result = 0;
    for (let i=0; i<=arr.length-k; i++) {
        let sum = arr.slice(i, i+k).reduce((a, b) => a+b, 0);
        result = Math.max(result, sum);
    }
    return result;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));