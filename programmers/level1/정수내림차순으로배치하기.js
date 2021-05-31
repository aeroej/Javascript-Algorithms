/*
1. Number 대신에 parseInt
2. String 대신에 n+''
3. sort((a, b) => b-a) 대신에 sort().reverse()
*/

function solution(n) {
    return Number(String(n).split('').sort((a, b) => b-a).join(''));
}

console.log(solution(118372));