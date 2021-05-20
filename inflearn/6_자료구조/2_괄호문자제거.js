// ( 스택에 넣기 stack.push()
// stack.length !== 0 인 경우에 문자열 무시
// ) 스택에 있는 ( 꺼내기 stack.pop()
// stack.length === 0 인 경우 문자열 저장 --> result

function solution(s){
    let result = '';
    let stack = [];
    for (let x of str) {
        if (x === '(') {
            stack.push(x);
        }
        else if (x === ')') {
            stack.pop();
        }
        else {
            if (stack.length === 0) result += x
        }
    }
    return result;
}

let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));