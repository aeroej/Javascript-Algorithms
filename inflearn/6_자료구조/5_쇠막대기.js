// ( --> stack.push, result++
// ) --> 이전 원소가 (인지 보기
// --> ()인 경우, result += stack.length
// --> ))인 경우, stack.pop()

function solution(s){
    let result = 0;
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] === '(' && s[i+1] !== ')') { // 레이저가 아닌 (일 경우
            stack.push(s[i])
            result++;
        }
        else if (s[i] === ')') {
            if (s[i-1] === '(') result += stack.length // 레이저일 경우
            else stack.pop(); // 레이저가 아닌 )일 경우
        }
    }
    return result;
}

let a="()(((()())(())()))(())";
console.log(solution(a));