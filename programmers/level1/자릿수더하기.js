/*
문제 설명
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

제한사항
N의 범위 : 100,000,000 이하의 자연수
입출력 예
N	answer
123	6
987	24
입출력 예 설명
입출력 예 #1
문제의 예시와 같습니다.

입출력 예 #2
9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
*/

/* 숫자풀이
function solution(n) {
    let sum = 0;
    while(n>0) {
        sum += n%10;
        n = Math.floor(n/10);
    }
    return sum;
}
*/

// 문자풀이
function solution(n) {
    // return String(n).split('').reduce((a, b) => a + Number(b), 0);
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}

console.log(solution(987))