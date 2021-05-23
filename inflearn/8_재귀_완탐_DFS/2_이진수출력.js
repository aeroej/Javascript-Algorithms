function solution(n) {
    let result = '';

    function DFS(n) {
        if (n === 0) return;
        else {
            DFS(Math.floor(n/2));
            result += n%2;
        }
    }
    DFS(n);

    return result;
}

console.log(solution(11));

