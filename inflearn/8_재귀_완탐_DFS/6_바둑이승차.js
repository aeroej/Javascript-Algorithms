/*
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
*/


// DFS() 매개변수로 array를 보내지 않기
// DFS(index, sum) 
// arr 있다 없다 있다 없다 --> sum을 더하냐 마냐 --> c보다는 작지만 가장 큰 수 구함
// 1. DFS의 초기값 2. 종료시점 3. 출력시점
function solution(c, arr){
    let max = Number.MIN_SAFE_INTEGER;
    function DFS(v, sum) {
        if (v > arr.length) {
            if (sum > max && sum <= c ) max = sum;
            return;
        }
        else {
            DFS(v+1, sum);
            DFS(v+1, sum+arr[v]);
        }
    }
    DFS(0, 0);
    return max;
}

let arr=[81, 58, 42, 33, 61];
console.log(solution(259, arr));