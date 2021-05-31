/*
1, 5, 25 제곱인 경우를 놓침 !!

if (!n%i) -->  NO
if (!(n%i)) --> YES
if (n%i === 0) --> YES

제곱수 확인할 때
if (Math.sqrt(n)**2 === n) --> NO
if (Math.sqrt(n) === parseInt(Math.sqrt(n))) --> YES
*/


// 1, 5, 25 제곱인 경우를 놓침 !!
function solution(n) {
    let sum = 0;
    if (Math.sqrt(n) ** 2 === n) sum += Math.sqrt(n);
    for (let i=1; i<=Math.sqrt(n); i++) {
        if (!n%i) sum += i + n/i; 
    }
    return sum;
}

console.log(solution(12));
console.log(solution(1));
console.log(solution(0));


function solution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            answer += (i + n / i);
        }
    }
    i--;
    return (i === n / i) ? answer - i : answer;
}