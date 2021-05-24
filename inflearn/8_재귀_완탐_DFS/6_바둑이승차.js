function solution(c, arr){
    let max = Number.MIN_SAFE_INTEGER; // 몇마리인지는 상관없고, 가장 무겁게
    function DFS(v, set) {
        if (v > arr.length) return;
        else {
            let subset = set.slice(); // 배열 깊은 복제
            let sum = subset.reduce((a, b) => a+b, 0);
            if (sum > max && sum <= c) max = sum;
            DFS(v+1, subset);
            subset.push(arr[v]);
            DFS(v+1, subset);
        }
    }
    DFS(0, []);
    return max;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));