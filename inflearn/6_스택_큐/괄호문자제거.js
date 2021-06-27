function solution(str) {
    let res = '';
    let stack = [];

    for (let x of str) {
        if (x === '(') stack.push(x);
        else if (x === ')') stack.pop();
        else if (stack.length === 0) res += x;
    }

    return res;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))