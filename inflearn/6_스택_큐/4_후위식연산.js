// str 원소 타입이 Number가 아니면은 ~~ 
// stack.pop()을 두번 해서 연산
// 연산 결과를 stack에 넣기
// ASCII ?

// if (!isNaN(x)) stack.push(Number(x));
// switch는 가급적 쓰지 말기

function solution(s){ 
    let stack = [];
    let a = 0;
    let b = 0;
    for (let x of str) {
        switch(x) {
            case '+':
                a = stack.pop();
                b = stack.pop();
                stack.push(b+a);
                break;
            case '-':
                a = stack.pop();
                b = stack.pop();
                stack.push(b-a);
                break;
            case '*':
                a = stack.pop();
                b = stack.pop();
                stack.push(b*a);
                break;
            case '/':
                a = stack.pop();
                b = stack.pop();
                stack.push(b/a);
                break;
            default:
                stack.push(Number(x));
        }
    } 
    return stack.pop()
}

let str="352+*9-";
console.log(solution(str));