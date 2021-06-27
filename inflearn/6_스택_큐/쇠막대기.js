function solution(str) {
    let cnt = 0;
    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            stack.push(str[i]);
            cnt++;
        }
        else {
            stack.pop();
            if (str[i - 1] === '(') cnt += stack.length - 1;  // 레이저인 경우
        }
    }

    return cnt;
}

console.log(solution('(((()(()()))(())()))(()())'));  // 24