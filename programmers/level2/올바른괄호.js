function solution(str) {
    let stack = [];

    for (let x of str) {
        if (x === '(') stack.push('(');
        else if (stack.length === 0) return false;
        else stack.pop();
    }

    if (stack.length > 0) return false;
    
    return true;
}

console.log(solution(")()("));