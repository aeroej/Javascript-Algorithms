/*
function solution(n) {
    return (n + "").split('').reverse().map((v) => parseInt(v));
}
*/

// 문자풀이보다 숫자풀이가 빠르다 !!
function solution(n) {
    let result = [];
    while(n>0) {
        result.push(n%10);
        n = parseInt(n/10);
    }
    return result;
}

console.log(solution(1345));