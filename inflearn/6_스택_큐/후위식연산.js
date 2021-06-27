function solution(str) {
    let stack = [];

    for (let x of str) {
        if (isNaN(x)) {
            let n = stack.pop();
            if (x === '+') stack[stack.length - 1] += n;
            else if (x === '-') stack[stack.length - 1] -= n;
            else if (x === '*') stack[stack.length - 1] *= n;
            else if (x === '/') stack[stack.length - 1] /= n;
        }
        else stack.push(parseInt(x));
    }
    
    return stack.pop();
}

console.log(solution('352+*9-'));